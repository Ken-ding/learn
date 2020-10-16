let state = {
  count: 1,
};

let listeners = [];

function subscribe(listener) {
  listeners.push(listener);
}

function changeCount(count) {
  state.count = count;
  /*当 count 改变的时候，我们要去通知所有的订阅者*/
  for (let i = 0; i < listeners.length; i++) {
    const listener = listeners[i];
    listener();
  }
}

/*来订阅一下，当 count 改变的时候，我要实时输出新的值*/
subscribe(() => {
  console.log(state.count);
});

/*我们来修改下 state，当然我们不能直接去改 state 了，我们要通过 changeCount 来修改*/
// changeCount(2);
// changeCount(3);
// changeCount(4);

//代码封装
const createStore1 = function (initState) {
  let state = initState;
  let listeners = [];

  function subscribe(listener) {
    listeners.push(listener);
  }
  function changeState(newState) {
    state = newState;
    for (let i = 0; i < listeners.length; i++) {
      const listener = listeners[i];
      listener();
    }
  }
  function getState() {
    return state;
  }
  return {
    subscribe,
    changeState,
    getState,
  };
};

let initState = {
  counter: {
    count: 0,
  },
  info: {
    name: "",
    description: "",
  },
};

let store = createStore1(initState);

store.subscribe(() => {
  let state = store.getState();
  //   console.log(state);
});

store.changeState({
  ...store.getState(),
  info: {
    name: "前端九部",
    description: "我们都是前端爱好者！",
  },
});

store.changeState({
  ...store.getState(),
  counter: {
    count: 1,
  },
});

//定时器
let initState1 = {
  count: 0,
};

let store1 = createStore1(initState1);

store1.subscribe(() => {
  let state = store1.getState();
  console.log(state.count);
});

/*自增*/
store1.changeState({
  count: store1.getState().count + 1,
});

/*自减*/
store1.changeState({
  count: store1.getState().count - 1,
});

/*我想随便改*/
store1.changeState({
  count: "abc",
});

function plan(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1,
      };
    case "DECREMENT":
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
}

//有计划的状态管理器
const createStore = function (plan, initState) {
  let state = initState;
  let listeners = [];

  function subscribe(listener) {
    listeners.push(listener);
  }
  function changeState(action) {
    state = plan(state, action);
    for (let i = 0; i < listeners.length; i++) {
      const listener = listeners[i];
      listener();
    }
  }
  function getState() {
    return state;
  }
  return {
    subscribe,
    changeState,
    getState,
  };
};

let initState2 = {
  count: 0,
};
/*把plan函数*/
let store2 = createStore(plan, initState2);

store2.subscribe(() => {
  let state = store2.getState();
  console.log(state.count);
});
/*自增*/
store2.changeState({
  type: "INCREMENT",
});
/*自减*/
store2.changeState({
  type: "DECREMENT",
});
/*我想随便改 计划外的修改是无效的！*/
store2.changeState({
  count: "abc",
});
