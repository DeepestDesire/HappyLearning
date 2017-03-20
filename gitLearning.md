
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
