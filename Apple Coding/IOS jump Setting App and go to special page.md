# IOS 跳转系统设置并制定页面

- oc 语法  
    
        [[UIApplication sharedApplication] openURL:[NSURL URLWithString:UIApplicationOpenSettingsURLString]];  
        
        
- Swift 语法

        UIApplication.shared.openURL(URL(string: UIApplicationOpenSettingsURLString)!)



补充资料： 
在iOS应用程序中打开设备设置界面并跳转某指定的选项界面

[[UIApplicationsharedApplication] openURL:[NSURL 
URLWithString:@”prefs:root=General”]]; 
[[UIApplicationsharedApplication] openURL:[NSURL 
URLWithString:@”prefs:root=General&path=Restrictions”]];
一些其他可用的参数:

List of currently known URLs in the Settings app:

prefs:root=General&path=About //关于 
prefs:root=General&path=ACCESSIBILITY//重力感应 
prefs:root=AIRPLANE_MODE//飞行模式 prefs:root=General&path=AUTOLOCK//自动锁定 
prefs:root=General&path=USAGE/CELLULAR_USAGE//用量 
prefs:root=Brightness//亮度调节 prefs:root=General&path=Bluetooth//蓝牙 
prefs:root=General&path=DATE_AND_TIME//时间和日期 prefs:root=FACETIME// 
prefs:root=General//通用 prefs:root=General&path=Keyboard//键盘 
prefs:root=CASTLE// prefs:root=CASTLE&path=STORAGE_AND_BACKUP// 
prefs:root=General&path=INTERNATIONAL// 
prefs:root=LOCATION_SERVICES//定位 prefs:root=ACCOUNT_SETTINGS// 
prefs:root=MUSIC//音乐 prefs:root=MUSIC&path=EQ// 
prefs:root=MUSIC&path=VolumeLimit// 
prefs:root=General&path=Network//网络 prefs:root=NIKE_PLUS_IPOD// 
prefs:root=NOTES// prefs:root=NOTIFICATIONS_ID// prefs:root=Phone// 
prefs:root=Photos//相册 
prefs:root=General&path=ManagedConfigurationList// 
prefs:root=General&path=Reset// prefs:root=Sounds&path=Ringtone// 
prefs:root=Safari// prefs:root=General&path=Assistant// 
prefs:root=Sounds//声音 prefs:root=General&path=SOFTWARE_UPDATE_LINK// 
prefs:root=STORE// prefs:root=TWITTER// 
prefs:root=General&path=USAGE// prefs:root=VIDEO//视频 
prefs:root=General&path=Network/VPN// prefs:root=Wallpaper//壁纸 
prefs:root=WIFI// prefs:root=INTERNET_TETHERING//


