

class MyPromise{
    static PNEDING='pending';
    static RESOLVED='funfilled';
    static REJECTED='rejected';

    constructor(executor){
      this.status=MyPromise.PNEDING;
      this.value=null;
      this.resolveCallback=[];
      this.rejectCallback=[];
      try {
        executor(this._resolve.bind(this),this._reject.bind(this));
      } catch (error) {
        this._reject(error)
      }
    }
    static isFunction(val){
      return typeof val=="function";
    }
    _resolve(value){
      if(value instanceof MyPromise){
        return value.then(this.resolve.bind(this),this.reject.bind(this))
      }
      setTimeout(() => {
        if(this.status===MyPromise.PNEDING){
          this.status=MyPromise.RESOLVED;
          this.value=value;
          this.resolveCallback.forEach(cb=>this.value=cb(this.value))
        }
      }, 0);
    }
    _reject(value){
      setTimeout(() => {
      if(this.status===MyPromise.PNEDING){
           this.status=MyPromise.REJECTED
           this.value=value
             this.rejectCallback.forEach(cb=>cb(value))
         }
        }, 0);
      }
    // 添加静态resolve方法
    static resolve (value) {
      // 如果参数是MyPromise实例，直接返回这个实例
      if (value instanceof MyPromise) return value
      return new MyPromise(resolve => resolve(value))
    }
    // 添加静态reject方法
    static reject (value) {
      return new MyPromise((resolve ,reject) => reject(value))
    }
    //添加静态all方法
    static all(list){
      return new MyPromise((resolve, reject) => {
       let values=[];
       let count=0;
          for(let [i,p] of list.entries()){
            // 数组参数如果不是MyPromise实例，先调用MyPromise.resolve
            this.resolve(p).then((v)=>{
              values[i] = v;
              count++;
              // 所有状态都变成fulfilled时返回的MyPromise状态就变成fulfilled
              if(count===list.length)resolve(values)
            })
          }
      },err=>{
        // 有一个被rejected时返回的MyPromise状态就变成rejected
        reject(err);
      })
    }
    // 添加静态race方法
  static race (list) {
    return new MyPromise((resolve, reject) => {
      for (let p of list) {
        // 只要有一个实例率先改变状态，新的MyPromise的状态就跟着改变
        this.resolve(p).then(res => {
          resolve(res)
        }, err => {
          reject(err)
        })
      }
    })
  }
    // 添加静态any方法
    static any(list) {
      return new MyPromise((resolve, reject) => {
        if(list.length===0)resolve();
        let count=0;
        for (let p of list) {
          this.resolve(p).then((v)=>{
            resolve(v)
          },(v)=>{
            count++
            let e=new Error("全部错误");
            if(count===list.length)reject(e);
          })
        }
      },err=>{
        reject(err);
      })
    }
    then(onFulfilled,onRejected){
      switch (this.status) {
        case MyPromise.PNEDING:
          this.resolveCallback.push(onFulfilled);
          if(this.rejectCallback.length<1&&MyPromise.isFunction(onRejected)){
            this.rejectCallback.push(onRejected);
          }
          break
        case MyPromise.RESOLVED:
          onFulfilled(this.value)
          break
        case MyPromise.REJECTED:
          onRejected(this.value)
          break
      }
      return this;
    }
    // 添加catch方法
  catch (onRejected) {
    return this.then(undefined, onRejected)
  }
  finally (cb) {
    return this.then(
      value  => MyPromise.resolve(cb()).then(() => value),
      reason => MyPromise.resolve(cb()).then(() => { throw reason })
    );
  }
}


//运行示例

let p1=new MyPromise((resolve,reject)=>{
  setTimeout(()=>{
    reject("123");
  },1000)
})

let p2=new MyPromise((resolve,reject)=>{
  setTimeout(()=>{
    reject("456");
  },1000)
})

let p3=new MyPromise((resolve,reject)=>{
  setTimeout(()=>{
    reject("789");
  },500)
})

let p=MyPromise.any([p1,p2,p3]).then((v)=>{
  console.log(v)
},(v)=>{
  console.log(v)
});