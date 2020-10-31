function Person(){};

Person.prototype.age="Bob";

var p=new Person();

p.name="Bob";

console.log(p.hasOwnProperty("name"));//true
console.log(p.hasOwnProperty("age"));//false


//判断属性是否是原型属性
function hasPrototypeProperty(o,pro){
    return !Object.hasOwnProperty(pro)&&(pro in o)
}

console.log(hasPrototypeProperty(p,"name"));//false
console.log(hasPrototypeProperty(p,"age"));//true

for(var prop in p){
    console.log(prop)//name,age
}

console.log(Object.keys(p));//[ 'name' ]