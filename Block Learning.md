#Block Learning

define a block in literal use the caret symbol ,like this


	^{
		nslog("this is a block");
	}
	
	
defina a variable to keep track of a block, like this


	
	void (^simpleBlock)(void);
	
variable can be assigned the block literal shown above,like this,

	
	simpleBlock = ^{
		nslog("This is a block");
	}
	
this is like just other variable assignment,so the statement must be terimanited by semi colon after close brace.you can combine the variable declaration and assignment.
	
	void (^simpleBlock)(void) = ^{
		nslog("this is simple block");
	}

you can invoke a block like this

	simpleBlock();
	

#use Type Definition to simplify Block Syntax


	typedef void (^XYZSimpleBlock)(void);
	
you can use custom type for method parameter of when creating block variable
	
	XYZSimpleBlock anotherBlock = ^{
	.....
	};
	
	- (void)beginFetchWithCallbackBlock:(XYZSimpleBlock)callbackBlock{
	
	
	}
