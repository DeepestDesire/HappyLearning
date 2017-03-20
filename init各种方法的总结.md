#init各种方法的总结


1. initWithNibName,这个方法是ViewController的类在IB中创建，实例化ViewController的时候用.

	     initWithNibName:

2. initWithCoder 是一个类在IB中创建，被实例化的时候调用.
		    
		initWithCoder:
		
3. awakeFromNib 当nib文件被加载的时候，会发送一个awakeFromNib的消息到nib文件中的每一个对象，每个对象都可以定义自己的awakeFromNib函数来响应这个消息，执行一些必要的操作。
 
		awakeFromNib：

4. loadNibName 和 initWithNibName 区别
