// function sum(num1,num2){
// 	return num1+num2;
// }

// function sum(num1,num2){
// 	return num1;
// }

// console.log(sum(1,2));//1

// console.log(sum1(1,2));
// function sum1(num1,num2){
// 	return num1+num2;
// }

// console.log(sum1(1,2));
// var sum1=function (num1,num2){
// 	return num1+num2;
// }

function name(val) {
	return val;
}

function res(fn) {
	return fn(1)+2;
}

console.log(res(name));//3

function res1(){
	var aa=1;
	return function (num1){
		return num1+aa;
	}
}

console.log(res1()(1));


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

function outer(){
	inner();
}

function inner(){
	console.log(inner.caller);//outer调用了inner,所以保存了outer的引用
}

outer();

function length(num,num1){}

console.log(length.length);

function Person(){}
Person.prototype.say=function(){
	console.log("你好")
}

new Person().say();//你好


function call1(num1){
	console.log(this.aa);
	console.log(num1+this.aa);//3
}

var obj={
	aa:2
}
var tem=call1.bind(obj);

tem(1);