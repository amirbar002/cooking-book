
const initialState = {
    data: [],
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SAVE_DATA":
        return {
          ...state,
          data: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  