#keychain 
kaychainItemwrapper SHFFKeychainUtils 

#设置navigationbar 背景颜色
如何没有色差

    self.navigationController.navigationBar.translucent = NO;

这一句话是关键 设置成不透明

如何消除navigationbar下面的分割线

    [self.navigationController.navigationBar setShadowImage:[UIImage new]];
    [self.navigationController.navigationBar setBackgroundImage:[UIImage new] forBarMetrics:UIBarMetricsDefault];
    
    