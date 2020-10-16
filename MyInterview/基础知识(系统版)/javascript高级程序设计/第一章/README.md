# 第一章 javascripe简介
## 背景
为了完成简单的表单验证，避免频繁的与服务器交换数据。
## 创作历程
 - 1995年2月，Netspece公司的布兰登·艾奇，开发LiveScript,后改名JavaScript1.0
 - 随后发布JavaScript1.1
 - 1997年，以JavaScript1.1为蓝本组件TC39,发布ECMA-262
 - 1998年，ISO/IEC采用ECMScript作为标准（即ISO/IEC-16262）
## 整体内容
 - 核心(ECMAScript)
 - 文档对象模型(DOM)
 - 浏览器对象模型(BOM)
## ECMScript
### ECMA-262组成
 - 语法
 - 类型
 - 语句
 - 关键字
 - 保留字
 - 操作符
 - 对象
### ECMA-262版本
 - 第一版：本质上与Netscape的javascript1.1相同
 - 第二版：为了保持与ISO/IEC-16262严格保持一致,内容未更新
 - 第三版：真正的第一次修改，内容包括：字符串处理，错误定义和数值输出，增加正		   	则表达式，新控制语句，try-catch异常处理，标准国际化修改。
 - 第四版：在第三版的基础上完全定义了一门语言，被放弃。
 - 第五版：javascript3.1成为事实意义上的第五版，增加JSON对象，继承的方法和高级属性定义，严格模式，对引擎解释和执行代码加以补充，说明
### ECMA-262兼容
 - 支持ECMA-262描述的所有类型，值，对象，属性，函数以及程序句法和语义(ECMA-262第一页)
 - 支持Unicode字符标准
 - 添加ECMA-262没有描述的更多类型，值，对象，属性和函数。
 - 添加ECMA-262没有定义的程序和正则表达式语法
### 浏览器对ECMA-262的支持
#### Netscape和IE
| 浏览器 |ECMAScript兼容性 |
|--|--|
|Netscape Navigator 2  |——  |
|Netscape Navigator 3  |——  |
|Netscape Navigator 4~4.05  |——  |
|Netscape Navigator 4.06~4.79  |第1版  |
|Netscape 6+|第3版  |
|IE3|—— |
|IE4|—— |
|IE5|第1版 |
|IE5.5~IE7|第3版 |
|IE8|第5版 (不完全兼容)|
|IE9|第5版 |
#### 主流浏览器
| 浏览器 |ECMAScript兼容性 |
|--|--|
|Opera6~7.1  |第2版 |
|Opera7.2+   |第3版  |
|Safari 1~2.0.x|第3版* (不完全支持) |
|Safari 3.x|第3版  |
|Safari 4.x~5.x|第5版*(不完全支持)  |
|Chrome1+ |第3版  |
|Firefox1~2|第3版  |
|Firefo3.0.x|第3版 |
|Firefo3.5~3.6|第5版*(不完全支持) |
|Firefo34.0+|第5版 |
## DOM
### 背景
 - Internet Explore 4和Netscape Navigator 4分别支持不同形式的DHTML，影响到web跨平台的天性
 - W3C开始DOM规划
### DOM级别
 - DOM1级
 	- DOM
 	- DOM HTML
 - DOM2级
 	-  DOM1级
 	- DOM视图
 	- DOM事件
 	- DOM样式
 	- DOM遍历和范围
 - DOM3级
 	- DOM2级
 	- DOM加载和保存——统一加载和保存文档的方法
 	- DOM验证——验证文档的方发
 	- 支出XML1.0规范
 - 其他DOM标准
 	- SVG(可伸缩矢量图)1.0
 	- MathML(数学标记语言)1.0
	- SMIL(同步多媒体集成语言)
	- XUL(用户界面语言)
### 浏览器对DOM的支持
| 浏览器 | DOM兼容性 |
|--|--|
| Netscape Navigator 1.~4.x | —— |
| Netscape 6+（Mozilla 0.6.0+）| 1级，2级(几乎全部)，3级*(部分)|
| IE2~IE4.x| —— |
| IE5| 1级(最小限度) |
| IE5.5~IE8| 1级(几乎全部) |
| IE9+| 1级，2级，3级 |
| Opera1~6| —— |
| Opera7~8.x| 1级(几乎全部),2级(部分) |
| Opera9~9.x| 1级,2级(几乎全部),3级(部分) |
| Opera10+| 1级,2级,3级(部分) |
| Safari 1.0.x| 1级 |
| Safari 2+| 1级 ，2级(部分)|
| Chrome1+| 1级 ，2级(部分)|
| Firefox1+| 1级 ，2级(几乎全部)，3级(部分)|
## BOM
##  背景
 - Internet Explore 3和Netscape Navigator 3支持可以访问和操作浏览器窗口的浏览器对象模型，但不是标准
 - 之后，HTML5把很多BOM功能写入正式过饭
## 内容
 - 弹出新浏览器窗口的功能
 - 移动，缩放和关闭浏览器窗口的功能
 - 提供浏览器详细信息的navigator对象
 - 提供浏览器所加载页面的的详细信息的location对象
 - 提供用户显示器分辨率详细信息的screen对象
 - 对cookies的支持
 - 像XMLHttpRequest对象和IE的ActiveXObject这样的自定义对象
## 总结
javascript组成部分：
 - ECMAScript,由ECMA-262定义，提供核心语言功能
 - 文档对象模型（DOM）,提供访问和操作网页内容的方法和接口
 - 浏览器对象模型（BOM），提供与浏览器交互的方法和接口
主流浏览器支持情况（IE,Firefo,Chrome,Safari和Opera）

| 类型 | 主流浏览器 |
|--|--|
| ECMAScript | 第3版,第5版(较高) |
| DOM | 都支持|
| BOM | 都支持|


