# 引用类型
- Object类型
- Array类型
- Date类型
- RegExp类型
- Function类型
- 基本包装类型
- 单体内置对象
## Object类型
### 创建对象的方式
##### 对象字面量
	```
	var obj={
		name:"tom",
		age:23
	}
	```
#### 构造函数方式
	```
	var obj=new Object();
	obj.name="tom";
	obj.age=23;
	```
### 对象取值的方式
#### 点表示法
	```
	var obj={
		name:"tom",
		age:23
	}
	console.log(obj.name);//tom
	```
#### 方括号表示法
	```
	var obj={
		name:"tom",
		age:23
	}
	console.log(obj["name"]);//tom
	```
	这个方法可以在方括号中进行简单的计算
	```
	var obj={
		name:"tom",
        age:23,
        name1:"aa",
    }
    console.log(obj["name"]);//tom
    //这种取值方式，会变得很灵活
    var i=1;
	console.log(obj["name"+i]);//aa
	```
## Array类型
### 创建数组的方式
#### Array构造函数
- 初始参数为数字，则按照该数组创建包含给定项数的数组
- 如果为其他类型，则创建包含那个值的数组
- new可以省略
```
 	var arr= new Array(3);
    console.log(arr);//Array(3)

    var arr1=new Array("aa","bb","cc");
    console.log(arr1);//["aa", "bb", "cc"]

    var arr2=Array("1","2","3");
    console.log(arr2);//["1", "2", "3"]
```
#### 数组字面量表示法
```
var color=["red","blue","green"];
var names=[];
var val=[1,2,,3,4]
console.log(val[2])//undefind
```
#### 数组取值与赋值
- 使用方括号并提供相应值的基于0的数字索引
```
var colors=["red","blue","green"];
console.log(colors[0]);//red
```
- 如果设置某个值的索引小于数组项数，则是设置对应的索引的值
```
	var colors=["red","blue","green"];
    colors[0]="123";
    console.log(colors);//["123", "blue", "green"]
```
- 如果设置某个值的索引大于数组的项数，则设置对应的索引值，并且用undefined(empty)填充最大项数与索引值之间
```
	var colors1=["red","blue","green"];
    colors[4]="123";
    console.log(colors);//["123", "blue", "green", empty, "123"]
```
#### 数组的length
```
	var colors2=["red","blue","green"];
    console.log(colors2.length);//3
```
- 从数组末尾移除项
```
	var colors3=["red","blue","green"];
    colors3.length=2
    console.log(colors3);//["red", "blue"]
```
- 从数字末尾添加项
```
	 var colors4=["red","blue","green"];
    colors4[colors4.length]="black"
    console.log(colors4);//["red", "blue", "green", "black"]
```
#### 检测数组
- instanceof
```
	var arr=[];
    var res=arr instanceof Array
    console.log(res);
```
- isArray
```
	var arr=[];
	var res1=Array.isArray(arr)
    console.log(res1);
```
#### 转化方法
- toLocaleString()，返回每个值的字符串形式拼接而成的一个以逗号分隔的字符串
- toString()，返回每个值的字符串形式拼接而成的一个以逗号分隔的字符串
- valueOf(),返回数组本身
```
	var colors5=["red","blue","green"];
    console.log(colors5.toLocaleString());//red,blue,green
    console.log(colors5.toString());//red,blue,green
    console.log(colors5.valueOf());//["red", "blue", "green"]
```
#### 栈方法
> 定义

栈是一种LIFO(Last-In-First-Out,后进先出)的数据格式，ECMASript为数组专门提供了push()和pop()方法,实现类似栈的行为
- push
接收任意数量的参数,把他们逐个添加到数组末尾,并返回修改后数组的长度.
```
 	var shuzu=[];
    shuzu.push("1","2","3");//推入多项
    console.log(shuzu);//["1", "2", "3"]

    shuzu.push("4");//推入一项
    console.log(shuzu);//["1", "2", "3", "4"]
```

- pop
从数组末尾移除最后一项，减少数组的length值，然后返回移除项
```
	var shuzu=[];
    shuzu.push("1","2","3");//推入多项
    console.log(shuzu);//["1", "2", "3"]

    shuzu.push("4");//推入一项
    console.log(shuzu);//["1", "2", "3", "4"]

    console.log(shuzu.pop());//推出一项，返回4
    console.log(shuzu);//["1", "2", "3"]
```
#### 队列方法
>定义

队列是一种FIFO(Fisrt-in-First-Out,先进先出)数据格式.ECMASript为数组专门提供了unshift()和shift()方法,实现类似栈的行为
- unshift
接收任意数量的参数,把他们逐个添加到数组首部,并返回修改后数组的长度.
```
 	var shuzu1=["0"];
    shuzu1.unshift("1","2","3");//推入多项
    console.log(shuzu1);//["1", "2", "3", "0"]
```

- shift
- 从数组首部移除最后一项，减少数组的length值，然后返回移除项
```
	var shuzu1=["0"];
    shuzu1.unshift("1","2","3");//推入多项
    console.log(shuzu1);//["1", "2", "3", "0"]

    console.log(shuzu1.shift());//推出一项，返回1
    console.log(shuzu1);//["2", "3", "0"]
```
#### 重排序方法
- reverse
反转数组的顺序
```
 	var shuzu2=[1,2,3,4,5];
    shuzu2.reverse();
    console.log(shuzu2);//[5, 4, 3, 2, 1]
```
- sort
	默认情况下，按升序排列数组---最小值位于最前面，最大值排在最后面。
```
	var shuzu2=[1,2,3,6,5];
 	shuzu2.sort();//默认排序
    console.log(shuzu2);//[1, 2, 3, 5, 6]
```
自定义排序规则
```
 var shuzu2=[1,2,3,6,5];
 
shuzu2.sort((x,y)=>{
        return x-y;
    });//自定义升排序
    console.log(shuzu2);//[1, 2, 3, 5, 6]

shuzu2.sort((x,y)=>{
        return y-x;
    });//自定义升排序
    console.log(shuzu2);//[6, 5, 3, 2, 1]
```
#### 操作方法
- cancat
创建当前数组一个副本，然后将接收到的参数添加到这个副本的末尾，最后返回新构建的数组
```
 	var shuzu3=[1,2,3];
    var shuzu4=["-",4,5];
    var shuzu5=shuzu3.concat(shuzu4);
    console.log(shuzu5);[1, 2, 3, "-", 4, 5]
```
- slice
基于当前数组中的一或多个项创建一个新数组，不影响原始数组
```
	var shuzu6=[4,5,7,8,6,10];
    var shuzu7=shuzu6.slice(0,4);
    console.log(shuzu7);//[4, 5, 7, 8]
```
如果参数中有负数，则相当于数组长度加上该数
```
 	var shuzu6=[4,5,7,8,6,10];
    var shuzu7=shuzu6.slice(0,4);
    console.log(shuzu7);//[4, 5, 7, 8]
    var shuzu=8shuzu6.slice(0,-1);//等价于(0,4)
    console.log(shuzu8);//[4, 5, 7, 8]
```
如果结束为止小于起始位置
```
	var shuzu6=[4,5,7,8,6,10];
	var shuzu9=shuzu6.slice(4,2);
    console.log(shuzu9);//[]
```
- splice
	 - 删除
	 可以删除任意数量的项，只需指定2个参数：要删除的第一项的位置和要删除的项数
		```
		 var shuzu10=[4,5,7,8,6,10];
	    shuzu10.splice(2,1);//从下标为2的位置开始删除一项
	    console.log(shuzu10);//[4, 5, 8, 6, 10]
		```
	- 插入
	可以向指定位置插入任意数量的项，只需提供3个参数:起始位置,0(要删除的项数),和要插入的项,任意数量的项数
		```
		 	var shuzu11=[4,5,7,8,6,10];
		    shuzu11.splice(2,0,"red","bule");//从下标为2的位置开始插入多项
		    console.log(shuzu11);//[4, 5, "red", "bule", 7, 8, 6, 10]
		```
	- 替换
可以向指定位置插入任意数量的项，且同时删除任意数量的项，只需指定3个参数:起始位置,要删除的项数和要插入任意数量的项
		```
		 var shuzu12=[4,5,7,8,6,10];
	    shuzu12.splice(2,2,"red","bule");//从下标为2的位置开始删除两项，并添加两项
	    console.log(shuzu12);//[4, 5, "red", "bule", 6, 10]
		```
#### 位置方法
- indexOf
从数组的开头(位置0),开始向后查找
- lastIndexOf
从数组的末尾开始向前查找
```
 	var num=[1,2,3,4,5,6,7,8];
	console.log(num.indexOf(4));//3
    console.log(num.indexOf(9));//-1
    console.log(num.lastIndexOf(4));//3
```
#### 迭代方法
- every
对数组中的每一项运行给定函数，如果该函数对每一项都返回true，则返回true
```
var arr=[1,2,3,4,5,4,3,2,1];
let res=arr.every((item)=>{
    return (item>2)
})
console.log(res);//false


var arr=[3,4,5,6,7];
let res1=arr.every((item)=>{
    return (item>2)
})
console.log(res1);//ture
```
- filter
对数组中的每一项运行给定函数，返回该函数会返回ture的项组成的数组
```
var arr=[{id:2,name:"tom"},{id:2,name:"bob"},{id:3,name:"cindy"},{id:4,name:"kid"}];
let res3=arr.filter((item)=>{
    return item.id==2;
})
console.log(res3);//[ { id: 2, name: 'tom' }, { id: 2, name: 'bob' } ]
```
- forEach
```
var arr=[1,2,3,6,8,9];
arr.forEach((item,index,array)=>{
    console.log(item);
})
1
2
3
6
8
9
```
- map
```
var arr=[1,2,3,6,8,9];
var newArr=arr.map((item,index,array)=>{
    return{
        id:item,
        type:true
    }
})
console.log(newArr);
// [
//     { id: 1, type: true },
//     { id: 2, type: true },
//     { id: 3, type: true },
//     { id: 6, type: true },
//     { id: 8, type: true },
//     { id: 9, type: true }
//   ]
```
- some
对数组中的每一项运行给定函数，如果该函数对任一项返回true，则返回true
```
var arr=[1,2,3,6,8,9];
var newArr1=arr.some((item,index,array)=>{
    return item>8
})
console.log(newArr1);//true
```
#### 归并方法
- reduce
- reduceRight
```
var arr=[1,2,3,6,8,9];
var res4=arr.reduce((pre,cur,index,array)=>{
    return pre+cur;
})
console.log(res4);//29
```
第一次执行回调函数，prev是1，cur是2，第二次是3(1加2的结果)，cur是3(数组的第三项).这个过程会持续到把数组中的每一项都访问一遍,最后返回结果
## Date类型
### 创建方式
调用构造函数而不传递参数的情况下，新创建的对象自定获取当前日期和时间。
```
var now=new Date();//2020-10-24T09:04:12.399Z
```
- Date.parse
接受一个日期字符串格式，返回毫秒值，如果传入的字符串不能表示日期，会返回NaN
- “月/日/年”,如5/25/2004
- “英文月名 日,年”,如January 12,2004
- ISO 8601扩展格式YYYY-MM-DDTHH:mm:ss.sssZ(2004-05-25T00:00:00)
- 接收类似new Date(年,月(0-11),日,时(0-23),分,秒,毫秒)这种写法
```
console.log( Date.parse("5/25/2004"));//1085414400000
console.log( Date.parse("May 25,2004"));//1085414400000
console.log( Date.parse("2004-05-25T00:00:00"));//1085414400000
console.log(new Date(2000,0,1,0,0,0));//1999-12-31T16:00:00.000Z(标准时间)
```
其实new Date(),后台也会调用Date.parse();
```
var someDate=new Date(Date.parse("May 25,2004"));
var someDate1=new Date("May 25,2004");
console.log(someDate)//2004-05-24T16:00:00.000Z
console.log(someDate1)//2004-05-24T16:00:00.000Z
```
- Date.UTC
返回表示日期的毫秒值，参数分别是:年份,基于0的月份(一月是0,二月是1,以此类推),月中的哪一天(1到31),小时数(0到23),分钟,秒以及毫秒数.
```
//返回的UTC是一个从标准时间1970/01/01 0点开始计算毫秒值,标准时间是
// console.log(Date.UTC(2000,1,1,0,0,0));//949334400000
```
**示例1：**
北京时间2000/01/01 00:00:00，比较标准时间快8小时

- 北京时间的2000/01/01 00:00:00，换算成标准时间是1999/12/31 16:00:00
- 此时的Date.parse("2000/01/01 00:00:00")==Date.UTC(1999,11,31,16,0,0,0)

**示例2：**
标准时间2000/01/01 00:00:00，比北京时间慢8小时

- 标准时间的2000/01/01 00:00:00，换算成北京时间就是2000/01/01 08:00:0
- 此时Date.UTC(2000,0,1,0,0,0,0)==Date.parse(2000,1,1,8,0,0,0)

- Date.now
返回调用这个方法时的日期和时间的毫秒值
	```
	console.log(Date.now())/返回此时时间的毫秒值
	```
### 日期的比较
Date类型的valueOf方法返回的不是字符串，而是返回日期的毫秒值。因此，可以方便使用比较操作符(小于或大于)来比较日期值.

**示例**
北京时间2000/1/1 00:00:00
```
console.log(new Date(2000,0,1,0,0,0).valueOf());//946656000000
console.log(Date.parse("2000/01/01 00:00:00"));//946656000000

var date1=new Date(2000,0,1,0,0,0);
var date2=new Date(2000,1,1,0,0,0);

var date1=new Date(2000,0,1,0,0,0);
var date2=new Date(2000,1,1,0,0,0);
console.log(date2>date1);//true,由于比较符会自动调用引用类型的valueOf，所以直接比较的是毫秒值
```
### 日期格式化方法
**示例**
北京时间2000/1/1 00:00:00
```
var date=new Date(2000,0,1,0,0,0)

console.log(date.toDateString());//Sat Jan 01 2000,格式显示星期几,月，日和年
console.log(date.toTimeString());//00:00:00 GMT+0800 (GMT+08:00),格式显示时，分，秒和时区
console.log(date.toLocaleDateString());//2000-1-1,以特定地区的格式显示星期几，月，日，年
console.log(date.toLocaleTimeString());//0:00:00,以特定地区的格式显示星期时,分,秒
console.log(date.toUTCString());//Fri, 31 Dec 1999 16:00:00 GMT,特定于实现的格式完整的UTC日期
```
### 日期/时间组件方法
**示例**

//北京时间:2000-01-01T00:00:00.000Z
//标准时间:1999-12-31T16:00:00.000Z

- 获取毫秒值
```
var date=new Date(2000,0,1,0,0,0);
console.log(date.getTime());//946656000000,返回毫秒值,与valueOf返回值一样
console.log(new Date(date.setTime(1000)));//1970-01-01T00:00:01.000Z,返回的是以标准时间为基准的日期，会改变日期
```
- 年
>ps:注意点:由于new Date()返回的是标准时间格式
```
//获取年
var date1=new Date(2000,0,1,0,0,0);
console.log(date1);//1999-12-31T16:00:00.000Z,返回标准时间日期格式
console.log(date1.getFullYear());//2000,返回北京时间，年
console.log(date1.getUTCFullYear());//1999，返回标准时间，年

//设置北京时间年
var date2=new Date(2000,0,1,0,0,0);
var dt1=new Date(date2.setFullYear(2001));//设置北京时间的年为2001年
console.log(dt1);//2000-12-31T16:00:00.000Z，标准时间日期
console.log(dt1.getFullYear());//北京时间年2001
console.log(dt1.getUTCFullYear());//标准时间时间年2000

//设置标准时间年
var date3=new Date(2000,0,1,0,0,0);
var dt2=new Date(date3.setUTCFullYear(2001));//设置北京时间的年为2001年
console.log(dt2);//2001-12-31T16:00:00.000Z，标准时间日期
console.log(dt2.getFullYear());//北京时间年2002
console.log(dt2.getUTCFullYear());//标准时间时间年2001
```
- 月(0-11)
>setUTCMonth与setMonth区别

- setMonth是按照月份后，标准时间加上8小时就是北京时间格式了
```
var date6=new Date(2000,0,1,0,0,0);
var dt3=new Date(date6.setMonth(2));//标准时间,2000-02-29T16:00:00.000Z,北京时间,2000-03-01T00:00:00.000Z,
var dt4=new Date(date6.setMonth(3));//标准时间,2000-03-31T16:00:00.000Z,北京时间:2000-04-01T00:00:00.000Z
```
- setUTCMonth是按照本月的第一天+31天，设置的日期
```
//设置标准时间月
var date7=new Date(2000,0,1,0,0,0);
//1999年的2月份是28天，所以加上31天就到了3月份的3号
var dt5=new Date(date7.setUTCMonth(1));//1999-03-03T16:00:00.000Z
//1999年的4月份是30天，所以加上31天就到了5月份的1号
var dt6=new Date(date7.setUTCMonth(3));//1999-05-01T16:00:00.000Z
```

```
//获取月
var date5=new Date(2000,0,1,0,0,0);
console.log(date5);//1999-12-31T16:00:00.000Z,返回标准时间日期格式
console.log(date2.getMonth());//0,返回北京时间,月
console.log(date5.getUTCMonth());//11，返回标准时间,月

//设置北京时间月
var date6=new Date(2000,0,1,0,0,0);
var dt3=new Date(date6.setMonth(0));//设置北京时间的月为1月
console.log(dt3);//1999-12-31T16:00:00.000Z，标准时间日期,北京时间2000-01-01T00:00:00.000Z
console.log(dt3.getMonth());//0，北京时间，1月
console.log(dt3.getUTCMonth());//11,标准时间时间,12月

//设置标准时间月
var date7=new Date(2000,0,1,0,0,0);
var dt4=new Date(date7.setUTCMonth(0));//设置标准时间为1月底
console.log(dt4);//1999-01-31T16:00:00.000Z，标准时间日期,北京时间1999-02-01T00:00:00.000Z
console.log(dt4.getMonth());//1，北京时间,2月初
console.log(dt4.getUTCMonth());//0.标准时间月,1月底
```
- 日(1-31)
```
//获取日
var date8=new Date(2000,0,1,0,0,0);
console.log(date8);//1999-12-31T16:00:00.000Z,返回标准时间日期格式,北京时间是2000-01-01T00:00:00.000Z
console.log(date8.getDate());//1,返回北京时间,1日
console.log(date8.getUTCDate());//31，返回标准时间,31日

//设置北京时间日
var date9=new Date(2000,0,1,0,0,0);
var dt5=new Date(date9.setDate(15));//设置北京时间为15日
console.log(dt5);//2000-01-14T16:00:00.000Z，标准时间日期,北京时间2000-01-15T00:00:00.000Z
console.log(dt5.getDate());//15，北京时间，15日
console.log(dt5.getUTCDate());//14,标准时间时间,14日

//设置标准时间日
var date10=new Date(2000,0,1,0,0,0);
var dt6=new Date(date10.setUTCDate(15));//设置标准时间为15日
console.log(dt6);//1999-12-15T16:00:00.000Z，标准时间日期,北京时间1999-12-16T00:00:00.000Z
console.log(dt6.getDate());//16，北京时间,16日
console.log(dt6.getUTCDate());//15.标准时间月,15日
```
- 星期(0代表星期日，(1-6)星期)
```
//获取星期
var date11=new Date(2000,0,1,0,0,0);
console.log(date11);//1999-12-31T16:00:00.000Z,返回标准时间日期格式,北京时间是2000-01-01T00:00:00.000Z
console.log(date11.getDay());//6,返回北京时间,星期6
console.log(date11.getUTCDay());//5，返回标准时间,星期5
```
- 时(0-23)
```
//获取时
var date12=new Date(2000,0,1,0,0,0);
console.log(date12);//1999-12-31T16:00:00.000Z,返回标准时间日期格式,北京时间是2000-01-01T00:00:00.000Z
console.log(date12.getHours());//0,返回北京时间,0时
console.log(date12.getUTCHours());//16，返回标准时间,16时

//设置北京时间时
var date13=new Date(2000,0,1,0,0,0);
var dt7=new Date(date13.setHours(15));//设置北京时间为15日
console.log(dt7);//2000-01-01T07:00:00.000Z，标准时间日期,北京时间2000-01-01T15:00:00.000Z
console.log(dt7.getHours());//15，北京时间，15时
console.log(dt7.getUTCHours());//7,标准时间时间,7时

//设置标准时间时
var date14=new Date(2000,0,1,0,0,0);
var dt8=new Date(date14.setUTCHours(15));//设置标准时间为15日
console.log(dt8);//1999-12-31T15:00:00.000Z，标准时间日期,北京时间1999-12-31T23:00:00.000Z
console.log(dt8.getHours());//23，北京时间,23时
console.log(dt8.getUTCHours());//15.标准时间月,15时
```
- 分(0-59)
```
//获取分
var date13=new Date(2000,0,1,0,0,0);
console.log(date13);//1999-12-31T16:00:00.000Z,返回标准时间日期格式,北京时间是2000-01-01T00:00:00.000Z
console.log(date13.getMinutes());//0,返回北京时间,0分
console.log(date13.getUTCMinutes());//0，返回标准时间,0分

//设置北京时间分
var date14=new Date(2000,0,1,0,0,0);
var dt9=new Date(date14.setMinutes(15));//设置北京时间为15分
console.log(dt9);//1999-12-31T16:15:00.000Z，标准时间日期,北京时间2000-01-01T00:15:00.000Z
console.log(dt9.getMinutes());//15，北京时间，15分
console.log(dt9.getUTCMinutes());//15,标准时间时间,15分

//设置标准时间分
var date15=new Date(2000,0,1,0,0,0);
var dt10=new Date(date15.setUTCMinutes(15));//设置标准时间为15日
console.log(dt10);//1999-12-31T16:15:00.000Z，标准时间日期,北京时间2000-01-01T00:15:00.000Z
console.log(dt10.getMinutes());//15，北京时间,15分
console.log(dt10.getUTCMinutes());//15，北京时间,15分
```
- 秒(0-59)
```
//获取秒
var date16=new Date(2000,0,1,0,0,0);
console.log(date16);//1999-12-31T16:00:00.000Z,返回标准时间日期格式,北京时间是2000-01-01T00:00:00.000Z
console.log(date16.getSeconds());//0,返回北京时间,0分
console.log(date16.getUTCSeconds());//0，返回标准时间,0分

//设置北京时间秒
var date17=new Date(2000,0,1,0,0,0);
var dt11=new Date(date17.setSeconds(15));//设置北京时间为15分
console.log(dt11);//1999-12-31T16:00:15.000Z，标准时间日期,北京时间2000-01-01T00:00:15.000Z
console.log(dt11.getSeconds());//15，北京时间，15秒
console.log(dt11.getUTCSeconds());//15,标准时间时间,15秒

//设置标准时间秒
var date18=new Date(2000,0,1,0,0,0);
var dt12=new Date(date18.setUTCSeconds(15));//设置标准时间为15秒
console.log(dt12);//1999-12-31T16:00:15.000Z，标准时间日期,北京时间2000-01-01T00:00:15.000Z
console.log(dt12.getSeconds());//15，北京时间,15秒
console.log(dt12.getUTCSeconds());//15，北京时间,15秒
```
- 毫秒(0-999)
```
/获取毫秒
var date19=new Date(2000,0,1,0,0,0);
console.log(date19);//1999-12-31T16:00:00.200Z,返回标准时间日期格式,北京时间是2000-01-01T00:00:00.200Z
console.log(date19.getMilliseconds());//0,返回北京时间,0毫秒
console.log(date19.getUTCMilliseconds());//0，返回标准时间,0毫秒

//设置北京时间毫秒
var date20=new Date(2000,0,1,0,0,0);
var dt13=new Date(date20.setMilliseconds(200));//设置北京时间为200毫秒
console.log(dt13);//1999-12-31T16:00:15.200Z，标准时间日期,北京时间2000-01-01T00:00:15.200Z
console.log(dt13.getMilliseconds());//200，北京时间，200毫秒
console.log(dt13.getUTCMilliseconds());//200,标准时间时间,200毫秒

//设置标准时间毫秒
var date21=new Date(2000,0,1,0,0,0);
var dt14=new Date(date21.setUTCMilliseconds(200));//设置标准时间为200毫秒
console.log(dt14);//1999-12-31T16:00:15.200Z，标准时间日期,北京时间2000-01-01T00:00:15.200Z
console.log(dt14.getMilliseconds());//200，北京时间,200毫秒
console.log(dt14.getUTCMilliseconds());//200，北京时间,200毫秒
```
- 返回本地时间与标准时间相差分钟值
```
//设置标准时间毫秒
var date22=new Date(2000,0,1,0,0,0);
console.log(date22.getTimezoneOffset())//-480,相差了480分钟
```
## RegExp类型
### 创建方式
#### 字面量
>表达式：var expression =/ pattern /flags;

- g:表示全局模式,应用于所有字符串,而非在发现第一个匹配项时立即停止
```
var str="1at.2at5a";
var pat=/at/g
console.log(str.match(pat));//[ 'at', 'at' ]
```
- i:表示不区分大小写模式
```
var str1="1at.2At5a";
var pat=/at/gi
console.log(str1.match(pat));//[ 'at', 'At' ]
```
- m:表示多行模式,即到达一行文本末尾时还会继续查找下一行中是否存在与模式匹配的项
```
var str1=
`1at.2At5a
At,s,at`;
var pat2=/at/gim
console.log(str1.match(pat2));//[ 'at', 'At', 'At', 'at' ]
```
#### 构造函数
```
var str2=
`1at.2At5a
At,s,at`;
var pat3=new RegExp("at","gim")
console.log(str1.match(pat3));//[ 'at', 'At', 'At', 'at' ]
```
字面量模式与构造函数等价的字符串
| 字面量模式 | 等价的字符串 |
|--|--|
| /\\[bc\\]/at | "\\\\[bc\\\\]at"|
|/\\.at/|"\\\\.at"|
|/name\\/age|"name\\\\/age"|

### RegExg实例
- global:布尔值，是否设置g,标签
- ignoreCase,布尔值,表示是否设置了i标志
- lastIndex，整数，表示开始搜索下一个匹配项的字符位置，从0算起
- multiline，布尔值，表示是否设置了m标志
- source，正则表达式的字符串表示
```
var reg =new RegExp("cat","g")

console.log(reg.lastIndex);//0
console.log(reg.global);//true
console.log(reg.ignoreCase);//false
console.log(reg.multiline);//false
console.log(reg.source);//cat
```
### RegExg实例方法
- exec()
```
var text = "mom and dad and baby";
var pattern=/mom( and dad( and baby)?)?/gi

var matches=pattern.exec(text);

console.log(matches);

[
  'mom and dad and baby',
  ' and dad and baby',
  ' and baby',
  index: 0,
  input: 'mom and dad and baby',
  groups: undefined
]
```
- lastIndex
非全局模式
每次匹配都是从字符串头部开始匹配，所以index和lastIndex都是0
```
var text ="cat,cat,bat,sat,fat";
var pattern1=/.at/;

var matches=pattern1.exec(text);
console.log(matches)
console.log(matches.index)
console.log(matches[0])
console.log(pattern1.lastIndex)

var matches=pattern1.exec(text);
console.log(matches)
console.log(matches.index)
console.log(matches[0])
console.log(pattern1.lastIndex)
```
全局模式
第一次匹配是从头部开始，第二次匹配从上一次lastIndex开始匹配直到下一次匹配到为止
```
var text ="cat,bat,sat,fat";
var pattern2=/.at/g;

var matches=pattern2.exec(text);
console.log(matches)
console.log(matches.index)//0
console.log(matches[0])//cat
console.log(pattern2.lastIndex)//3

var matches=pattern2.exec(text);
console.log(matches)
console.log(matches.index)//4
console.log(matches[0])//bat
console.log(pattern2.lastIndex)//7
```
- test()
```
var text1 ="cat,baa";
var pattern3=/.at/g;
console.log(pattern3.test(text1));//true
console.log(pattern3.lastIndex);//3
console.log(pattern3.test(text1));//false
console.log(pattern3.lastIndex);//0
```
### RegExg构造函数属性
| 长属性名 | 短属性名 |说明|
|--|--|--|
| input | $_ |最近一次要匹配的字符串。Opera未实现此属性|
| lastMatch| $& |最近一次的匹配项。Opera未实现此属性|
| lastParen| $+ |最近一次匹配的捕获组。Opera未实现此属性|
| leftContext| $` |input字符串中lastMatch之前的文本|
| multiline| $* |是否表达多行模式|
|rightContext| $' |input字符串中lastMatch之后的文本|
```
var text2 = "this has been a short summer";
var pattern3=/(.)hort/g;
pattern3.test(text2)
console.log(RegExp.input);//this has been a short summer
console.log(RegExp.leftContext);//this has been a 
console.log(RegExp.rightContext);// summer
console.log(RegExp.lastMatch);//short
console.log(RegExp.lastParen);//s
console.log(RegExp.multiline);//undefined

console.log(RegExp.$_);//this has been a short summer
console.log(RegExp["$`"]);//this has been a 
console.log(RegExp["$'"]);// summer
console.log(RegExp["$&"]);//short
console.log(RegExp["$+"]);//s
console.log(RegExp["$*"]);//undefined
```
其余9个用于捕获组的属性，$1,$2.....$9
```
var pattern4=/(..)or(.)/g
pattern4.test(text2);
console.log(RegExp.$1);//sh
console.log(RegExp.$2);//t
```

### 模式的局限性
ECMSCript正则表达式不支持种类
- 匹配字符串开始和结尾的\A和\Z锚
- 向后查找
- 并集合交集类
- 原子组
- Unicode支持
- 命名的捕获组
- s(单行)和x(无间隔)匹配模式
- 条件匹配
- 正则表达式注释
## Function类型
###  创建方式
#### 函数声明
```
function sum(num1,num2){
	return num1+num2；
}
```
#### 函数表达式
```
var sum=function (num1,num2){
	return num1+num2；
}
```
#### 构造函数
```
var sum=Function ("num1","num2","return num1+num2")//不推荐
```
### 没有重载
可以把函数名想象成指针，当创建同名函数式，第二个会覆盖第一个函数
```
function sum(num1,num2){
	return num1+num2;
}

function sum(num1,num2){
	return num1;
}

console.log(sum(1,2));//1
```
### 函数声明和函数表达式
js解析器对函数声明和函数表达式并非一视同仁，解析器会率先读取函数声明，并使其在执行任何代码之前可用,(可以访问);至于函数表达式,必须等到解析器执行到它所在的代码行才会真正解释执行

函数声明
```
console.log(sum1(1,2));//3
function sum1(num1,num2){
	return num1+num2;
}
```
函数表达式
```
console.log(sum1(1,2));//TypeError: sum1 is not a function
var sum1=function (num1,num2){
	return num1+num2;
}
```
### 理解变量提升和函数声明提升
#### 变量声明提升
 ##### 定义
 可以使用var定义变量，变量如果没有赋值，那变量的初始值为undefined
 ##### 变量作用域
 变量作用域指变量起作用的范围。变量分为全局变量和局部变量。全局变量在全局都拥有定义；而局部变量只能在函数内有效。
在函数体内，同名的局部变量或者参数的优先级会高于全局变量。也就是说，如果函数内存在和全局变量同名的局部变量或者参数，那么全局变量将会被局部变量覆盖。
所有不使用var定义的变量都视为全局变量
##### 函数作用域和声明提前
JavaScript的函数作用是指在函数内声明的所有变量在函数体内始终是有定义的，也就是说变量在声明之前已经可用，所有这特性称为声明提前（hoisting），即JavaScript函数里的所有声明（只是声明，但不涉及赋值）都被提前到函数体的顶部，而变量赋值操作留在原来的位置。如下面例子：
注释：声明提前是在JavaScript引擎的预编译时进行，是在代码开始运行之前。
```
var scope = 'global';
function f(){
    console.log(scope);
    var scope = 'local';
    console.log(scope);
}
```
由于函数内声明提升，所以上面的代码实际上是这样的
```
var scope = 'global';
function f(){
    var scope;    //变量声明提升到函数顶部
    console.log(scope);
    scope = 'local';    //变量初始化依然保留在原来的位置
    console.log(scope);
}
```
经过这样变形之后，答案就就非常明显了。由于scope在第一个console.log(scope)语句之前就已经定义了，但是并没有赋值，因此此时scope的指是undefined.第二个console.log(scope)语句之前，scope已经完成赋值为’local’，所以输出的结果是local。
#### 函数声明提升
##### 函数的两种创建方式
- 函数声明
- 函数表达式
我们上面已经介绍了这两种方式。
为什么同样的代码，函数声明和函数表达式存在着差异呢？
是因为，函数声明有一个非常重要的特征：函数声明提升，函数声明语句将会被提升到外部脚本或者外部函数作用域的顶部（是不是跟变量提升非常类似）。正是因为这个特征，所以可以把函数声明放在调用它的语句后面。如下面例子，最终的输出结果应该是什么？：
```
var getName = function(){
    console.log(2);
}
function getName (){
    console.log(1);
}
getName();
```
可能会有人觉得最后输出的结果是1。让我们来分析一下，这个例子涉及到了变量声明提升和函数声明提升。正如前面说到的函数声明提升，函数声明function getName(){}的声明会被提前到顶部。而函数表达式var getName = function(){}则表现出变量声明提升。因此在这种情况下，getName也是一个变量，因此这个变量的声明也将提升到底部，而变量的赋值依然保留在原来的位置。需要注意的是，函数优先，虽然函数声明和变量声明都会被提升，但是函数会首先被提升，然后才是变量。因此上面的函数可以转换成下面的样子:
```
function getName(){    //函数声明提升到顶部
    console.log(1);
}
var getName;    //变量声明提升
getName = function(){    //变量赋值依然保留在原来的位置
    console.log(2);
}
getName();    // 最终输出：2
```
所以最终的输出结果是：2。在原来的例子中，函数声明虽然是在函数表达式后面，但由于函数声明提升到顶部，因此后面getName又被函数表达式的赋值操作给覆盖了，所以输出2。

#### 拓展知识
- 在JavaScript中变量和函数的声明会提升到最顶部执行
- 函数的提升高于变量的提升
```
//同时声明变量a和函数a
var a;
function a() {} 
alert(typeof a); //显示的是"function"，初步证明function的优先级高于var。
 
//先声明函数后声明变量，证明上边的例子不是function覆盖了变量
function a() {}
var a; 
alert(typeof a); //显示的仍是"function",而不是"undefined"，即function的优先级高于var。
 
//声明了变量的同时赋值
function a() {}
var a = 1;
alert(typeof a); //number,此时不是function了。
//说明："var a=1"相当于"var a;a=1",即先声明，后赋值，"a=1"相当于把a重新赋值了，自然就是number!
```

- 函数内部如果用var声明了相同名称的外部变量，函数将不再向上寻找
```
var value = 'hello';
function show() {
  alert(value);
  if (!value) {
    var value = 'function';
  }
  alert(value);
}
show() //此处调用函数依次弹出 "undefined", "function"
 
//上例相当于var value = 'hello';
function show() {
　　var value; //注意这行
  alert(value);
  if (!value) {
    value = 'function'; //这行去掉var
  }
  alert(value);
}
show()//1.如果上列中show内部定义value未用var,则会用到外部的变量，弹出"hello", "hello"。 
//2.如果函数内部未定义value,也能获取到外部的value值。
```

- 匿名函数不会提升
```
getName()
var getName = function () {
  alert('closule')
}
function getName() {
  alert('function')
}
getName()
 
//上边的代码相当于
function getName() { //函数向上提升
  alert('function')
}
getName()
var getName = function () {
  alert('closule')
}
getName()
 
//代码执行分别弹出 "function", "closule"
```

- 不同<script>块中的函数互不影响
```
<script>
  getName()
  var getName = function () {
    alert('closule')
  }
<script>
<script>
  function getName() {
    alert('function')
  }
<script>
 
//代码执行报错：TypeError: getName is not a function
//因为第一个<script>块中getName()函数未定义,匿名函数又不会向上提升
```
### 作为值的函数
- 函数本身是变量，可以作为一个值来使用
- 可以作为参数传递给里一个函数
```
function name(val) {
	return val;
}
function res(fn) {
	return fn(1)+2;
}

console.log(res(name));//3
```
- 也可以作为里一个函数的返回值使用
```
function res1(){
	var aa=1;
	return function (num1){
		return num1+aa;
	}
}

console.log(res1()(1));
```
### 函数内部属性
- arguments，保存函数从的参数,第三章介绍过
- arguments.callee，一个指针，指向拥有这个arguments对象的函数
定义阶乘函数
```
function factorial(){
	if(num<=1){
		return 1;
	}else{
		return num*factorial(num-1);
	}
}
// 这样会阶乘函数与factorial耦合在一起，如果使用arguments.callee，就会完成解耦
function factorial(){
	if(num<=1){
		return 1;
	}else{
		return num*arguments.callee(num-1);
	}
}
```
- this，引用的是函数执行的环境对象
- caller，保存着调用当前函数的函数的引用
```
function outer(){
	inner();
}

function inner(){
	console.log(inner.caller);//outer调用了inner,所以保存了outer的引用
}

outer();
```
### 函数属性和方法
- length，函数希望接收的命名参数的个数
```
function length(num,num1){}

console.log(length.length);//2
```
- prototype
```
function Person(){}
Person.prototype.say=function(){
	console.log("你好")
}

new Person().say();//你好
```
- call(),特定作用域下调用函数，接收多个参数，第一个是函数的作用域，后面是多个参数
```
function call1(num1){
	console.log(num1+this.aa);//3
}

var obj={
	aa:2
}

console.log(call1.call(obj,1));
```
- apply()，特定作用域下调用函数，接收两个参数，一个运行函数的作用域，另一个参数数组
```
function call1(num1){
	console.log(num1+this.aa);//3
}

var obj={
	aa:2
}

console.log(call1.apply(obj,[1]));
```
- bind()
```
function call1(num1){
	console.log(this.aa);
	console.log(num1+this.aa);//3
}

var obj={
	aa:2
}
var tem=call1.bind(obj);

tem(1);
```
### 基本包装类型
>场景

当我们读取一个基本类型值的时候，后台就会创建一个对应的基本包装类型的对象，从而让我们能够调用一些方法来操作这些数据。

**示例**
```
var s1=“some text”;
var s2=s1.substring(2);
```
**处理流程**

- 创建String类型的一个实例
- 在实力上调用指定的方法
- 销毁这个实例
```
var s1=new String("some text");
var s2=s1.sunstring(2);
s1=null;
```
Boolean,Number流程也是类似

#### Boolean类型
```
var falseObject=new Boolean(false);
var result = falseObject&&true;
console.log(result);

var falseValue=false;
result=falseValue&&true;
console.log(result);
```
如果转换成falseObject类型，与基本类型做运算falseObject&&true，是true，我们本意是false&&true得到是false，所以封装对象后的 Boolean类型会造成误导，尽量不要使用
#### Number类型
##### toFixed
按照指定的小数位返回数值的字符串表示，四舍五入规则
```
var num=10;
console.log(num.toFixed(2));//10.00
```
##### toExponential
返回以指数表示法表示的数值的字符串形式
```
var num=10;
console.log(num.toExponential(1));//1.0e+1
```
##### toPrecision
可能返回固定大小格式，也可能返回指数格式，具体规则是看哪种格式最合适。
```
var num=99;
console.log(num.toPrecision(1));//1e+2
console.log(num.toPrecision(2));//99
console.log(num.toPrecision(3));//99.0
```
#### String类型
##### 字符方法
- charAt，返回指定位置的单字符
- charCodeA，返回指定位置单字符的字符编码
- 花括号取值法，返回指定的单字符
```
var str="12345";

console.log(str.charAt(0));//1
console.log(str.charCodeAt(0));//49(1的字符编码)
console.log(str[0]);//1
```
##### 字符串操作方法
- concat，用于将一或多个字符串拼接起来，返回拼接得到的新字符串。
- slice，第一个参数指定子字符串的开始位置，第二个参数表示到哪里结束
- substr，指定两个参数，第一个是开始位置，第二个是返回的个数
- substring，第一个参数指定子字符串的开始位置，第二个参数表示到哪里结束
```
var str="1234567890";

console.log(str.concat("678"));//1234567890678
console.log(str.slice(3));//4567890
console.log(str.substr(3));//4567890
console.log(str.substring(3));//4567890

console.log(str.slice(3,7));//4567
console.log(str.substr(3,7));//4567890
console.log(str.substring(3,7));//4567
```
##### 字符串位置方法
- indexOf，接收两个参数，第一个字符是需要搜索的字符串，然后返回字符串的位置，没有会返回-1，第二个参数，表示从字符串中的哪个位置开始搜索
- lastIndexOf，接收两个参数，第一个字符是需要搜索的字符串，然后返回字符串的位置，没有会返回-1，第二个参数，表示从字符串中的哪个位置开始搜索
```
var str="1234567890";

console.log(str.indexOf("6"));//在下标为5的位置
console.log(str.lastIndexOf("6"));//在下标为5的位置
```
##### trim方法
创建一个字符串的副本，删除前置及后缀的所有空格
```
var str="  1234567890  ";

console.log(str.trim());//1234567890
```
##### 字符串大小写转换方法
- toLocaleUpperCase,转大写
- toLowerCase，转小写
大小写转换
```
var str="aaabbbccc";

console.log(str.toLocaleUpperCase());//AAABBBCCC

var str="AAABBBCCC";

console.log(str.toLowerCase());//aaabbbccc
```
##### 字符串的模式匹配方法
- match，本质上与Regxp的exec()方法相同
```
var text ="cat, bat, sat, fat";
var pattern=/.at/;

var matches=text.match(pattern);
console.log(matches.index);//0
console.log(matches[0]);//cat
console.log(pattern.lastIndex);//0
```
- search，返回字符串中第一个匹配项的索引
```
var text ="cat, bat, sat, fat";
var pos=text.search(/at/);
console.log(pos);//1
```
- replace，接收两个参数:第一个参数可以是RegExp对象或者一个字符串(这个字符串不会转换成正则表达式)，如果第一个参数是字符串，那么只会替换第一个子字符串，要想替换所有子字符串，唯一的办法就是提供一个正则表达式，而且要指定全局(g)
```
var text ="cat, bat, sat, fat";
var result= text.replace("at","ond");
console.log(result);//cond, bat, sat, fat

var result= text.replace(/at/g,"ond");
console.log(result);//cond, bond, sond, fond
```
使用特殊字符序列
```
var text ="cat, bat, sat, fat";
var result= text.replace(/(.at)/g,"ond,($1)");
console.log(result);//ond,(cat), ond,(bat), ond,(sat), ond,(fat)
```
第二个参数也可以是一个函数
```
function htmlEscape(text){
    return text.replace(/[<>"&]/g,function(match,pos,originalText){
        switch(match){
            case "<":
                return "&lt;";
            case ">":
                return "&gt;";
            case "&":
                return "&amp;";
            case "\"":
                return "&quot;";
        }
    })
}

console.log(htmlEscape("<p class=\"greeting\">Hello world!</p>"));//&lt;p class=&quot;greeting&quot;&gt;Hello world!&lt;/p&gt;
```
- split,可以基于指定的分隔符将一个字符串分割成多个字符串，并将结果放在一个数组中，第二个参数用于指定数组大小
```
var colorText="red,bule,green,yellow";
var colors1=colorText.split(",");
console.log(colors1);//[ 'red', 'bule', 'green', 'yellow' ]
var colors2=colorText.split(",",2);
console.log(colors2);//[ 'red', 'bule' ]
```
##### localeCompare
- 如果字符串在字母表中应该排在字符串参数之前，则返回一个负数
- 如果字符串等于字符串参数，则返回0；
- 如果字符串在字母表中应该排在字符串参数之后，则返回一个正数
```
var str="yellow";
console.log(str.localeCompare("brick"));//1
console.log(str.localeCompare("yellow"));//0
console.log(str.localeCompare("zoo"));//-1
```

##### fromCharCode方法
接收一或多个字符编码，然后转换一个字符串
```
console.log(String.fromCharCode(104,101,108,108,111));//hello
```

##### HTML方法
| 方法 |  输出结果|
|--|--|
| anchor("name") | <a name="name"\>hello,world</a\> |
| big() | <big\>hello,world</big\> |
| bold() | <b\>hello,world</b\> |
| fixed() | <tt\>hello,world</tt\> |
| fontcolor(color) | \<font color=“color”\>hello,world</font\> |
| fontsize(size) | \<font size=“size”\>hello,world</font\> |
| italics() | <i\>hello,world</i\> |
| link() | \<a href="url">hello,world</a\> |
| small() | \<small>hello,world</small\> |
| strike() | \<strike>hello,world</strike\> |
| sub() | \<sub>hello,world</sub\> |
| sup() | \<sup>hello,world</sup\> |
### 单体内置对象
#### Global对象
##### URI编码方法
- encodeURI，对URI进行编码，不会对特殊字符编码，会对空格编码，decodeURI为解码
- encodeURIComponent，会对特殊字符编码，包括空格，decodeURIComponent为解码
```
var uri="http://www.wrox.com/illegal value.htm#start";

console.log(encodeURI(uri))//http://www.wrox.com/illegal%20value.htm#start
console.log(decodeURI(uri))//http://www.wrox.com/illegal value.htm#start
console.log(encodeURIComponent(uri));//http%3A%2F%2Fwww.wrox.com%2Fillegal%20value.htm%23start
console.log(decodeURIComponent(uri));//http://www.wrox.com/illegal value.htm#start
```
##### eval方法
可以看成一个javascript解析器
```
var msg="hello,world";
eval("console.log(msg)")//hello,world
```

##### Global对象的属性
| 属性 |  说明|属性|说明|
|--|--|--|--|
|undefined | 特殊值undefined |Date|构造函数Date|
|NaN | 特殊值NaN |RegExp|构造函数RegExp|
|infinity | 特殊值infinity |Error|构造函数Error|
|Object | 构造函数Object |EvalError|构造函数EvalError|
|Array | 构造函数Array |RangeError|构造函数RangeError|
|Function | 构造函数Function |ReferenceError|构造函数ReferenceError|
|Boolean | 构造函数Boolean |SyntaxError|构造函数SyntaxError|
|String| 构造函数String |TypeError|构造函数TypeError|
|Number| 构造函数String |URIError|构造函数URIError|

##### window对象
第八章详细介绍
#### Math对象
##### 属性
| 属性 | 说明 |
|--|--|
|  Math.E|自然对数的底数,即常量e的值  |
|  Math.LN10|10的自然对数 |
|  Math.LN2|2的自然对数 |
|  Math.LOG2E|以2为底e的对数 |
|  Math.LOG10E|以10为底e的对数 |
|  Math.PI|π 的值|
|  Math.SQRT1_2|1/2的平方根|
|  Math.SQRT2|2的平方根|
##### min和max方法
```
var max=Math.max(3,54,32,16);
var min=Math.min(3,54,32,16);
console.log(max);//54
console.log(min);//3
```

##### 舍入方法
- Math.ceil，执行向上舍入
- Math.floor，执行向下舍入
- Math.round，执行四舍五入
```
console.log(Math.ceil(25.9));//26
console.log(Math.floor(25.9));//25
console.log(Math.round(25.9));//26
```
##### random方法
返回大于等于0小于1的随机数
```
console.log(Math.random());//0.3805432775071105
```
##### 其他方法
| 方法 | 说明 |方法|说明|
|--|--|--|--|
|  Math.abs| 返回num的绝对值 |Math.asin|返回x的反正弦值|
|  Math.exp| 返回Math.E的次幂 |Math.atan|返回x的反正切值|
|  Math.log| 返回指定的自然对数 |Math.atan2(y,x)|返回y/x的反正切值|
|  Math.pow(num,power)| 返回num的power次幂 |Math.cos(x)|返回x的余弦值|
|  Math.sqrt(num)| 返回num的平方根 |Math.sin(x)|返回x的正弦值|
|  Math.acos(num)| 返回x的反弦值 |Math.tan(x)|返回x的正切值|
