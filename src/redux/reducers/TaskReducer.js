const initialState = {
    id : null,
    description : "", 
    isDone : false
};

const TaskReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK" :
    return {
        ...state,
        id : action.payload.id,
        description : action.payload.description,
        isDone : action.payload.isDone
    }
    case "TOGGLE_TASK" :
        state.id = action.payload;
     break;


    default:
      return state;
  }
};
