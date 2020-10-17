export default function createStore(
  reducer,
  initState,
  rewriteCreateStoreFunc
) {
  if (typeof initState === "function") {
    rewriteCreateStoreFunc = initState;
    initState = undefined;
  }

  /*如果有 rewriteCreateStoreFunc，那就采用新的 createStore */
  if (rewriteCreateStoreFunc) {
    const newCreateStore = rewriteCreateStoreFunc(createStore);
    return newCreateStore(reducer, initState);
  }

  let state = initState;
  let listeners = [];

  function subscribe(listener) {
    listeners.push(listener);
  }

  function dispatch(action) {
    state = reducer(state, action);
    for (let i = 0; i < listeners.length; i++) {
      const listener = listeners[i];
      listener();
    }
  }

  function replaceReducer(nextReducer) {
    reducer = nextReducer;
    dispatch({ type: Symbol() });
  }

  function getState() {
    return state;
  }

  dispatch({ type: Symbol() });

  return {
    subscribe,
    dispatch,
    getState,
    replaceReducer
  };
}
