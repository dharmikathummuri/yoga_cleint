export default (state = {}, action) => {
  switch (action.type) {
    case "REGISTER_USER":
      return {
        result: action.payload
      };
    default:
      return state;
  }
};
