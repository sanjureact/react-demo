import { apiInstance } from "../../Api/Api";
import {
  POST_FAIL_DATA,
  POST_REQUEST_DATA,
  POST_SUCCESS_DATA,
} from "../../Constant/Constant";

export const postsActionData = () => {
  try {
    return async function (dispatch) {
      const data = await apiInstance.get("/posts");
      dispatch({
        type: POST_REQUEST_DATA,
        payload: data,
      });
      if (data.status === true) {
        dispatch({
          type: POST_SUCCESS_DATA,
          payload: data.data,
        });
      }
      if (data.status === true) {
        dispatch({
          type: POST_FAIL_DATA,
          payload: data.message,
        });
      }
    };
  } catch (error) {}
};
