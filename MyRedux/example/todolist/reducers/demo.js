let demo={
  info:"瑜",
  online:true
}
const Demo = (state=demo, action) => {
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