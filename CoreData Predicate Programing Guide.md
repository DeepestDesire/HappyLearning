#NSPredicate

NSPredicate Have two Subclass 

	NSComparisonPredicate
	NSCompoundPredicate
	
#Core data Programming Guide

##Concurrency

the manager object context can be used with two concurrency patterns,defined by NSMainQueueConcurrencyType and NSPrivateQueueConcurrencyType.
MOC有两种形式 一种是主线程形式 还有一种是私有线程形式

	let moc = NSManagedObjectContext(concurrencyType:<#type#>)
	

