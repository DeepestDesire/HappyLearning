# Core Data Learning 
## 基础知识相关普及

  - 当你创建任何一张表时,Core Data 都会默认给你创建三个属性 
      + Z_PK 表的主键,从1开始递增,具有唯一性.线程安全.
      + Z_ENT 在xcodemodel表中的id值,如果有多个表,则Z_ENT的范围在[1,n].
      + Z_OPT 表示每条数据被操作的次数.初始值为1,增删改查都增加1.
