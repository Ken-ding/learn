function Foo(name,age) {
    var o=new Object();
    o.name=name;
    o.age=age;
    return o;
}

function NEW_OBJECT(Foo) {

arguments=Array.prototype.slice.call(arguments,1)

  var obj = {};
  obj.__proto__ = Foo.prototype;
  Foo.apply(obj, arguments);
  return obj;
}

var f=new NEW_OBJECT(Foo,"Bob",29);

console.log(f);