function factorial1(n){
    var count=1;
    for(var i=0;i<n;i++){
        count*=(i+1);
    }
    return count
}

// console.log(factorial1(1));



function factorial(n){
    if(n<=1)return 1;
    return factorial(n-1)*n;
}

console.log(factorial(5));