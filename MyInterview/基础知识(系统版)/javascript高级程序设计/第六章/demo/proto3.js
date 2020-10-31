// function Person(name,age){
//     this.name=name;
//     this.age=age;
// }

// Person.prototype={
//     constructor:Person,
//     sayName:function(){
//         console.log(this.name);
//     }
// }

function Person(name,age){
    this.name=name;
    this.age=age;

    if(typeof this.sayName!="function"){
        Person.prototype.sayName=function(){
            console.log(this.name);
        }
    }
}

var p=new Person("Bob",29);
console.log(p);
// p.sayName();





