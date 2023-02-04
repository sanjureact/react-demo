import {
  FORGOT_PASS_FAIL,
  FORGOT_PASS_REQUEST,
  FORGOT_PASS_SUCCESS,
  SIGNIN_FAIL,
  SIGNIN_REQUEST,
  SIGNIN_SUCCESS,
  SIGNOUT_FAIL,
  SIGNOUT_SUCCESS,
  SIGNUP_FAIL,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
} from "../../Constant/AuthConstant";

const initialState = {
  login_loading: false,
  login_data: null,
  login_status: false,
  logout_status: false,
  errors: null,
  login_auth: false,
};

export const LoginAuthReducer = (state = initialState, action) => {
  try {
    switch (action.type) {
      case SIGNIN_REQUEST:
        return {
          login_loading: true,
        };
      case SIGNIN_SUCCESS:
        return {
          login_status: true,
          login_loading: false,
          login_auth: true,
          data: action?.data,
        };
      case SIGNIN_FAIL:
        return {
          login_loading: false,
          login_status: false,
          data: [],
        };
      case SIGNOUT_SUCCESS:
        return {
          login_loading: false,
          logout_status: true,
          data: [],
        };
      case SIGNOUT_FAIL:
        return {
          login_loading: false,
          logout_status: false,
          data: [],
          errors: data?.message,
        };
      default:
        return state;
    }
  } catch (error) {}
};

const initialStateDefault = {
  loading: false,
  data: null,
  status: false,
  errors: null,
};

export const signupReducer = (state = initialStateDefault, action) => {
  try {
    switch (action.type) {
      case SIGNUP_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case SIGNUP_SUCCESS:
        return {
          ...state,
          loading: false,
          status: true,
          data: action?.data,
        };
      case SIGNUP_FAIL:
        return {
          ...state,
          loading: false,
          data: [],
        };
    }
  } catch (error) {}
};

export const forgotPassReducer = (state = initialStateDefault, action) => {
  try {
    if (action.type === FORGOT_PASS_REQUEST) {
      return {
        ...state,
        loading: true,
      };
    }
    if (action.type === FORGOT_PASS_SUCCESS) {
      return {
        ...state,
        loading: false,
        status: true,
        data: [],
      };
    }
    if (action.type === FORGOT_PASS_FAIL) {
      return {
        ...state,
        loading: false,
        data: [],
      };
    }
    return state;
  } catch (error) {}
};
