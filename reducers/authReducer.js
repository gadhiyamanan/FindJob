export default (state = {}, action) => {
  switch (action.type) {
    case "LOGGED_IN":
      console.log("reducerssssssssssssssss", action);
      return {
        ...state,
        userId: action.userId,
        token: action.token,
        name: action.name,
        image: action.image,
      };

    default:
      return state;
  }
};
