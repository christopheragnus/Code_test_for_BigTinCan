const initialState = {};

export const CREATE_POST = "CREATE_POST";
export const LIST_POSTS = "LIST_POSTS";
export const ADD_COMMENT = "ADD_COMMENT";
export const FETCH_SUCCEEDED = "FETCH_SUCCEEDED";
export const POST_SUCCEEDED = "POST_SUCCEEDED";

export default function(state = initialState, action) {
  switch (action.type) {
    case CREATE_POST:
      return {
        ...state,
        loading: false
      };

    case FETCH_SUCCEEDED:
      return {
        ...state,
        loading: false,
        list: action.payload
      };

    case POST_SUCCEEDED:
      return {
        ...state,
        loading: false,
        output: action.res
      };

    case ADD_COMMENT:
      return {
        ...state
      };

    default:
      return state;
  }
}
