# js native 相互调用的框架分析（WebViewJavascript）

创建 Bridge  
----

    + (instancetype)bridgeForWebView:(WVJB_WEBVIEW_TYPE*)webView;
并且设置 Bridge 为 webview 和 bridgebase 的代理



-------------

OC 调用 JS
----

####1. OC 传入方法名 handlerName 和 data(参数),JS 返回 responseCallback 

使用数组把 handlerName 和参数 data 放入字典中

使用

    - (void)callHandler:(NSString *)handlerName data:(id)data responseCallback:(WVJBResponseCallback)responseCallback 
---
e.g.

    [bridge registerHandler:@"testObjcCallback" handler:^(id data, WVJBResponseCallback responseCallback) {
    // you can do something here
    }

然后在JS 端注册同名的function 以testJavascriptHandler 为例

    bridge.registerHandler('testJavascriptHandler',function(data, responseCallback) {
    // you can do something here }
    )
    
###原理 

js 已经注册了 以methodName 为表示的方法 OC通过

    [_webView stringByEvaluatingJavaScriptFromString:javascriptCommand];
来执行JS语句


-------------
JS调用OC语句
----

OC注册一个桥接 

    [_bridge registerHandler:@"myHander" handler:^(id data, WVJBResponseCallback responseCallback) {
    // you can do something here 

    }];

参数有 HanderName 还有 回调 和 嵌套回调

js执行某个方法

    bridge.callHandler('myHander',{'foo':'bar'},function(response){
    // you can do something here 
		})



###Javascript调用OC 使用的是 HanderName 对应特定 Block 块（Object）

----------
原理

####1、监听

    - (BOOL)webView:(UIWebView *)webView shouldStartLoadWithRequest:(NSURLRequest *)request navigationType:(UIWebViewNavigationType)navigationType 
方法
 
####2、截获request的URL 
    NSURL *url = [request URL];
        
    -(BOOL)isCorrectProcotocolScheme:(NSURL*)url {
    if([[url scheme] isEqualToString:kCustomProtocolScheme]){
        return YES;
    } else {
        return NO;
    }
    }
    
    -(BOOL)isQueueMessageURL:(NSURL*)url {
    if([[url host] isEqualToString:kQueueHasMessage]){
        return YES;
    } else {
        return NO;
    }
    }
####3、通过URL的 scheme 和 host 判断 还有 uniqueID （对应具体对象的block块）
