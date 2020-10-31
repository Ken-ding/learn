function createPerson(name,age,job){
    var o=new Object();
    o.name=name;
    o.age=age;
    o.job=job;
    o.sayName=function (params) {
        console.log(this.name);
    };
    return o;
}

var person1=createPerson("Nicholas",29,"Software,Engineer");
var person2=createPerson("Nicholas",29,"Doctor");
console.log(person1);
console.log(person2);

function Person(name,age,job){
    this.name=name;
    this.age=age;
    this.job=job;
    this.sayName=function(){
        console.log(this.name);
    }
}

var person3=createPerson("Nicholas",29,"Software,Engineer");
var person4=createPerson("Nicholas",29,"Doctor");
console.log(person3);
console.log(person4);

function New(Foo){
    
    var obj={};
}

