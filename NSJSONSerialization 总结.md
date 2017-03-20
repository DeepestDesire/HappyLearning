#NSJSONSerialization 总结

使用NSJSONSerialization将JSON转化为Foundation Object 或者是将Foundation Object转化为JSON

转化为JSON的实体必须满足下面的条件

 1. 最上层实体是NSArray 或者是 NSDicationary
 2. 所有的object是NSString，NSNumber, NSArray, NSDictionary,Null
 3. 所有的Key是NSString
 4. Number不是无限大等极端情况

 isValidJSONObject 能告知你一个实体是否能被转化为JSON。
 
 
 NSJSONSerialization类提供两类方法 
 
 1. 生成JSONData
 2. 生成JSONObject

 
 ##先讨论生成JSONData这类方法
 NSJSONSerialization dataWithJSONObject:options:error:
 
 
 