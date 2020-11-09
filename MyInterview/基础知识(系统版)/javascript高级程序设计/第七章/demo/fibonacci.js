// function fibonacci(n){
//     //如果第一项或第二项,则直接返回1
//     if(n===1||n===2)return 1;
//     //否则,返回前两项的和
//     return fibonacci(n-1) + fibonacci(n-2)
// }

// console.log(fibonacci(5));

// fibonacci(5)= fibonacci(4)+fibonacci(3)

// fibonacci(4)=fibonacci(3)+fibonacci(2)

// fibonacci(3)=fibonacci(2)+fibonacci(1)

// fibonacci(2)=1;

// fibonacci(1)=1;


var fibonacci=(function(){
    var cache={};
    return function(n){
        if(cache[n])return cache[n];
        if (n === 1 || n === 2) return 1;
        return cache[n] = fibonacci(n - 1) + fibonacci(n - 2);
    }
})();
console.log(fibonacci(5));