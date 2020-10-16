export const setVisibilityFilter = (filter) => {
  return {
    type: "SET_VISIBILITY_FILTER",
    filter,
  };
};

let nextTodoId = 0;
export const addTodo = (text) => {
  return {
    type: "ADD_TODO",
    id: nextTodoId++,
    text,
  };
};

export const toggleTodo = (id) => {
  return {
    type: "TOGGLE_TODO",
    id,
  };
};

export const demoView=()=>{
  return{
    type: "DEMO_VIEW",
  }
}

export const setInfo=(info)=>{
  return{
    type: "SET_TNFO",
    info
  }
}
