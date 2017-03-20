# js native 相互调用的框架分析（WebViewJavascript）

创建 Bridge  
-----

    + (instancetype)bridgeForWebView:(WVJB_WEBVIEW_TYPE*)webView;
并且设置 Bridge 为 webview 和 bridgebase 的代理



OC 调用 JS
----

####1. OC 传入方法名 methodName 和参数,JS 返回 (ID) responseCallback 

使用数组把 method name 和参数 data 放入字典中

使用

    - (void)_dispatchMessage:(WVJBMessage*)message 
来执行 javascript 语句



#####`			·	 X```		`原理 

js 已经注册了 以methodName 为表示的方法 OC通过

    [_webView stringByEvaluatingJavaScriptFromString:javascriptCommand];
来执行JS语句

--------
JS调用OC语句
----

OC注册一个桥接 

    [_bridge registerHandler:@"testObjcCallback" handler:^(id data, WVJBResponseCallback responseCallback) {
        NSLog(@"testObjcCallback called: %@", data);
        responseCallback(@"Response from testObjcCallback");
    }];

参数有 MethodName 还有 回调 和 嵌套回调




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
