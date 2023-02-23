import {
  ActionTypes,
  BLOG_FAIL_ADD,
  BLOG_FAIL_DATA,
  BLOG_FAIL_DELETE,
  BLOG_FAIL_UPDATE,
  BLOG_REQUEST_ADD,
  BLOG_REQUEST_DATA,
  BLOG_REQUEST_DELETE,
  BLOG_REQUEST_UPDATE,
  BLOG_SINGLE_USER_FAIL,
  BLOG_SINGLE_USER_REQUEST,
  BLOG_SINGLE_USER_SUCCESS,
  BLOG_SUCCESS_ADD,
  BLOG_SUCCESS_DATA,
  BLOG_SUCCESS_DELETE,
  BLOG_SUCCESS_UPDATE,
} from "../../Constant/Constant";

const initailState = {
  data: [],
  status: false,
  loading: false,
  error: null,
  users: {},
};

export const BlogReducerData = (state = initailState, action) => {
  if (action.type === BLOG_REQUEST_DATA) {
    return {
      ...state,

      loading: true,
      data: action.payload,
    };
  }
  if (action.type === BLOG_SUCCESS_DATA) {
    return {
      ...state,
      status: true,
      loading: false,
      data: action.payload,
    };
  }
  if (action.type === BLOG_FAIL_DATA) {
    return {
      ...state,
      status: false,
      loading: false,
    };
  }
  return state;
};

export const addBlogReducer = (state = initailState, action) => {
  if (action.type === BLOG_REQUEST_ADD) {
    return {
      ...state,

      loading: true,
    };
  }
  if (action.type === BLOG_SUCCESS_ADD) {
    return {
      ...state,
      status: true,
      loading: false,
      data: action.payload,
    };
  }
  if (action.type === BLOG_FAIL_ADD) {
    return {
      ...state,
      status: false,
      loading: false,
    };
  }
  return state;
};

export const deleteBlogReducer = (state = initailState, action) => {
  if (action.type === BLOG_REQUEST_DELETE) {
    return {
      ...state,
      loading: true,
      // data: action.payload,
      // data: data.filter((el) => el.id != action.payload),
    };
  }
  if (action.type === BLOG_SUCCESS_DELETE) {
    return {
      ...state,
      status: true,
      loading: false,
      data: action.payload,
    };
  }
  if (action.type === BLOG_FAIL_DELETE) {
    return {
      ...state,
      status: false,
      loading: false,
    };
  }
  return state;
};

export const singleUserBlogReducer = (state = initailState, action) => {
  if (action.type === BLOG_SINGLE_USER_REQUEST) {
    return {
      ...state,
      loading: true,
    };
  }
  if (action.type === BLOG_SINGLE_USER_SUCCESS) {
    return {
      ...state,
      status: true,
      loading: false,
      data: action.payload,
    };
  }
  if (action.type === BLOG_SINGLE_USER_FAIL) {
    return {
      ...state,
      status: false,
      loading: false,
    };
  }
  return state;
};

export const updateBlogReducer = (state = initailState, action) => {
  if (action.type === BLOG_REQUEST_UPDATE) {
    return {
      ...state,
      status: false,
      loading: true,
    };
  }
  if (action.type === BLOG_SUCCESS_UPDATE) {
    return {
      ...state,
      status: true,
      loading: false,
      data: action.payload,
    };
  }
  if (action.type === BLOG_FAIL_UPDATE) {
    return {
      ...state,
      status: false,
      loading: false,
    };
  }
  return state;
};

// demo redux

const initialState = {
  /// users is an empty list of a list of users
  users: [],
};

export const userReducers = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_USER:
      return {
        ///the three dots are ES6 syntax(spread operator), it allows you to create copy of an abject
        ///make a copy of `state`
        ...state,
        /// update the copy with the new value
        user: action.payload,
      };
    case ActionTypes.UPDATE_USER:
      return { ...state, id: action.payload };
    case ActionTypes.GET_USERS:
      //the three dots are ES6 syntax,creates a copy of an object
      return {
        ///make a copy of `state`
        ...state,
        /// update the copy with the new value
        users: action.payload,
        loading: false,
      };
    case ActionTypes.DELETE_USER:
      return { ...state };
    default:
      // otherwise return the existing state unchanged
      return state;
  }
};
