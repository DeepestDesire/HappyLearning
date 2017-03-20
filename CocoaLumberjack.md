如何自定义formatters
#介绍
====
#####Formatters 可以被logger 选择性的引用
一个formatter可以应用log level 去 让log message 被写入文件。为了达到此目的，你只要简单的创建，添加一个formatter到一个文件的logger.formattters给你自定义日志信息的功能在不用重写logmessage的情况下。
#####Formatters 能被用于查找log message
你可以觉得特定的log message 被排除在明确的logger中。你有一个 verbose console log，


straight-forward 简单的