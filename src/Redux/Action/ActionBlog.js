import axios from "axios";
import { apiInstance } from "../../Api/Api";
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

export const blogsActionData = () => {
  try {
    return async function (dispatch) {
      const data = await apiInstance.get("/posts");
      dispatch({
        type: BLOG_REQUEST_DATA,
        payload: data,
      });
      if (data.status === true) {
        dispatch({
          type: BLOG_SUCCESS_DATA,
          payload: data.data,
        });
      }
      if (data.status === true) {
        dispatch({
          type: BLOG_FAIL_DATA,
          payload: data.message,
        });
      }
    };
  } catch (error) {}
};

export const blogsAddData = (payload) => async (dispatch) => {
  try {
    const data = await apiInstance.post("/posts", payload);
    dispatch({
      type: BLOG_REQUEST_ADD,
    });
    if (data.status === true) {
      dispatch({
        type: BLOG_SUCCESS_ADD,
        payload: data.payload,
      });
    }
    if (data.status === true) {
      dispatch({
        type: BLOG_FAIL_ADD,
        payload: data.message,
      });
    }
  } catch (error) {}
};

export const blogDeleteData = (id) => async (dispatch) => {
  try {
    const data = await apiInstance.delete(`/posts/${id}`);
    console.log(data, "deleteaction");
    dispatch({
      type: BLOG_REQUEST_DELETE,
    });
    if (data.status === true) {
      dispatch({
        type: BLOG_SUCCESS_DELETE,
        payload: data,
      });
    }
    if (data.status === true) {
      dispatch({
        type: BLOG_FAIL_DELETE,
        payload: [],
      });
    }
  } catch (error) {}
};

export const singleUserBlogData = (id) => async (dispatch) => {
  try {
    const data = await apiInstance.get(`/posts/${id}`);

    dispatch({
      type: BLOG_SINGLE_USER_REQUEST,
    });
    if (data.status === true) {
      dispatch({
        type: BLOG_SINGLE_USER_SUCCESS,
        payload: data.data,
      });
    }
    if (data.status === true) {
      dispatch({
        type: BLOG_SINGLE_USER_FAIL,
        payload: data.message,
      });
    }
  } catch (error) {}
};

export const updateBlogData = (id, payload) => async (dispatch) => {
  try {
    const data = await apiInstance.put(`/posts/${id}`, payload);
    dispatch({
      type: BLOG_REQUEST_UPDATE,
    });
    if (data.status === true) {
      dispatch({
        type: BLOG_SUCCESS_UPDATE,
        payload: data.data,
      });
    }
    if (data.status === true) {
      dispatch({
        type: BLOG_FAIL_UPDATE,
        payload: [],
      });
    }
  } catch (error) {}
};

// demo redux
export const getUser = (user) => {
  return {
    type: "GET_USER",
    payload: user,
  };
};

export const getUserAction = (id) => {
  return (dispatch) => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        console.log(response, "res");
        dispatch(getUser(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const addUser = (user) => {
  return {
    type: "ADD_USER",
    payload: user,
  };
};

export const addUserAction = (user) => {
  return (dispatch) => {
    /// axios is a library used to make request to an API,
    /// return data and manipulate the data .
    axios
      .post("https://jsonplaceholder.typicode.com/posts", user)
      .then((response) => {
        console.log(response, '"res"');
        dispatch(addUser(response.data));
      })
      .catch((error) => {
        console.log("eror", error);
      });
  };
};

export const updateUser = () => {
  return {
    type: "UPDATE_USER",
  };
};

export const updateUserAction = (user, id) => {
  return (dispatch) => {
    axios
      .put(`https://jsonplaceholder.typicode.com/posts/${id}`, user)
      .then((response) => {
        console.log(response, "res");
        dispatch(updateUser());
        dispatch(getUsersAction());
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const getUsers = (users) => {
  return {
    type: ActionTypes.GET_USERS,
    payload: users,
  };
};

export const getUsersAction = () => {
  return (dispatch) => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response, "res");
        /// dispatch function dispatches an action which triggers state changes in the store
        dispatch(getUsers(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const deleteUser = () => {
  return {
    type: ActionTypes.DELETE_USER,
  };
};

export const deleteUserAction = (id) => {
  return (dispatch) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        console.log(response, "res");
        dispatch(deleteUser());
        dispatch(getUsersAction());
      })
      .catch((error) => {
        console.log(error, "err");
      });
  };
};
