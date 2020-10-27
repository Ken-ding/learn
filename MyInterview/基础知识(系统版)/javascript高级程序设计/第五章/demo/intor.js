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

var arr=[{id:2,name:"tom"},{id:2,name:"bob"},{id:3,name:"cindy"},{id:4,name:"kid"}];
let res3=arr.filter((item)=>{
    return item.id==2;
})
console.log(res3);//ture

var arr=[1,2,3,6,8,9];
arr.forEach((item,index,array)=>{
    console.log(item);
})
//1
//2
//3
//6
//8
//9
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

var arr=[1,2,3,6,8,9];
var newArr1=arr.some((item,index,array)=>{
    return item>8
})
console.log(newArr1);

var arr=[1,2,3,6,8,9];
var res4=arr.reduce((pre,cur,index,array)=>{
    return pre+cur;
})
console.log(res4);//29