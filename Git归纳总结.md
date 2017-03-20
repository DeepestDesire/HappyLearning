#Git归纳总结
###1.安装
###2.配置
1.当安装完 Git 应该做的第一件事就是设置你的用户名称与邮件地址。 这样做很重要，因为每一个 Git 的提交都会使用这些信息，并且它会写入到你的每一次提交中，不可更改：

    git config --global user.name "John Doe"
    git config --global user.email johndoe@example.com
    

2.设置默认编辑器

    git config --global core.editor emacs
    
    
3.检查你的设置

	git config --list
	
4.


#  git log --pretty=oneline
  
  
  
   **git log --pretty=oneline**
   
	b2cf6a0ce55b3890f4fda7fbda47fdfb8a5566a5 Dentist Client 添加支付宝SDK
	bec76f4d714a3a3775ea6e4d87cf74dccc158b53 添加 String 的扩展
	7d1616504b59cd78597b648bae7f5aa73a5f61a5 dentist: 关于年龄跟性别的现实