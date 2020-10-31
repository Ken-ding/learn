var Person={};
Object.defineProperty(Person,"name",{
	writable:false,
	value:"tom"
})
console.log(Person.name);//tom
Person.name="bob";//因为设置了writable:false,所以修改不了
console.log(Person.name);//tom

var book={
	_year:2004,
}

Object.defineProperty(book,"year",{
	get:function () {
        return this._year;
    },
	set:function (newValue) {
        if(newValue!==this._year){
            this._year=newValue;
        }
    }
})

console.log(book.year);//2004
book.year=2005;
console.log(book.year);//2005

var book1={};

Object.defineProperties(book1,{
    _year:{
        writable:true,
        value:2004
    },
    year:{
        get:function () {
            return this._year;
        },
        set:function (newValue) {
            if(newValue!==this._year){
                this._year=newValue;
            }
        }
    },
    edit:{
        writable:true,
        value:1 
    }
})

console.log(book1.year);//2004
book1.year=2005;
console.log(book1.year);//2005
console.log(book1.edit);//1

var descriptor1=Object.getOwnPropertyDescriptor(book1,"_year");
var descriptor2=Object.getOwnPropertyDescriptor(book1,"year");
console.log(descriptor1);//{ value: 2005, writable: true, enumerable: false, configurable: false }
console.log(descriptor2);//{get: [Function: get],set: [Function: set],enumerable: false,configurable: false}