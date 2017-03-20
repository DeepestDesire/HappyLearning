
#APP日志功能的实现

##使用成熟框架CocoaLumberjack
###1.设定 Log 等级
###2.积攒到一定量的 log 后，一次性发送给服务器
设定 _saveThreshold 值即可，比如如果希望积攒1000条 log 再一次性发送，就赋值 1000.
###3.一定时间后，将未发送的 log 发送到服务器
设定 _saveInterval，比如如果希望每分钟发送一次，就设定 60.
###4.在 App 切入后台时将未发送的 log 发送到服务器
可以监听 UIApplicationWillResignActiveNotification 事件，当触发时，手动调用 logger 的 db_save 方法，发送数据给服务器。

##手机用户信息的实现
###一：收集用户信息
1.手机型号
手机号码 物理mac地址 网络状态 地理位置 

设备标识

关于设备标识，历史上盛行过很多英雄，比如UDID、Mac地址、OpenUDID等，然而他们都陆陆续续倒在了苹果的门下。苹果目前提供了2个方法供App获取设备标识：idfa和idfv

idfa：全称advertisingIdentifier，官方解释是广告标识，适用于广告推广，这个建议不要轻易使用，如果用了，则App里必须提供广告功能，否则很有可能会在AppStore审核时被拒。而且idfa是可以被用户关闭的（ 设置 -> 隐私），一旦被关闭，就获取不到了。


idfv：全称identifierForVendor，按照字面意思理解，相同的Vendor应该有相同的identifier。Vendor是根据app的bundleid的前两位来界定的，比如对于com.abc.app1和com.abc.app2这2个bundleid的app来说，他们就属于同一个vendor。idfv是一定可以获取到的。需要注意的一点是，当用户将某个vendor下的所有app都卸载掉时，idfv就会被重置，再次安装时，获取到的idfv会跟之前的不一样。所以我用的方案是：idfv+keychain。当然如果用户选择恢复出厂设置，那么还是会出现不一样，这种情况就没法处理了。



    +(NSString * )identifier{
    NSString *key = @"com.app.keychain.uuid";
    KeychainItemWrapper *keychainItem = [[KeychainItemWrapper alloc] initWithIdentifier:key accessGroup:nil];];
    
    NSString *strUUID = [keychainItem objectForKey:(__bridge id)kSecValueData];
    
    if (strUUID.length <= 0) {
        strUUID = [[[UIDevice currentDevice] identifierForVendor] UUIDString];
        
        [keychainItem setObject:@"uuid" forKey:(__bridge id)kSecAttrAccount];
        [keychainItem setObject:strUUID forKey:(__bridge id)kSecValueData];
    }
    
    return strUUID;
    }


手机别名

+(NSString *)phoneName
{
    return [[UIDevice currentDevice] name];
}

手机系统版本
/**
 *  手机系统版本
 *
 *  @return e.g. 8.0
 */
+(NSString *)phoneVersion{
    return [[UIDevice currentDevice] systemVersion];
}

手机型号
这个方法只能获取到iphone、iPad这种信息，无法获取到是iPhone 4、iphpone5这种具体的型号。
/**
 *  手机型号
 *
 *  @return e.g. iPhone
 */
+(NSString *)phoneModel{
    return [[UIDevice currentDevice] model];
}

设备版本
这个代码可以获取到具体的设备版本（已更新到iPhone 6s、iPhone 6s Plus），缺点是：采用的硬编码。具体的对应关系可以参考：https://www.theiphonewiki.com/wiki/Models
这个方法可以通过AppStore的审核，放心用吧。
/**
 *  设备版本
 *
 *  @return e.g. iPhone 5S
 */
+ (NSString*)deviceVersion
{
    // 需要#import "sys/utsname.h"
    struct utsname systemInfo;
    uname(&systemInfo);
    NSString *deviceString = [NSString stringWithCString:systemInfo.machine encoding:NSUTF8StringEncoding];
    
    //iPhone
    if ([deviceString isEqualToString:@"iPhone1,1"])    return @"iPhone 1G";
    if ([deviceString isEqualToString:@"iPhone1,2"])    return @"iPhone 3G";
    if ([deviceString isEqualToString:@"iPhone2,1"])    return @"iPhone 3GS";
    if ([deviceString isEqualToString:@"iPhone3,1"])    return @"iPhone 4";
    if ([deviceString isEqualToString:@"iPhone3,2"])    return @"Verizon iPhone 4";
    if ([deviceString isEqualToString:@"iPhone4,1"])    return @"iPhone 4S";
    if ([deviceString isEqualToString:@"iPhone5,1"])    return @"iPhone 5";
    if ([deviceString isEqualToString:@"iPhone5,2"])    return @"iPhone 5";
    if ([deviceString isEqualToString:@"iPhone5,3"])    return @"iPhone 5C";
    if ([deviceString isEqualToString:@"iPhone5,4"])    return @"iPhone 5C";
    if ([deviceString isEqualToString:@"iPhone6,1"])    return @"iPhone 5S";
    if ([deviceString isEqualToString:@"iPhone6,2"])    return @"iPhone 5S";
    if ([deviceString isEqualToString:@"iPhone7,1"])    return @"iPhone 6 Plus";
    if ([deviceString isEqualToString:@"iPhone7,2"])    return @"iPhone 6";
    if ([deviceString isEqualToString:@"iPhone8,1"])    return @"iPhone 6s";
    if ([deviceString isEqualToString:@"iPhone8,2"])    return @"iPhone 6s Plus";
    
    //iPod
    if ([deviceString isEqualToString:@"iPod1,1"])      return @"iPod Touch 1G";
    if ([deviceString isEqualToString:@"iPod2,1"])      return @"iPod Touch 2G";
    if ([deviceString isEqualToString:@"iPod3,1"])      return @"iPod Touch 3G";
    if ([deviceString isEqualToString:@"iPod4,1"])      return @"iPod Touch 4G";
    if ([deviceString isEqualToString:@"iPod5,1"])      return @"iPod Touch 5G";
    
    //iPad
    if ([deviceString isEqualToString:@"iPad1,1"])      return @"iPad";
    if ([deviceString isEqualToString:@"iPad2,1"])      return @"iPad 2 (WiFi)";
    if ([deviceString isEqualToString:@"iPad2,2"])      return @"iPad 2 (GSM)";
    if ([deviceString isEqualToString:@"iPad2,3"])      return @"iPad 2 (CDMA)";
    if ([deviceString isEqualToString:@"iPad2,4"])      return @"iPad 2 (32nm)";
    if ([deviceString isEqualToString:@"iPad2,5"])      return @"iPad mini (WiFi)";
    if ([deviceString isEqualToString:@"iPad2,6"])      return @"iPad mini (GSM)";
    if ([deviceString isEqualToString:@"iPad2,7"])      return @"iPad mini (CDMA)";
    
    if ([deviceString isEqualToString:@"iPad3,1"])      return @"iPad 3(WiFi)";
    if ([deviceString isEqualToString:@"iPad3,2"])      return @"iPad 3(CDMA)";
    if ([deviceString isEqualToString:@"iPad3,3"])      return @"iPad 3(4G)";
    if ([deviceString isEqualToString:@"iPad3,4"])      return @"iPad 4 (WiFi)";
    if ([deviceString isEqualToString:@"iPad3,5"])      return @"iPad 4 (4G)";
    if ([deviceString isEqualToString:@"iPad3,6"])      return @"iPad 4 (CDMA)";
    
    if ([deviceString isEqualToString:@"iPad4,1"])      return @"iPad Air";
    if ([deviceString isEqualToString:@"iPad4,2"])      return @"iPad Air";
    if ([deviceString isEqualToString:@"iPad4,3"])      return @"iPad Air";
    if ([deviceString isEqualToString:@"iPad5,3"])      return @"iPad Air 2";
    if ([deviceString isEqualToString:@"iPad5,4"])      return @"iPad Air 2";
    if ([deviceString isEqualToString:@"i386"])         return @"Simulator";
    if ([deviceString isEqualToString:@"x86_64"])       return @"Simulator";
    
    if ([deviceString isEqualToString:@"iPad4,4"]
        ||[deviceString isEqualToString:@"iPad4,5"]
        ||[deviceString isEqualToString:@"iPad4,6"])      return @"iPad mini 2";
    
    if ([deviceString isEqualToString:@"iPad4,7"]
        ||[deviceString isEqualToString:@"iPad4,8"]
        ||[deviceString isEqualToString:@"iPad4,9"])      return @"iPad mini 3";
    
    return deviceString;
}


##度量耗时 
记录功能模块的运行时间

1.在单线程的情况下
// 计算代码块运行时间 the way to calculate how much time a method can be execute.

方法1：
double MachTimeToSecs(uint64_t time){
    
    mach_timebase_info_data_t timebase;
    
    mach_timebase_info(&timebase);
    return (double)time * (double)timebase.numer / (double)timebase.denom /1e9;
    
}

-(void)calculateMehthodRunTime{
    
    // 计算代码块运行时间
    uint64_t beginTime = mach_absolute_time();

    /* ... Do Some Work Here ... */

    uint64_t endTime = mach_absolute_time();
    NSLog(@"Time taken to doSomething %g s",MachTimeToSecs(endTime - beginTime));
}

方法2：

NSDate *methodStart = [NSDate date];

/* ... Do Some Work Here ... */

NSDate *methodFinish = [NSDate date];
NSTimeInterval executionTime = [methodFinish timeIntervalSinceDate:methodStart];
NSLog(@"executionTime = %f", executionTime);

方法3：

#define TICK     NSDate *startTime = [NSDate date]
#define TOCK   NSLog(@"Time: %f", -[startTime timeIntervalSinceNow])

TICK;

/* ... Do Some Work Here ... */

TOCK;

2.在多线程的情况下
解决方法：创建计算时间的类
#import <Foundation/Foundation.h>


@interface StopWatch : NSObject
{
    uint64_t _start;
    uint64_t _stop;
    uint64_t _elapsed;
}

-(void) Start;
-(void) Stop;
-(void) StopWithContext:(NSString*) context;
-(double) seconds;
-(NSString*) description;
+(StopWatch*) stopWatch;
-(StopWatch*) init;
@end


#import "StopWatch.h"
#include <mach/mach_time.h>

@implementation StopWatch

-(void) Start
{
    _stop = 0;
    _elapsed = 0;
    _start = mach_absolute_time();
}
-(void) Stop
{
    _stop = mach_absolute_time();
    if(_stop > _start)
    {
        _elapsed = _stop - _start;
    }
    else
    {
        _elapsed = 0;
    }
    _start = mach_absolute_time();
}

-(void) StopWithContext:(NSString*) context
{
    _stop = mach_absolute_time();
    if(_stop > _start)
    {
        _elapsed = _stop - _start;
    }
    else
    {
        _elapsed = 0;
    }
    NSLog([NSString stringWithFormat:@"[%@] Stopped at %f",context,[self seconds]]);
    
    _start = mach_absolute_time();
}


-(double) seconds
{
    if(_elapsed > 0)
    {
        uint64_t elapsedTimeNano = 0;
        
        mach_timebase_info_data_t timeBaseInfo;
        mach_timebase_info(&timeBaseInfo);
        elapsedTimeNano = _elapsed * timeBaseInfo.numer / timeBaseInfo.denom;
        double elapsedSeconds = elapsedTimeNano * 1.0E-9;
        return elapsedSeconds;
    }
    return 0.0;
}
-(NSString*) description
{
    return [NSString stringWithFormat:@"%f secs.",[self seconds]];
}
+(StopWatch*) stopWatch
{
    StopWatch* obj = [[StopWatch alloc] init] ;
    return obj;
}
-(StopWatch*) init
{
    if (self = [super init]) {
        
    };
    return self;
}

@end








BUG日志的提交

注册Bugly用户 获取AppID

1.添加Bugly到项目中
通过Cocoapods的方式,在Podfile中加入

pod ‘Bugly'

保存并运行pod install,然后用后缀为.xcworkspace的文件打开工程

2.1导入头文件

在工程的AppDelegate.m中导入头文件

#import <Bugly/CrashReporter.h>

2.2 初始化 Bugly

在工程AppDelegate的application didFinishLaunch...方法中初始化 Bugly

2.3 手动测试一场
Bugly 会在 log 中输出关键步骤,为了完成接入检测,请在你的 App 代码中手动构建一个异常


- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
      [[CrashReporter sharedInstance] installWithAppId:@"此处替换为你的AppId"];
      [self performSelector:@selector(crash) withObject:nil afterDelay:3.0];
      return YES;
  }

3.查看Bugly后台的App运行情况









