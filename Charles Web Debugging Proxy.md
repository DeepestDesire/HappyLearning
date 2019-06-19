# Charles （Web Debugging Proxy） 网络封包抓取工具  设置

## 下载软件

- [xclient 下载网站](http://xclient.info/)
- 搜索 Charles
- 运行环境: OS X

## 运行配置软件

- 下载 Charles 后,第一次点开时,Charles 会主动弹窗. Automatic macOS Proxy Configuration

- Automatic macOS Proxy Configuration 自动修改OS系统中的代理设置
  - 给 Charles 修改系统网络设置的权限 （Grant Privilege）
  - 在电脑上的显示 在Setting -> Network -> Ethernet -> Advanced -> Proxy ->  
    1. Web Proxy
    2. Secure Web Proxy

- 打开代理 关闭代理 并不需要关闭程序 只需要使用快捷键 `shift`+ `command`+ `p`

- 当你使用 Chrome 开发时，在没有配置的情况下你可能抓不到包(具体不细说，因为等下说原理)

- https: 本机（计算机）代理
  - Help ->  SSL proxying -> install charles root certificate  安装charles根证书到本机 
  - 打开 Keychain Access , 找到 charles 根证书，并且信任此证书
  - 默认情况下charles是不会抓取任何Https封包的，需要我们手动添加规则来抓包
        1. 点击一个请求，右键，选择 enable SSL Proxying
        2. proxy -> SSL proxying Setting -> 添加 Host 
            - 这里的host可以用正则表达式 `*.baidu.*` 将所有佩戴baidu的都进行抓包

- https: 手机代理
  - 设置手机WIFI的代理
    - 本机地址
    - 端口地址
  - 下载证书 chls.pro/ssl
  - 抓取https请求

- Access Control 接入控制
  - 用以阻止或控制 用户（或系统）系统进行通信和交互
  - `proxy` -> `access control` prompt to allow unauthorized connections 当你有新设备接入时，会自动弹出对话框来告诉你。
  - access control setting 可以导出 如果你做了很多设置的话 迁移的时候很方便

- 设置代理
  - 如何快速获取本机地址 `Help` -> `lcoal IP Address`
  - 设置端口号 Http Proxy port: 8888

## 几个快捷键

- 清除所有记录 `Command`+ `Delete`
- Throttle 模式 模拟网络环境差 快捷键 `Command` + `T`
- 开始/关闭 记录 `Command`+ `R`
- 模拟网络状态差
  - Throttle 模式 模拟网络环境差 快捷键 `Command` + `T`

## 界面模块

- 界面有两种形式 Structure 和 Sequence
  - Structure 以Host(主机)和路径来划分的树状结构
  - Sequence 默认的是以封包的发送时间来排列的
  - Fiter: 只有在sequence界面才有
    - 筛选相关封包

- Recording Setting（筛选记录）
  - Include 选项卡
    1. 这是一个列表，为空时。会显示所有的请求（封包）数据
    2. 当这个列表不为空时，只会记录匹配这个列表的中的地址的请求
  - Exclude 不包含
    1. 当这个列表不为空时，如果请求的地址匹配到任何一个列表中地址，将不会记录

- 请求的过程 IP地址加端口号 服务器端 监听端口 相应处理


## 抓包相关计算基础知识

- 场景: 本机抓包
  - 其实本机中两个进程之间进行通信 Charles监听本地的一个端口 默认是8888
  - 大多数操作系统都支持多程序（进程）同时运行，那么目的主机应该把接收到的数据包传送给众多同时运行的进程中的哪一个呢？显然这个问题是通过端口来解决的，端口机制便由此被引入进来。

- 什么是程序、进程、端口、
  - 程序是固定的有序列的代码块
  - 进程离开了系统无从谈起，进程是执行程序的过程。
  - 端口：进程之间就是通过端口来交流

- 什么是IP
  - 物理层，数据链路层，网络层，运输层，应用层
  - 网络层: 网络层向上只提供简单灵活的、无连接的、尽最大努力交付的数据报服务。
  - IP协议解决了什么问题
    - 标识网络上电脑 （IP地址有分类 分类的原因） A类 B类 c类 d类 （方便路由 这个地方需要举例说明）
    - A类IP特点是网络号第一个位置为0, 网络号占1一个字节，
        1. 127.0.0.1 和 全0 的特殊作用  127.0.0.1标识的是本机 是一个环回地址  localhost是一个域名，在过去它指向 127.0.0.1 这个IP地址。在操作系统支持 ipv6 后，它同时还指向ipv6 的地址 [::1]
        2. 127.0.0.1 这个地址通常分配给 loopback 接口 （环回地址）。loopback 是一个特殊的网络接口(可理解成虚拟网卡)，用于本机中各个应用之间的网络交互。只要操作系统的网络组件是正常的，loopback 就能工作
- IP协议不包含端口信息，因为IP解决的问题是网络上各个物理机器的标识问题
- 那么什么地方保存端口信息 socket 套接字被引入进来
- TCP协议 TCP把连接作为最基本的抽象
  - socket 套接字
- 统一资源定位符 URL
  - 格式  <协议>://<主机（host）>:<端口（port)>/（路径）
  - 大部分默认的协议都会有默认端口  http协议默认端口是80 https默认端口是443

- DHCP 动态主机分配协议 Dynamic Host Configuration Protocol
