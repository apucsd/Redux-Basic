const logger = (state) => (next) => (action) => {
  console.log("CurrentState=>", state.getState());
  console.log("Action=>", action);
  next(action);
  console.log("NextState=>", state.getState());
};
export default logger;
