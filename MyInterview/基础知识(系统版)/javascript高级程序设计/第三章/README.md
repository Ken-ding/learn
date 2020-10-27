# 基本概念
 - 语法
 - 关键字和保留字
 - 变量
 - 数据类型
 - 操作符
 - 语句
 - 函数
## 语法
### 区分大小写
ECMAScript中的一切(变量,函数名和操作符)都是区分大小写
```
var demo="123"
var Demo="456"
//区分大小写
console.log(demo);
console.log(Demo);
```
### 标识符
定义：变量，函数，属性的名字，或者函数的参数。
格式规则：
 - 第一个字符必须是一个字母，下划线(_)或者一个美元号($)
 - 其他字符可以是字母，下划线，美元符号或数字
 - 不推荐使用ASCII或Unicode字母字符
 - 推荐采用驼峰大小写格式
### 注释
#### 单行注释
```
//单行注释
```
```
/*
*这是一个多行
*注释
*/
```
### 严格模式
#### 背景
ECMScript引入严格模式，定义了一种不同的解析与执行模型。
#### 效果
 - 消除Javascript语法的一些不合理、不严谨之处，减少一些怪异行为;
 - 消除代码运行的一些不安全之处，保证代码运行的安全；
 - 提高编译器效率，增加运行速度；
 - 为未来新版本的Javascript做好铺垫。
####  具体场景
##### 单个函数
```
//将"use strict"放在函数体的第一行，则整个函数以"严格模式"运行。
function strict(){
　　　　"use strict";
　　　　return "这是严格模式。";
　　}

　　function notStrict() {
　　　　return "这是正常模式。";
　　}
```
##### 脚本文件的变通写法
```
//将整个脚本文件放在一个立即执行的匿名函数之中,整个函数就会采用严格模式
(function (){

　　　　"use strict";

　　　　// some code here

　　 })();
```
#### 语法和行为改变
##### 全局变量显式声明
在正常模式中，如果一个变量没有声明就赋值，默认是全局变量。严格模式禁止这种用法，全局变量必须显式声明
```
	"use strict";
　　v = 1; // 报错，v未声明

　　for(i = 0; i < 2; i++) { // 报错，i未声明
　　}
```
##### 静态绑定
Javascript语言的一个特点，就是允许"动态绑定"，即某些属性和方法到底属于哪一个对象，不是在编译时确定的，而是在运行时（runtime）确定的。
严格模式对动态绑定做了一些限制。某些情况下，只允许静态绑定。也就是说，属性和方法到底归属哪个对象，在编译阶段就确定。
(1) 禁止使用with语句
```
"use strict";
var v = 1;
with (o){ // 语法错误
　　　v = 2;
}
```
(2) 创设eval作用域

正常模式下，Javascript语言有两种变量作用域（scope）：全局作用域和函数作用域。严格模式创设了第三种作用域：eval作用域。

正常模式下，eval语句的作用域，取决于它处于全局作用域，还是处于函数作用域。严格模式下，eval语句本身就是一个作用域，不再能够生成全局变量了，它所生成的变量只能用于eval内部。

正常模式，未生成eval作用域；
```
 //"use strict";
    var x = 2;
    console.info(eval("var x = 5; x")); // 5
    console.log(x);5
```
严格模式，生成eval作用域
```
 "use strict";
    var x = 2;
    console.info(eval("var x = 5; x")); // 5
    console.log(x);2
```
 ##### 增强的安全措施
 (1) 禁止this关键字指向全局对象
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
<script>
    function f(){
        console.log(this)//window
　　　　return !this;
　　}
　　// 返回false，因为"this"指向全局对象，"!this"就是false
    console.log(f());//false

    　function f1(){
　　　　"use strict";
        console.log(this);//undefined
　　　　return !this;
　　}
　　// 返回true，因为严格模式下，this的值为undefined，所以"!this"为true
    console.log(f1());//true
</script>
```
(2) 禁止在函数内部遍历调用栈
```
function f1(){

　　　　"use strict";

　　　　f1.caller; // 报错

　　　　f1.arguments; // 报错

　　}

　　f1();
```
(3) 禁止删除变量
严格模式下无法删除变量。只有configurable设置为true的对象属性，才能被删除
```
　"use strict";

　　var x;

　　delete x; // 语法错误

　　var o = Object.create(null, {'x': {
　　　　　　value: 1,
　　　　　　configurable: true
　　}});

　　delete o.x; // 删除成功
```
(4) 显式报错
正常模式下，对一个对象的只读属性进行赋值，不会报错，只会默默地失败。严格模式下，将报错。
```
function f(){
        var o = {};
　　    Object.defineProperty(o, "v", { value: 1, writable: false });
　　    o.v = 2; //默默地失败
    }
    f()
    function f1(){
        "use strict";
        var o = {};
　　    Object.defineProperty(o, "v", { value: 1, writable: false });
　　    o.v = 2; // 显式报错
    }
    f1()
```
严格模式下，对一个使用getter方法读取的属性进行赋值，会报错。
```
"use strict";

　　var o = {

　　　　get v() { return 1; }

　　};

　　o.v = 2; // 报错
```
严格模式下，对禁止扩展的对象添加新属性，会报错。
```
"use strict";

　　var o = {};

　　Object.preventExtensions(o);

　　o.v = 1; // 报错
```
严格模式下，删除一个不可删除的属性，会报错。
```
"use strict";
　　delete Object.prototype; // 报错
```
##### 重名错误
(1) 对象不能有重名的属性

正常模式下，如果对象有多个重名属性，最后赋值的那个属性会覆盖前面的值。严格模式下，这属于语法错误。
```
"use strict";

　　var o = {
　　　　p: 1,
　　　　p: 2
　　}; // 语法错误
```
(2) 函数不能有重名的参数
正常模式下，如果函数有多个重名的参数，可以用arguments[i]读取。严格模式下，这属于语法错误。
```
"use strict";

　　function f(a, a, b) { // 语法错误

　　　　return ;

　　}
```
##### 禁止八进制表示法
正常模式下，整数的第一位如果是0，表示这是八进制数，比如0100等于十进制的64。严格模式禁止这种表示法，整数第一位为0，将报错。
```
"use strict";
var n = 0100; // 语法错误
```
##### arguments对象的限制
arguments是函数的参数对象，严格模式对它的使用做了限制。
(1) 不允许对arguments赋值
```
"use strict";

　　arguments++; // 语法错误

　　var obj = { set p(arguments) { } }; // 语法错误

　　try { } catch (arguments) { } // 语法错误

　　function arguments() { } // 语法错误

　　var f = new Function("arguments", "'use strict'; return 17;"); // 语法错误
```
(2) arguments不再追踪参数的变化
```
function f(a) {

　　　　a = 2;

　　　　return [a, arguments[0]];

　　}

　　f(1); // 正常模式为[2,2]

　　function f(a) {

　　　　"use strict";

　　　　a = 2;

　　　　return [a, arguments[0]];

　　}

　　f(1); // 严格模式为[2,1]
```
(3) 禁止使用arguments.callee
这意味着，你无法在匿名函数内部调用自身了
```
"use strict";

　　var f = function() { return arguments.callee; };

　　f(); // 报错
```
##### 函数必须声明在顶层
将来Javascript的新版本会引入"块级作用域"。为了与新版本接轨，严格模式只允许在全局作用域或函数作用域的顶层声明函数。也就是说，不允许在非函数的代码块内声明函数。
```
"use strict";

　　if (true) {

　　　　function f() { } // 语法错误

　　}
　　for (var i = 0; i < 5; i++) {

　　　　function f2() { } // 语法错误

　　}
```
##### 保留字
为了向将来Javascript的新版本过渡，严格模式新增了一些保留字：implements, interface, let, package, private, protected, public, static, yield。
使用这些词作为变量名将会报错。
```
function package(protected) { // 语法错误

　　　　"use strict";

　　　　var implements; // 语法错误

　　}
```
##### 总结一下
增加严格模式的变化内容
 - 全局变量显式声明
 - 静态绑定
 - 增强的安全措施
 - 禁止删除变量
 - 显式报错
 - 重名错误
 - 禁止八进制表示法
 - arguments对象的限制
 -  函数必须声明在顶层
 - 保留字
### 语句
#### 分号(;)
```
var sum=a+b//即使没有分号也是有效的语句---不推荐
var diff=a-b;//有效的语句---推荐
```
#### 花括号({})
```
if(test)alert(test);//有效但容易出错,不要使用
if(test){
alert(test)//推荐使用
}
```
#### 关键字和保留字
关键字：具有特定用处的字，用于控制语句；
```
//ECMA-262
break  do instanceof typeof case else new var catch finally return
void continue for switch while debugger function this with default
if throw delete in try
```
保留字：没有特定用处，但将来可能用到
```
abstract enum int short boolean export interface
static byte extends long super char final native
synchronized class float package throws const
goto private transient debugger implements
protected volatile double import public
```
## 变量
定义：ECMAScript的变量是松散类型的，可以用来保存任何类型的数据。
 - 正常模式下，省略var，定义的变量就成为全局变量了
```
msg=“全局变量”；
```
 - 一条语句可以定义多个变量
```
var msg=“hi”,found=false,age=29;
```
 - 严格模式下,不能定义eval和arguments的变量,否则会导致语法错误
## 数据类型
 - undefined
 - boolean
 - string
 - number
 - object
 - function
 - null(特殊的object)

### typeof操作符
```
var a="123";
    console.log(typeof a);//"string"

    var b=1;
    console.log(typeof b);//"number"

    var c=false;
    console.log(typeof c);//"boolean"

    var d;
    console.log(typeof d);//"undefined"

    var e=function(){}
    console.log(typeof e);//"function"

    var f={};
    console.log(typeof f);//"object"

	var g=null;
    console.log(typeof g);//"object"
```
### undefined类型
 - 第一个只有一个值，这个特殊值是undefined
 - 变量声明但未初始化
 - 包含undefined的变量与尚未定义的变量还是不一样的
```
var msg；
//var age;
console.log(msg);//undefined
console.log(age);//产生错误
```
- 对未初始化的变量执行typeof操作符返回undefined，对未声明的变量执行typeof也返回undefined
```
var msg；
//var age；
console.log(typeof msg);//undefined
console.log(typeof age);//undefined
```
### Null类型
- 第二个只有一个值的数据类型，这个特殊值是null
- 空对象指针
```
var g=null;
console.log(typeof g);//"object"
```
### Boolean类型
- 该类型只有两个字面值：true和false
- True和False都不是Boolean值,只是标识符
- 各种数据类型对Boolean类型转换

| 数据类型 | 转换为true的值 |转换为false的值 |
|--|--|--|
| Boolean | true |false |
| String | 任何非空字符串 |“”(空字符串) |
| Number | 任何非零数字值(包括无穷大) |0和NaN |
| Object | 任何对象 |null|
| undefined | —— |undefined|

###  Number类型
ECMAScript使用[IEEE754](https://baike.baidu.com/item/IEEE%20754/3869922?fr=aladdin)格式来表示整数和浮点数值。
#### 浮点数值
定义：数值中必须包含一个小数点，并且小数点后面必须至少有一个数字。虽然小数点前面可以没有整数，但不推荐这中写法。
```
var num1=1.1；
var num2=0.1；
var num3=.1;//有效,但不推荐
```
>ps：保存浮点值需要的空间是保存整数值的两倍

```
var num1=1.；//小数点后面没有数字---解析成1
var num2=10.0；//整数---解析成10
```
>科学技术法
```
var num=3.125e7; //31250000
var num1=3e-7;//0.0000003
```
> 精度问题：使用基于IEEE754数值的浮点计算的通病
```
 console.log(0.3===0.3);true
  console.log(0.1+0.2===0.3);false
```
#### 数值范围
##### 背景
出于内存的限制，不能保存世界上所有的数据，ECMAScript能够表示最小值和最大值
 - 最大值，Number.MIN_VALUE.
 - 最小值，Number.MAX_VALUE
 - isFinite，判断是否在最大值与最小值之间的数

```
 console.log(Number.MIN_VALUE);//5e-324
 console.log(Number.MAX_VALUE);//1.7976931348623157e+308
 let num=1.7976931348623157e+309
 console.log(isFinite(num));
```
#### NaN
定义:非数值,是一个特殊的数值.
> isNaN

判断函数是否是数值
```
console.log(isNaN(NaN));//true
console.log(isNaN(10));//false(10是一个数值)
console.log(isNaN(“10”));//false(10是一个数值)
console.log(isNaN(“blue”));//true(不可能转换成数值)
console.log(isNaN(true));//false(可以转换成1)
```
#### 数值转换
##### Number()
- 如果是Boolean值，true和false将分别转换成1和0
- 如果是数字值，只是简单的传入和返回
- 如果是null值，返回0.
- 如果是undefined，返回NaN。
- 如果是字符串，遵循下列规则：
	- 如果字符串中包含数字，则将其转换为十进制数值
	- 如果字符串中包含有效的浮点格式,则将其转换为对应的浮点数值
	- 如果字符串中包含有效的十六进制格式，则将其转换成十进制镇整数值
	- 如果字符串是空的(不包含任何字符)，则将其转换为0
	- 如果字符串中包含除上述格式之外的字符，则将其转换为NaN
- 如果是对象,则调用对象的valueOf()方法,然后按照前面的规则转换返回的值.
- 如果是NaN，调用对象的toString()方法,然后依次按照前面的规则转换返回后的字符串

示例：
```
    console.log(Number(true));//1
    console.log(Number(false));//0
    console.log(Number(123));//123
    console.log(Number(null));//0
    console.log(Number(undefined));//NaN
    console.log(Number("0123"));//前导零被忽略了
    console.log(Number("01.23"));//1.23
    console.log(Number("0xf"));//15
    console.log(Number(""));//0
    console.log(Number("1x2"));
    console.log(Number({a:123}));
    console.log(Number(NaN));
```
##### parseInt()
- 如果第一个字符不是数字字符或符号，返回NaN
```
   console.log(parseInt("a21"));//NaN
```
- 如果第一个是数字字符，直到解析到第二个不是数字字符的数，则返回数值，例：1234bule，返回1234，“blue”被忽略。
```
console.log(parseInt("1234bule"));//1234
```
- 小数点采用同样规则，例：“22.5”，返回“22”
```
console.log(parseInt("22.5"));//22
```
- 能够识别十进制，八进制和十六进制，例:"0xA",会被转换成10
```
console.log(parseInt("0xA"));//22
```

- 第二个参数，决定转换成的进制，10:十进制,8:八进制和16:十六进制
```
parseInt("0xAF",16)//175
```
- 不指定基数意味着让parseInt决定如何解析，容易出现意想不到错误，建议设置默认进制，一般是10
##### parseFloat()
- 与parseInt类似
- 字符中第一个小数点是有效的，而第二个小数点是无效的，他后面的字符串会被忽略
```
parseFloat(22.34.5);//22.34
```
- 没有第二个参数指定的基数用法，只能转换成10进制
```
   console.log(parseFloat("0xf"));//0
```

- 整数会被解析成整数
```
 console.log(parseFloat("22"));//22
```
### String类型
> 定义:由零或多个16位Unicode字符组成的字符序列

#### 字符字量
| 字面量 | 含义 |
|--|--|
| \n | 换行 |
| \t | 制表 |
| \b | 制表 |
| \r | 回车|
| \f| 进纸|
| \\| 斜杠|
| \‘| 单引号|
| \“| 双引号|
| \xnn| 以十六进制nn表示一个字符。例如，\x41表示"A"|
| \unn| 以十六进制nnnn表示一个Unicode字符。例如，\u03a3表示希腊字符∑

了解即可
#### 字符串的特点
- 不可变，字符串一点创建，它的值就不能改变了。
#### 转换成字符串
##### toString()
- 数值，布尔值，对象和字符串值都有toString()方法.
- null和undefined没有这个方法
- 可以传递数值的基数作为参数
```
console.log(typeof Number(123).toString());//string
console.log(typeof Boolean(true).toString());//string
 console.log(typeof {}.toString());//string
  console.log(typeof "123".toString());//string
  console.log(null.toString());//报错
 console.log(undefined.toString());//报错


console.log(Number(123).toString());//123
console.log(Number(123).toString(2));//1111011
console.log(Number(123).toString(8));//173
console.log(Number(123).toString(10));//123
console.log(Number(123).toString(16));//7b
```
##### String()
- 如果有toString(),则调用该方法并返回响应结果
- 如果为null，而返回“null”
- 如果为undefined，则返回“undefined”

示例：
```
	console.log(String(10));//"10"
    console.log(String(true));//"true"
    console.log(String(null));//"null"
    console.log(String(undefined));//"undefined"
```
### Object
第五章和第六章详细介绍，知识点较多，耐心等待一下
## 操作符
### 一元操作符
> 定义:只能操作一个值的操作
#### 递增和递减操作符
- 前置和后置递增递减
```
var age=29;
++age或age++
//等价于
var age=29;
age=age+1;
```
```
var age=29;
--age或age--
//等价于
var age=29;
age=age-1;
```
- 前置和后置的区别
前置递增递减操作符先计算，然后在参与其他运算
示例:
```
	let num1=12;
    let b=1+--num1
    console.log(num1);//11
    console.log(b);//12
```
后置递增递减操作符的变量现参与计算，在递增或递减
```
	let num=12;
    let a=1+num--
    console.log(num);//11
    console.log(a);//13
```
- 适用不同值的规则
	- 在应用于一个包含有效数字字符的字符串时，先将其转换为数字值，在执行加减1的操作，字符串变量变成数值变量
```
 	var n1="2";
    n1++;
    console.log(typeof n1)
    console.log(n1)
```
- 字符串数值转化不了数字时，返回NaN
```
	var n2="2a";
    n2++;
    console.log(n2);//NaN
```
- 布尔值false,先将其转换为0在执行加减1的操作
```
	 var n3=false;
    n3++;
    console.log(n3);//1
```
- 布尔值true,先将其转换为1在执行加减1的操作
```
	var n4=true;
    n4++;
    console.log(n4);//2
```
- 浮点数值时，执行加减1的操作
```
	var n5=0.2;
    n5++;
    console.log(n5);//1.2
```
- 应用于对象，先调用对象的valueOf()方法.以取得一个可供操作的值.然后对该值应用前述的规则,如果结果是NaN,则调用toString()方法在应用前述的规则.对象变量变成数值变量
```
var o={
	valueOf:function(){
		return -1;
	}
}
o--;
console.log(o);//2
```
##### 一元加和减操作符
- 与数学书上面讲的完全一样
- 该操作符和Number转型函数一样对数值执行转换
- 布尔值false和true将被转换成0和1
- 字符串按照特殊的规则进行解析
- 对象先调用他们的valueOf()和toString()方法在转换成值
示例：
```
var s1="01";
    console.log(+s1)//数值1

    var s2="1.1";
    console.log(+s2)//数值1.1

    var s3="z";
    console.log(+s3)//NaN

    var s4=false;
    console.log(+s4)//数值0

    var s5=1.1;
    console.log(+s5)//值未变

    var s6={
        valueOf:function(){
            return -1;
        }
    }
    console.log(+s6)//变成数值-1


    var s1="01";
    console.log(-s1)//数值-1

    var s2="1.1";
    console.log(-s2)//数值-1.1

    var s3="z";
    console.log(-s3)//NaN

    var s4=false;
    console.log(-s4)//数值0

    var s5=1.1;
    console.log(-s5)//变成-1.1

    var s6={
        valueOf:function(){
            return -1;
        }
    }
    console.log(-s6) //数值1
```
### 位操作符
##### 按位非(NOT)
位运算 NOT 由否定号（~）表示，它是 ECMAScript 中为数不多的与二进制算术有关的运算符之一。
```
	var num1 = 25;    //二进制00000000000000000000000000011001
    var num2 = ~num1; //二进制11111111111111111111111111100110
    console.log(num2);//-26
```
>计算流程
- 第一步，会将25转换成二进制，也就是原码 = 00011001
- 第二步，对原码按位取反，也就是反码 = 11100110
- 第三步，反码首位即为符号位，0位正数，1为负数，将除符号位之外的反码进行二次取反 = 10011001
- 第四步，对反码加1，也就是补码 = 10011010
- 最终步，转换为十进制，首位符号位转换成负号，其余会由最后开始乘上2的0次幂，2的1次幂，依次类推 = -26
##### 按位与(AND)
位运算 AND 由和号（&）表示，直接对数字的二进制形式进行运算。它把每个数字中的数位对齐，然后用下面的规则对同一位置上的两个数位进行 AND 运算：
| 第一个数值的位 | 第二个数值的位 |结果|
|--|--|--|
|  1| 1 |1|
|  1| 0 |0|
|  0| 1 |0|
|  0| 0 |0|

```
var iResult = 25 & 3;
console.log(iResult);	//输出 "1"

25 = 0000 0000 0000 0000 0000 0000 0001 1001
  3 = 0000 0000 0000 0000 0000 0000 0000 0011
---------------------------------------------
AND = 0000 0000 0000 0000 0000 0000 0000 0001
```
##### 按位或(OR)
位运算 OR 由符号（|）表示，也是直接对数字的二进制形式进行运算。在计算每位时，OR 运算符采用下列规则：
| 第一个数值的位 | 第二个数值的位 |结果|
|--|--|--|
|  1| 1 |1|
|  1| 0 |1|
|  0| 1 |1|
|  0| 0 |0|
```
var iResult = 25 | 3;
console.log(iResult);	//输出 "27"

25 = 0000 0000 0000 0000 0000 0000 0001 1001
 3 = 0000 0000 0000 0000 0000 0000 0000 0011
--------------------------------------------
OR = 0000 0000 0000 0000 0000 0000 0001 1011
```
##### 按位或(XOR)
位运算 XOR 由符号（^）表示，当然，也是直接对二进制形式进行运算。XOR 不同于 OR，当只有一个数位存放的是 1 时，它才返回 1。真值表如下：
| 第一个数值的位 | 第二个数值的位 |结果|
|--|--|--|
|  1| 1 |0|
|  1| 0 |1|
|  0| 1 |1|
|  0| 0 |0|
```
var iResult = 25 ^ 3;
console.log(iResult);	//输出 "26"

25 = 0000 0000 0000 0000 0000 0000 0001 1001
  3 = 0000 0000 0000 0000 0000 0000 0000 0011
---------------------------------------------
XOR = 0000 0000 0000 0000 0000 0000 0001 1010
```
##### 左移
左移运算由两个小于号表示（<<）。它把数字中的所有数位向左移动指定的数量。例如，把数字 2（等于二进制中的 10）左移 5 位，结果为 64（等于二进制中的 1000000）：
```
var iOld = 2;		//等于二进制 10
var iNew = iOld << 5;	//等于二进制 1000000 十进制 64
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20201021004619276.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2tlbl9kaW5n,size_16,color_FFFFFF,t_70#pic_center)
##### 有符号的右移
有符号右移运算符由两个大于号表示（>>）。它把 32 位数字中的所有数位整体右移，同时保留该数的符号（正号或负号）。有符号右移运算符恰好与左移运算相反。例如，把 64 右移 5 位，将变为 2：
```
var iOld = 64;		//等于二进制 1000000
var iNew = iOld >> 5;	//等于二进制 10 十进制 2
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20201021004716721.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2tlbl9kaW5n,size_16,color_FFFFFF,t_70#pic_center)
##### 无符号的右移
无符号右移运算符由三个大于号（>>>）表示，它将无符号 32 位数的所有数位整体右移。对于正数，无符号右移运算的结果与有符号右移运算一样。
用有符号右移运算中的例子，把 64 右移 5 位，将变为 2：
```
var iOld = 64;		//等于二进制 1000000
var iNew = iOld >>> 5;	//等于二进制 10 十进制 2
```
### 布尔操作符
#### 逻辑非(!)
- 操作对象,返回false
```
console.log(!{a:123}); //false
```
- 操作空字符串，返回true
```
 console.log(!""); //true
```
- 操作非空字符串，返回false
```
 console.log(!"123"); //false
```
- 操作数值0，返回true
```
 console.log(!0); //true
```
- 操作非0数值(包括Infinity)，返回false
```
 	console.log(!123); //fasle
    console.log(!Infinity); //fasle
```
- 操作null，返回true
```
 console.log(!null); //true
```
- 操作NaN,返回true
```
 console.log(!NaN); //true
```
- 操作undefined，返回true
```
 console.log(!undefined); //true
```
- 逻辑非操作符，实际上会模拟Boolean()行为
#### 逻辑与(&&)
##### 逻辑与的真值表
| 第一个操作数 | 第二个操作数 |结果|
|--|--|--|
| true | true |true|
| true | false |false|
| false | true |false|
| false | false |false|
- 操作数是对象，返回第二个操作数
```
 console.log({}&&123); //123
```
- 第二个操作数是对象，只有第一个操作数的求值结果是true的情况下才返回该对象
```
 console.log(false&&{}); //false
 console.log(true&&{}); //{}
```
- 操作数都是对象，则返回第二个操作数
```
 console.log({a:123}&&{b:456}); //{b:456}
```
- 操作数是null,则返回null
```
console.log(null&&{b:456}); //null
```
- 操作数是NaN，则返回NaN
```
console.log(NaN&&{b:456}); //NaN
```
- 操作数是undefined，则返回undefined
```
console.log(undefined&&{b:456}); //undefined
```
ps：逻辑与属于短路操作，即如果第一个操作数是false，那么不会对第二个操作值求值了
#### 逻辑或
##### 逻辑或真值表
| 第一个操作数 | 第二个操作数 |结果|
|--|--|--|
| true | true |true|
| true | false |true|
| false | true |true|
| false | false |false|
- 操作数是对象，返回false
```
console.log({}||{b:456}); //{}
```
- 第一个操作数求值结果是false，而返回第二个操作数
```
console.log(false||{b:456}); //{b:456}
```
- 两个操作数都是对象,则返回第一个操作数
```
console.log({a:123}||{b:456}); //{a:123}
```
- 两个操作数都是null,则返回null
```
console.log(null||null); //null
```
- 两个操作数都是NaN,则返回NaN
```
console.log(NaN||NaN); //NaN
```
- 两个操作数都是undefined,则返回undefined
```
console.log(undefined||undefined); //undefined
```
ps:逻辑或操作符也是短路操作符。即如果第一个操作数的求值结果为true，就不会对第二个操作数求值了
#### 乘性操作符
##### 乘法(*)
>定义:计算两个数值的乘积.语法类似于C
- 操作数都是数值，执行常规的乘法计算
```
console.log(1*2); //2
```
- 如果有一个操作数是NaN，则结果是NaN;
```
console.log(NaN*12); //NaN
```
- 如果是Infinity与0相乘，则结果是NaN
- 如果是Infinity与非0数值相乘，则结果是Infinity或-Infinity
- 如果是Infinity与Infinity相乘，则结果是Infinity
- 如果操作数不是数值，则后台调用Number()将其转换成数值,然后应用上面的规则
##### 除法(/)
- 都是数值,执行常规除法计算
- 有一个操作符是NaN，结果是NaN
- 如果两个都是Infinity，结果是NaN
- 如果零被零除，结果为NaN
- 非零的被零除，结果为Infinity
- Infinity被任何非零数值除，结果为Infinity或-Infinity
- 如果操作数不是数值，则后台调用Number()将其转换成数值,然后应用上面的规则
##### 求模(余数)
- 如果两个都是数值，执行常规的除法计算，返回除得余数
```
 console.log(26%5); //1
```
- 如果被除数是无穷大值而除数是有限大的数值，返回结果NaN
```
console.log(Number.POSITIVE_INFINITY%2); //NaN
```

- 如果被除数是有限大的数值而除数是零,则结果是NaN
```
 console.log(12%0);
```
- 如果是Infinity被Infinity除，则结果是NaN
```
 console.log(Number.POSITIVE_INFINITY%Number.POSITIVE_INFINITY); //NaN
```
- 如果被除数是有限大的数值而除数是无穷大的数值，则结果是被除数
```
 console.log(2%Number.POSITIVE_INFINITY); //2
```
- 如果被除数是零,则结果是零
```
 console.log(0%1000); //0
```
#### 加性操作符
##### 加法(+)
- 如果两个操作符都是数值，则执行常规算术
- 如果有一个操作数是NaN,则结果是NaN
```
console.log(NaN+123); //NaN
```
- 如果是Infinity加Infinity，则结果是Infinity
```
console.log(Infinity+Infinity); //Infinity
```
- 如果是-Infinity加-Infinity，则结果是-Infinity
```
console.log(-Infinity+-Infinity); //-Infinity
```
- 如果是Infinity加-Infinity，则结果是NaN
```
console.log(-Infinity+Infinity); //NaN
```
- 如果是+0加+0，则结果是+0
- 如果是-0加-0，则结果是-0
- 如果两个操作数都是字符串，则将第二个操作数与第一个操作数拼接起来
- 如果只有一个操作数是字符串，则将另一个操作数转换成字符串，然后再将两个字符串拼接起来
- 如果一个操作数是对象，数值或布尔值，则调用它们的toString()方法取得相应的字符串值,然后在应用前面关于字符串规则
```
 console.log(0+{});  //"0[object Object]"
 console.log(5+"5"); //"55"
  console.log("1"+false); //1false
```
##### 减法(-)
- 如果两个操作符都是数值，则执行常规算术
- 如果有一个操作数是NaN,则结果是NaN
```
console.log(NaN-123); //NaN
```
- 如果是Infinity减Infinity，则结果是Infinity
```
console.log(Infinity-Infinity); //NaN
```
- 如果是-Infinity减-Infinity，则结果是-Infinity
```
console.log(-Infinity-(-Infinity)); //NaN
```
- 如果是Infinity减-Infinity，则结果是NaN
```
console.log(Infinity-(-Infinity)); //Infinity
```
- 如果是+0减+0，则结果是+0
- 如果是-0减+0，则结果是-0
- 如果是-0减-0，则结果是+0
- 如果两个操作数都是字符串，则将第二个操作数与第一个操作数拼接起来
- 如果只有一个操作数是字符串，则将另一个操作数转换成字符串，然后再将两个字符串拼接起来
- 如果一个操作数是对象，数值或布尔值，则调用它们的toString()方法取得相应的字符串值,然后在应用前面关于字符串规则
```
 console.log(0+{});  //"0[object Object]"
 console.log(5+"5"); //"55"
  console.log("1"+false); //1false
```
#### 关系操作符
- 小于<
- 大于>
- 小于等于<=
- 大于等于>=
>规则
- 都是数值，执行数值比较
- 都是字符串，比较两个字符首字母的对应的字符编码值
```
 console.log("Ba"<"a");//true,B的字符编码为66,a的字符编码为97
  console.log("23"<"3");//true,2的字符编码值为50,3的字符编码值为51
```
- 一个为数值，则将另一个操作数转换为数值，然后比较
```
 console.log("23"<3) ; //false
```
- 如果为对象,小调用对象的valueOf方法,得到的结果按照前面的规则执行比较.如果没有valueOf，则调用tostring方法
- 一个为布尔值，先把布尔值转换成数值，然后在比较
- 如果一个值不小于另一个值，则一定大于或等于那个值，但是与NaN比较都返回了false
#### 相等操作符
##### 相等和不相等
- 如果有一个操作数是布尔值，则在比较相等性之前先将其转换为数值
```
console.log(false==0);  //true
```
- 如果一个操作符是字符串,另一个操作数是数值,在比较相等性之前先将字符串转换成数字
```
console.log("12"==12); //true
```
- 如果一个操作数是对象,另一个不是,则先调用对象的valueOf,得到的基本类型值,按照前面的规则进行比较
- null与undefined是相等的
- NaN不等于NaN
- 如果操作数都指向同一个对象，则返回true，否则false
```
	var a1={};
    var b1=a1;
    console.log(a1==b1); //true
```
##### 全等和不全等
除了在比较之前不转换操作数之外，与相等和不相等没有区别

**示例：**
```
 	console.log("55"===55); //false
    console.log(null===undefined); //false
    console.log(true===1); //false
```

#### 条件操作符
> var variable=boolean_expression?true_value:false_value

上面表达式的含义：
基于boolean_expression求值结果，决定给变量variable赋值，为true，赋值rue_value，为false，赋值:false_value。
#### 赋值操作符(=)
> 定义：把右侧的值赋给左侧的变量
```
var num=10;
```
##### 复合操作符
- 乘/赋值(*=)
```
 var num2=10;
  num2 *= num2
  console.log(num2);
等价于
num2=num2*10 
```
- 除/赋值(/=)
- 模/赋值(%=)
- 加/赋值(+=)
- 减/赋值(-=)
- 左移/赋值(<<=)
- 有符号右移/赋值(>>=)
- 无符号右移/赋值(>>>=)
#### 逗号操作符
- 可以用于声明多个变量
```
var num1=1,num2=2,num3=3;
```
- 用于赋值，总是返回表达式的最后一项
```
var num=(5,1,4,8,0); //num的值为0
```
### 语句
#### if语句
```
if(condition) statement1 else statement2
```
- codition(条件)可以是任意表达式，会自动调用Boolean()函数转换成布尔值,为true,执行statement1，为fasle则执行statement2
- 语句既可以是一行代码，也可以是代码块
```
if(condition) statement1 else statement2 //单行

//代码块
if(condition) {
statement1
 }else{
  statement2
  }
```

#### do-while语句
```
var i=0;
do{
	i+=2;
}while(i<10);
```
- 这种后测试循环语句最常用于循环体中的代码至少要被执行一次
#### while
```
while(expression) statement
```
```
var i=10;
    var a=0;
    while(i--){
        a++
        console.log(a)
    }
```
- 前测试循环语句
#### for语句
```
for(initialization;expression;post-loop-expression)statement;
```
```
var count=10;
    for(var i=0;i<count;i++){
        // console.log(i)
    }
    console.log(i)
```
- 循环初始化表达式中声明变量的效果一样，由于ECMASctipt中不存在块级作用域，因此在循环内部定义的变量也可以在外部访问
#### for-in语句
```
for(var propName in window)statement；
```
```
for(var propName in window){
console.log(propName)
}
```
- 遍历对象属性是没有顺序的
#### label语句，break语句和continue语句
```
var num = 0;
    outermost:
    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 10; j++) {
            if (i == 5 && j == 5) {
                break outermost;
            }else{
                console.log(i,j,88);
            }
            num++;
        }
    }
    console.log(num); //55
```
上面代码思路,当执行到i=5和j=5时,本次外部循环任务结束,所以次数是55次
```
var num = 0;
    outermost:
    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 10; j++) {
            if (i == 5 && j == 5) {
                continue outermost;
            }else{
                console.log(i,j,88);
            }
            num++;
        }
    }
    console.log(num); //95
```
上面代码思路,当执行到i=5和j=5时,本次外部循环任务结束并继续执行下次外部循环，所以次数是95次
#### with语句
```
with(expression)statement
```
```
	var obj={a:1,b:2,c:3};
    var d=4;
    with(obj){
        console.log(a)
        console.log(d)
    }
```
>为什么with语句会带来性能问题？

javascrip引擎会在编译阶段进行数项的性能优化,这些优化依赖于能根据代码的词法进行静态分析,并预先确定所在变量和函数的定义位置,才能在执行过程中快速找到标识符.
但是with无法知道传递给with用来创建新词法作用域的对象的内容到底是什么。所以就不做任何性能优化，如果没有这些优化，代码会运行的慢就是事实了
#### switch语句
```
switch(){
	case value:statement
		break
	case value:statement
		break
	case value:statement
		break
	default:statement
}
```
背景：switch是为了避免开发人员编写下面的这样的代码
```
if(i==25){
	console.log("25")
}else if(i==35){
	console.log("35")
}else if(i==45){
	console.log("45")
}else{
	console.log("other")
}
```
等价于：
```
switch(i){
	case 25:
		console.log("25")
		break;
	case 35:
		console.log("35")
		break;
	case 45:
		console.log("45")
		break;
	default:
		console.log("other")
}
```
合并情形
```
var i=25;
switch(i){
	case 25:
	case 35:
		console.log("25or 35")
		break;
	case 45:
		console.log("45")
		break;
	default:
		console.log("other")
}
```
- case的值不一定是常量，可以是变量，甚至是表达式

```
var num=25;
switch(true){
	case num<0:
        console.log("less than 0");
        break
	case num>=0&&num<=10:
		console.log("Between 0 and 10")
		break;
	case num>10&&num<=20:
        console.log("Between 10 and 20")
		break;
	default:
        console.log("More than 20")
}
```

- switch语句在比较值时采用的是全等操作符
### 函数
```
function functionName(arg0,arg1,...argN){
	statement
}
```
```
var num1=1;
var num2=2;
function fun(num1,num2){
	return num1+num2
}
console.log(fun(num1,num2)); //3
```
#### 理解参数
- arguments对象是函数的参数容器，通过arguments的length可以获取知道多少参数传给函数
```
var num1=1;
var num2=2;
function fun(num1,num2){
	console.log(arguments.length);//2个参数
	return num1+num2
}
console.log(fun(num1,num2)); //3
```
- 没有传值的 参数将自动被赋值undefined
```
var num1=1;
var num2=2;
function fun(num1,num2){
    console.log(num2);//undefined
	return num1+num2
}
console.log(fun(num1)); //NaN
```
- 函数的参数是值，不是通过引用传递参数

“值”的含义：
这里的值，指的是，复制传进来的对象的地址，把这个复制值赋给参数

引用传递的含义：
直接将变量本身的地址传进去，直接把传进来的对象的地址传给参数

参数传递的过程：
- 把传进来的对象的地址复制一份
- 把这个复制出来的值传给参数
- 参数和传进来的对象访问的是一个地址，对参数进行操作会表现在对象上

结合代码进行理解:
```
function setName(obj) {
    obj.name = 'XX'; // 对obj进行操作会表现在person上
    obj = new Object(); // 这里obj的引用改变了，如果传递的是引用，那么person的地址也会改变，也就是说，接下来对obj的操作，也会表现在person上
    obj.name = 'YY';
}
let person = new Object();
setName(person);
```
#### 没有重载
js函数定义了两个同名函数，后一个会覆盖其哪一个函数

```
function func(){
    console.log(123);
}

function func(){
    console.log(456);
}
func()
```
打印出来第二个函数456