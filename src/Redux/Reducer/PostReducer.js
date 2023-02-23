import {
  POST_FAIL_DATA,
  POST_REQUEST_DATA,
  POST_SUCCESS_DATA,
} from "../../Constant/Constant";

const initailState = {
  data: null,
  status: false,
  loading: false,
  error: null,
};

export const PostReducerData = (state = initailState, action) => {
  if (action.type === POST_REQUEST_DATA) {
    return {
      ...state,
      // status: true,
      loading: true,
      data: action.payload,
    };
  }
  if (action.type === POST_SUCCESS_DATA) {
    return {
      ...state,
      status: true,
      loading: false,
      data: action.payload,
    };
  }
  if (action.type === POST_FAIL_DATA) {
    return {
      ...state,
      status: false,
      loading: false,
    };
  }
  return state;
};
