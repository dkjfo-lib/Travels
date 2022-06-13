const reducer = (state = [], action) => {
  switch (action.type) {
    case "POSTS_FETCH":
      return action.payload;
    case "CREATE":
      break;

    default:
      break;
  }
  return state;
};

export default reducer;
