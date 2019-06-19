#Swfit
## Initialization
Swift initializers do not return a value. 

##Setting Initial Values for Stored Properties

You can set an initial value for a stored property within an initializer, or by assigning a default property value as part of the property’s definition. These actions are described in the following sections.


NOTE

When you assign a default value to a stored property, or set its initial value within an initializer, the value of that property is set directly, without calling any property observers.


###Local and External Parameter Names
Swfit provides an automatic external name for every parameter in an initializer if you don't provide an external name yourself.


###initializer parameters without external names
if you do not want to use an external name for an initializer parameter,write an underscore(_) instead of an explicit external name for that parameter to override the default behavior.
Here's an expanded version of the celsius example form earlier,with an additional initializer to create a new celsius instance from a double value that is already in the celsius scale.

###optional property types
you can assign a value to a constant property at any point during initialization. as long as it is set to a definite value by the time initialization finishes.once a constant preperty is assigned a value, it can't be further modified.



##Protocol
if a class has a superclass,list the super class name before any protocols it adopts.follow by comma.

	class SomeClass: SomeSuperclass, FirstProtocol, AnotherProtocol {
   		// class definition goes here
	}



##Function
###defining and calling function
###function without parameters
###function with multiple parameters
###function without return values
###function wiht multiple values
####optional tuple return types
###function parameter names
###specifying external parameter names
###omitting external parameter names
###default parameter values
###variladic parameters
###in-out parameters
###function types(using function type, function type as parameter types)
###nested function


##E