The iOS native graphics system combines three major technologies: UIKit, Core Graphics, and Core Animation. UIKit provides views and some high-level drawing functionality within those views, Core Graphics provides additional (lower-level) drawing support within UIKit views, and Core Animation provides the ability to apply transformations and animation to UIKit views. Core Animation is also responsible for view compositing.

ios原生图像系统综合了三种主要技术 UIKit ，Core Graphics， Core Animation。
UIKit提供视图和高层次的绘制功能 Core Graphics 提供底层绘制功能在UIkit中 。Core Animation 提供转场和动画功能给UIKit的视图。Core Animation 同样负责视图的位置。



#iOS Drawing Concepts



iOS provides two primary paths for creating high-quality graphics in your system: OpenGL or native rendering using Quartz, Core Animation, and UIKit.

iOS 提供两种主要的高性能绘制功能 OpenGL 和 使用Quartz Core Animation UIKit原生绘制 

##The UIKit Graphics System

###The View Drawing Cycle

Obtaining Graphics Contexts

绘制到屏幕上  


 flip  rendering


##Drawing With Quartz and UIKit
Quartz is the general name for the native drawing technology in iOS. The Core Graphics framework is at the heart of Quartz, and is the primary interface you use for drawing content.


manipulate



UIKit builds on the basic features of Quartz by providing a focused set of classes for 
graphics-related operations.

The UIKit graphics classes are not intended as a comprehensive set of drawing tools—Core Graphics already provides that.


Graphics contexts
Paths
Images and bitmaps
Transparency layers
Colors, pattern colors, and color spaces
Gradients and shadings
Fonts
PDF content


###Configuring the Graphics Context 修改（会话内容）画布属性

Before calling your drawRect: method, the view object creates a graphics context and sets it as the current context. This context exists only for the lifetime of the drawRect: call. You can retrieve a pointer to this graphics context by calling the UIGraphicsGetCurrentContext function. This function returns a reference to a CGContextRef type, which you pass to Core Graphics functions to modify the current graphics state. Table 1-1 lists the main functions you use to set different aspects of the graphics state. For a complete list of functions, see CGContext Reference. This table also lists UIKit alternatives where they exist.

在你绘图前，view 创建了画布，并且默认为当前画布，画布在调用drawRect：的方法后销毁。你可以获取到这个画布通过UIGraphicsGetCurrentContext 这个方法。这个方法 返回一个CGContextRef 类型，你可以通过COre Graphics去修改他。