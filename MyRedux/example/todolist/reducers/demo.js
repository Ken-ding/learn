const Demo = (state, action) => {
  state = {
    info: "丁学紧",
    online: true,
  };

  switch (action.type) {
    case "DEMO_VIEW":
      return state;
    case "SET_TNFO":
        return {
          ...state,
          info:action.info
        };
      default:
        return state;
  }
};

export default Demo;