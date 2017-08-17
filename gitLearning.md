
# This is a file about recording git Info.

## 从远程服务器上的一个分支上拉取项目到本地一个新分支   

	git checkout daiyao origin/branchName  

## 超越梦想一起飞 鼓励自己 10年后的自己看见后 会是怎么的感触

## 查看 commit 日志  

	git log -3  // -3 代表是打印最新的三个commit日志

## 查看 commit 日志 添加参数 简化信息 

	git log --pretty=oneline -5 // --pretty=oneline 代表打印简化后的commit信息 只有commit Hash 跟commit description

## 创建一个新的分支 

	git checkout -b 'branch_name'

## 查看当前tag

	git tag -l 

## 给当前commit打tag值

	git tag tag_name 
	git tag -a tag_name
	git tag -a tag_name -m 'tag_description'
	git tag -l // 列出所有的tag name
	git tag -v tag_name // verify tags

## 打印当前路径

	pwd  // print /Users/georgecharles/Documents/IOSDemo/HappyLearning
	
## 在工作区对某个文件发生修改 删除修改

    git checkout <file>

将文件reset到最近一次提交

    git reset --hard
    
将整个工作区还原到最后一次提交

## git diff 如何查看文件的修改情况.

git diff 是用来查看缓存区与工作区的文件修改状态

注意： 当你使用 git add -A 之后 修改的文件将会从工作区保存到缓存区 这时候来用 git diff 来查看文件的修改状态 是看不到任何变化的
所以 git diff 应该在将工作区文件添加到缓存区之前使用
	
## 删除远程分支的commit
git push --force

## 查看远程分支的Commit 
1. 先切换到远程分支
2. 再查看commit
    
    
        git checkout origin/master 
        git log

##  git log --pretty=oneline 打印当前分支的commit信息并且精简信息 只有一行
   
	b2cf6a0ce55b3890f4fda7fbda47fdfb8a5566a5 Dentist Client 添加支付宝SDK
	bec76f4d714a3a3775ea6e4d87cf74dccc158b53 添加 String 的扩展
	7d1616504b59cd78597b648bae7f5aa73a5f61a5 dentist: 关于年龄跟性别的现实

##1.安装
##2.配置
1.当安装完 Git 应该做的第一件事就是设置你的用户名称与邮件地址。 这样做很重要，因为每一个 Git 的提交都会使用这些信息，并且它会写入到你的每一次提交中，不可更改：

    git config --global user.name "John Doe"
    git config --global user.email johndoe@example.com
    
2.设置默认编辑器

    git config --global core.editor emacs
    
3.检查你的设置

	git config --list


	



