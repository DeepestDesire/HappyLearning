# IOS WebView bridge ( H5 -> Native)

1. needJumpNewPage: 是否需要跳转到新页面
-------
Method |Format |Property | Type|
---- |---- |---- |---- |---- |
**parameters** | void
**returns** |JSON |isNeed |Bool |

2. jumpNewPage:  跳转到新页面
-------
Method |Format |Property |Type | 
---- |---- |---- |---- |
**parameters** |对象 |URL |String
**returns** |void

3. setAPPCFG:  设置接口相关参数
-------
Method |Format |Type |Type  
---- |---- |---- |---- |
**parameters** | void
**returns** |JSON |isNeed |Bool |
  ||version |String |
  ||itype |String |
  ||dtype |String |
  ||stype |String |
  ||device |String |
  ||token |String |
  ||timediff |String |

4. getToken: 获取用户token
------
Method |Format |Property |type 
---- |---- |---- |---- |
**parameters** | void
**returns** |String| | |

5. closePage: 关闭当前界面
------
Method |Format |Property |type 
---- |---- |---- |---- |
**parameters**|void 
**returns** |void

6. setUpTitle: 设置当前页面 Navigation title
------
Method |Format |Property |type 
---- |---- |---- |---- |
**parameters**|void 
**returns** |void

7. showShareBoard: 展示页面的右上角菜单按钮
------
Method |Format |Property |type 
---- |---- |---- |---- |
**parameters**|void 
**returns** |void

8. hideShareBoard: 隐藏页面的右上角菜单按钮
------
Method |Format |Property |type 
---- |---- |---- |---- |
**parameters**|void 
**returns** |void

9. setWXShareConfig: 隐藏页面的右上角菜单按钮
------
Method |Format |Property |type 
---- |---- |---- |---- |
**parameters**|对象 |link |String |
  ||img |String |
  ||desc |String |
  ||channel |String |
  ||title |String |
**returns** |void

10. openLoginPage: 打开登陆界面
------
Method |Format |Property |type 
---- |---- |---- |---- |
**parameters**|void 
**returns** |void



11. wxPay:  跳转微信支付
------
Method |Format |Property |type 
---- |---- |---- |---- |
**parameters**|对象 |partnerid |String |
  ||package |String |
  ||noncestr |String |
  ||timestamp |String |
  ||appid |String |
  ||prepayid |String |
**returns** |void

12. openEditPost: 打开帖子
------
Method |Format |Property |type 
---- |---- |---- |---- |
**parameters**|对象 |theme_id |String |
**returns** |void


13. alertMessageShow: h5调用native弹窗
------
Method |Format |Property |type 
---- |---- |---- |---- |
**parameters** |String
**returns** |void | | |


14. refresh_beizhi: 刷新首页
--------
Method |Format |Property |type 
---- |---- |---- |---- |
**parameters**|void 
**returns** |void


15. refresh_discover: 刷新发现页
--------
Method |Format |Property |type 
---- |---- |---- |---- |
**parameters**|void 
**returns** |void


16. refresh_my_self: 刷新我的页面
--------
Method |Format |Property |type 
---- |---- |---- |---- |
**parameters**|void 
**returns** |void

17. refresh_dentist: 刷新医生界面
--------
Method |Format |Property |type 
---- |---- |---- |---- |
**parameters**|void 
**returns** |void

18. refresh_new_page: 刷新新开页面（跳转的页面）
--------
Method |Format |Property |type 
---- |---- |---- |---- |
**parameters**|void 
**returns** |void

19. refresh_all: 刷新所有H5页面
--------
Method |Format |Property |type 
---- |---- |---- |---- |
**parameters**|void 
**returns** |void

20. openCreateNotesBook: 打开创建牙套日记页面
--------
Method |Format |Property |type 
---- |---- |---- |---- |
**parameters**|对象 |theme_id |String |
  ||notesBook_id |String |
**returns** |void

21. openBracePlan: 打开牙套计划页面
--------
Method |Format |Property |type 
---- |---- |---- |---- |
**parameters**|void 
**returns** |void

