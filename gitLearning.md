
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
 
