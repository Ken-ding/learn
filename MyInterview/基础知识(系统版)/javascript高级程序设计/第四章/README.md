# 变量，作用域和内存问题
- 理解基本类型和引用类型的值
- 理解执行环境
- 理解垃圾收集
## 基本类型和引用类型的值
### 动态属性
- 定义基本类型和引用类型的方式类似
- 操作基本类型和引用类型的方式不同
	- 基本类型，无法动态添加属性
	```
	var name=“tom”;
	name.age=27;
	console.log(name.age);//undefined
	```
	- 引用类型值可以动态添加属性
	```
	var person = new Object();
	person.name="tom";
	console.log(person.name);//tom
	```
### 复制变量值
>操作:从一个变量向另一个变量复制基本类型和引用类型
- 基本类型的值，保存的是变量的副本，两个变量完全独立，改变其中一个，不会影响另一个
```
var num1=5;
var num2=num1;
var num2=6;
//互不影响
console.log(num1);//5
console.log(num2);//6
```
- 引用类型的值，保存的是对象指针的副本，改变其中一个，会影响另一个
```
var obj1=new Object();
var obj2=obj1;
//有影响
obj1.name="tom";
console.log(obj2.name);//"tom"
```
### 传递参数
> 按值传递

值”的含义：
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
### 检测类型
#### typeof
- 非常适合检测基本类型
```
	console.log(typeof "123");//string
    console.log(typeof 456);//number
    console.log(typeof false);//boolean
    console.log(typeof undefined);//undefined
```

- 对引用类型检测有点鸡肋
```
 	console.log(typeof null);//object
    console.log(typeof {});//object
```
#### instanceof
- 适合引用类型检测
```
	 let arr=[];
    console.log(arr instanceof Array);//true

    let reg=/^\d/
    console.log(reg instanceof RegExp);//true
```
## 执行环境及作用域
**示例：**
```
var color=“bule”；
function changeColor(){
	var anotherColor=“red”;
	function swapColors(){
		var tempColor=anotherColor;
		anotherColor=color;
		color=tempcolor；
		//这里可以访问color,anotherColor和tempColor
	}
	这里可以访问color，anotherColor，但不能访问tempColor
	swapColor();
}
//这里只能访问color
changeColor()
```
**分析执行环境**
- window
	- color
	- changeColor
		- anotherColor
		- swapColors
			- tempColor
- 内部环境可以通过作用域链访问所有的外部环境，但外部环境不能访问内部环境中的任何变量核函数
- 这些环境都是线性的，有次序的，每个环境都可以向上搜索作用域链，查询变量和函数；但任何环境不能通过向下搜索作用域链而进入另一个执行环境。
### 延长作用域链
- try-catch语句的catch快
- with语句
### 没有块级作用域
#### 声明变量
- 使用var 声明变量会被自动添加到最接近的环境中，在函数中，最接近的环境是函数环境
```
function(num1,num2){
	var sum=num1+num2;
	return sum;
}
var result=add(10,20);//30
console.log(sum);//由于sum不是有效的变量，因此会导致错误
```
- 初始化变量时没有使用var声明，该变量就会被添加到全局环境
```
function(num1,num2){
	var sum=num1+num2;
	return sum;
}
var result=add(10,20);//30
console.log(sum);//30
```
#### 查询标识符
**示例**
```
var color=“bule”;

function getColor(){
return color；
}
console.log(getcolor());//"bule"
```
**查询过程**
- 搜索getColor，查找color，没有继续向上搜索
- 搜索全局对象，查找到color，所以搜索结束。
## 垃圾收集
### 标记清除
>定义

当变量进入环境时，就将这个变量标记为“进入环境”。从逻辑上讲，永远不能释放进入环境的变量所占用的内存，因为只要执行流进入相应的环境，就可能会用到他们。当变量离开环境时，则将其标记为“离开环境”。

标记清除算法分为标记和清除两个阶段.这个算法假定设置一个叫做根（root）的对象（在 Javascript 里,根是全局对象）.垃圾回收器将定期从根开始,找所有从根开始引用的对象,然后找这些对象引用的对象,然后对这些对象进行标记……从根开始,垃圾回收器将找到所有可以获得的对象和收集所有不能获得的对象.之后进入了清除阶段,标记的对象会与内存中的对象进行比较,然后清除内存中那些没有标记的对象
- 标记阶段,它将遍历堆中所有对象,并对存活的对象进行标记；
- 清除阶段,对未标记对象的空间进行回收.

### 引用计数
>定义

跟踪记录每个值被引用的次数，当声明了一个变量并将一个引用类型赋给该变量时，则这个值的引用次数就是1.如果同一个值又被赋给另一个变量则该值的引用次数加1.相反这个值的引用的变量又取得另一个值.则这个值的引用次数减1.

- 最大的问题：循环引用是对象A中包含一个指向对象B的指针而对象B中包含一个指向对象A的引用
```
function f(){
  var o = {};
  var o2 = {};
  o.a = o2; // o 引用 o2
  o2.a = o; // o2 引用 o

  return "azerty";
}

f();
```
