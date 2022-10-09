



### Databus Relays

1. 捕获数据库行变化，在内存中打包为数据变化事件.

2. 监听Clients的请求，将数据变化事件发送给Client.


### Databus Clients

1. 检查数据变化事件，并回调业务逻辑.

2. 如挂掉，从databus bootstrap server读取挂掉后的所有数据变化事件.

3. 新的client加入，先从databus bootstrapserver读取数据，之后变为处理最近的数据变化事件.

4. 一个client可以处理全部的事件流，也可多个client分块处理事件流.



