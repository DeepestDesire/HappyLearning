# UIToolbar 学习

1. 从StoryBoard创建的 Toolbar 的 items 属性为空 (打脸 肯定不为空)
2. tintColor IOS7 之前是用来设置toolbar的背景颜色，IOS7 之后是来修改上面item的字体颜色 （前提是item没有自己设置自己的tintColor）
3. @available(iOS 7.0, *） barTintColor  IOS 7 是用来设置Toolbar的背景颜色
4. Bar Button Item 不是一个 view 但是它管理了一个 View


#### *UIBarButtonSystemItemFlexibleSpace

在过程中，我们认识到了一个很重要的UIBarButtonItem，
它是系统自带的，之前我们讲过照相机、reply这些系统自带的按钮，这次说的是UIBarButtonSystemItemFlexibleSpace，严格说它不是一个的bar按钮，而是一个可以自由缩放的区域，类似于弹簧，其他地方被占满了它就缩小一些，没占满它就大一些。
它用来排版我们这些UIBarButtonItem，有两个UIBarButtonItem时，我们除了再首位增加一个UIBarButtonSystemItemFlexibleSpace，还在它们中间增加一个，它们就居中了，如果有三个，你猜到会怎么做的吧。


创建一个BarButtonItem 默认是可点击的,有时候我们需要它不可点击.


# UIBarButtonItem 学习
	- initWithCustomView:	
使用此方法创建的BarButtonItem有点特殊，BarButtonItem将所有的事件管理都交给了 CustomView




