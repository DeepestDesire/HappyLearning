#View（视图） 常用View的属性关键字

**alpha , hidden , opaque**

These properties affect the opacity of the view. The alpha and hidden properties change the view’s opacity directly.
这些属性影响视图的不透明度，alpha 和 hidden 属性可以 直接 改变视图的不透明度。
The opaque property tells the system how it should composite your view.
opaque 不透明度属性告诉系统，如何符合你写的View

 Set this property to YES if your view’s content is fully opaque and therefore does not reveal any of the underlying view’s content.
 设置不透明属性为YES，你的视图内容是完全不透明的 那么就不会显示在此视图下面的内容。
 
 Setting this property to YES improves performance by eliminating unnecessary compositing operations.
 设置这个属性为YES将提高运行速度通过监视不需要的符合行为。
 
 
 
 **bind,frame,center,transform**
 These properties affect the size and position of the view.
 
 这些属性影响视图的大小和位置
 
 The center and frame properties represent the position of the view relative to its parent view. 
 
 center 和 frame 代表视图在其父视图中的位置
 
 The frame also includes the size of the view.
 
 frame还包含视图大小属性
 
 The bounds property defines the view’s visible content area in its own coordinate system.
 
 bounds属性定义视图在其自己的坐标系统中可见内容的的区域。
 

The transform property is used to animate or move the entire view in complex ways.
transform 属性被用于动画或者移动整个视图在某些复杂的情景

For example, you would use a transform to rotate or scale（缩放） the view.

举例，你可能会用transform去旋转和缩放视图

If the current transform is not the identity transform, the frame property is undefined and should be ignored.



For information about the relationship between the bounds, frame, and center properties, see The Relationship of the Frame, Bounds, and Center Properties. 




For information about how transforms affect a view, see Coordinate System Transformations.





##The Relationship of the Frame, Bounds, and Center Properties
A view object tracks its size and location using its frame, bounds, and center properties:

视图响应自己的大小位置变化通过使用 frame bounds center 属性

The frame property contains the frame rectangle, which specifies the size and location of the view in its superview’s coordinate system.

frame属性有 具体声明在其父视图的坐标系统中视图大小和位置的矩形框架


The bounds property contains the bounds rectangle, which specifies the size of the view (and its content origin) in the view’s own local coordinate system.
bounds属性具有  具体声明 在其自己的是坐标系统中 视图的大小和视图的原位置的边界框架


The center property contains the known center point of the view in the superview’s coordinate system.
中心属性具有视图的中心位置再起父视图的坐标系统中.

 