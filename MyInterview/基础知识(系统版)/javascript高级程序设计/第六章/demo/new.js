//构造函数
function Foo(){
    this.msg="测试";
    this.demo=function(){
        console.log(123);
    }
};

Foo.prototype.test=function(){
    console.log(this.msg);
}

//仿写的new操作符
function New1(fn){
    var o={};
    o.__proto__=fn.prototype;
    fn.call(o);
    return o;
}

function New2(fn){
    var o=Object.create(fn.prototype);
    fn.call(o);
    return o;
}

//测试New1
var obj= New1(Foo);
var obj1= New1(Foo);
console.log(obj.demo===obj1.demo);
obj.test();//测试

//测试New2
var obj= New2(Foo);
obj.test();//测试

//构造函数
function Foo1(){
    this.msg="测试";
    this.demo=function(){
        console.log(123);
    }
};

var p1=new Foo1();
var p2=new Foo1();
console.log(p1.demo===p2.demo);//false

function Person(){};

Person.prototype.name="Tom";
Person.prototype.sayName=function(){
    console.log(this.name);
}

var p1=new Person();
var p2=new Person();

console.log(p1.sayName===p2.sayName);//true

p1.sayName();//Tom
p2.sayName();//Tom


console.log(Person.prototype.isPrototypeOf(p1));

console.log(Object.getPrototypeOf(p1)==Person.prototype);//true

new p1.constructor();
console.log(p1.constructor);





