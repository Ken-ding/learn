function applyMiddleware(...middlewares) {
  // 重写CreateStore
  return function rewriteCreateStoreFunc(oldCreateStore) {
    return function newCreateStore(reducer, initState) {
      /*生成store*/
      const store = oldCreateStore(reducer, initState);
      /*给每个 middleware 传下store*/
      const chain = middlewares.map((middleware) => middleware(store));
      let dispatch = store.dispatch;
      /* 实现 exception(time((logger(dispatch))))*/
      chain.reverse().map((middleware) => {
        dispatch = middleware(dispatch);
      });
      /*2. 重写 dispatch*/
      store.dispatch = dispatch;
      return store;
    };
  };
}

export default applyMiddleware;
