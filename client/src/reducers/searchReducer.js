import { ADD_PROJECT } from "../actionTypes/actionTypes";

const initalState = {
  projects: [],
};

export default function searchReducer(state = initalState, action) {
  switch (action.type) {
    case ADD_PROJECT:
      return {
        ...state,
        projects: action.payload,
      };
    default:
      return state;
  }
}

// export default searchReducer;
