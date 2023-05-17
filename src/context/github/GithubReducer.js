const githubReducer = (state, action) => {
  switch (action.type) {
    case "GET_USERS": {
      if (action.payload === undefined) {
        return {
          ...state,
          loading: false,
        };
      }

      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    }
    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "CLEAR_USERS": {
      console.log("CLEAR_USERS called");
      return {
        ...state,
        users: [],
      };
    }
    default:
      return state;
  }
};

export default githubReducer;
