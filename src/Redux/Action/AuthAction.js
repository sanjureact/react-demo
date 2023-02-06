import { instancseApi, POSTAPI } from "../../Api/Api";
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

export const loginAction = (payload) => async (dispatch) => {
  try {
    dispatch({
      type: SIGNIN_REQUEST,
    });
    let data = await instancseApi.post("/login", payload).then((res) => {
      const data = res.data;
      const token = data.token;
      localStorage.setItem("user", JSON.stringify(token));
    });
    console.log(data.data, "data");

    if (data && data?.status === true) {
      // localStorage.setItem("user", JSON.stringify(data.token));
      // console.log(data?.data, "data");
      dispatch({
        type: SIGNIN_SUCCESS,
        data: data?.data,
      });
    } else {
      data?.status === true;
      dispatch({
        type: SIGNIN_FAIL,
        data: [],
      });
    }
  } catch (error) {}
};

export const signUpAction = (payload) => async (dispatch) => {
  try {
    let data = await POSTAPI("/signup", payload);
    dispatch({
      type: SIGNUP_REQUEST,
    });
    if (data && data?.status === true) {
      dispatch({
        type: SIGNUP_SUCCESS,
        data: data.data,
      });
    } else data?.status === true;
    dispatch({
      type: SIGNUP_FAIL,
      data: [],
    });
  } catch (error) {}
};

export const forgotPassAction = (payload) => async (dispatch) => {
  try {
    let data = await POSTAPI("/forgot-pass", payload);
    dispatch({
      type: FORGOT_PASS_REQUEST,
    });
    if (data && data?.status === true) {
      dispatch({
        type: FORGOT_PASS_SUCCESS,
        data: data.data,
      });
    } else data?.status === true;
    dispatch({
      type: FORGOT_PASS_FAIL,
      data: [],
    });
  } catch (error) {}
};
