// https://jsonplaceholder.typicode.com/posts
import axios from "axios";

export const apiInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  headers: {
    "Content-Type": "application/json",
  },
});

const instannce = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "access-control-Allow-Method": "GET,POST,PUT,DELETE",
  },
});
export const apiData = async () => {
  try {
    await apiInstance({
      method: "get",
    }).then((res) => {
      // handle success
      res;
      console.log(res);
    });
  } catch (e) {
    // handle error
    console.error(e, "error");
  }
};
