#UILabel Class Reference
UILabel can use shadow and highlight.

UILabel default content mode is UIViewContentModeRedraw.this mode causes the view to redraw its contents every time its bounding rectangle changes.You can change zhe mode by modifing the inherited contentMode property of the class.

UILabel is disregard user events and clips subviews by default.you can change the value of the userInteractionEnabled property to YES after initializing the object.

You can allow subviews to extend beyond the bounds of a label,you must explicitly change the value the value of the label's clipsToBounds property to NO.

For more infomation about basic view behaviors ,see View Programing Guide for IOS.

For more infomation ablout appearance and behavior configuration,see Labels in UIKit User Interface Catalog.

##Accessing the text Attributes
text 

	default is nil .assigning a new value to this property also replaces the value of 
	attributedText propertywith the same text,albeit without any inherent style 
	attributes.Instead the label styles the new string using the 
	shadowColor,textAlignment,adn outher style-related properties of the class.


font 

	The default value for this property is the system font at a size of 17 points.
	can not be nil,