import axios from "axios";
import { Base_Url } from "../Config/Config";

const instancseApi = axios.create({
  baseURL: Base_Url,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origon": "*",
    "Access-Control-Allow-Header": "*",
    "Access-Control-Allow-Method": "POST,GET,DELETE,PUT",
    Authorization: "Bearer" + localStorage.getItem("user"),
    devive_type: "web",
  },
});

const instancseApiData = axios.create({
  baseURL: Base_Url,
  headers: {
    Accept: "application/json",
    "Content-Type": "multipart/form data",
    "Access-Control-Allow-Origon": "*",
    "Access-Control-Allow-Header": "*",
    "Access-Control-Allow-Method": "POST,GET,DELETE,PUT",
    Authorization: "Bearer" + localStorage.getItem("user"),
    devive_type: "web",
  },
});

export const POSTAPI = (URL, param, toastStatus) => {
  const promise = instancseApi.post(URL, param, {
    validateStatus: (status) => status >= 200 && status < 600,
  });
  const dataPromise = promise.then(
    res.then((res) => {
      if (res.status === 200 || res.status === 600) {
        console.log("success");
        if (res?.data?.status) {
          console.log("sucesss");
          return res?.data;
        } else {
          res?.data?.message;
          console.log("error");
          return res?.data;
        }
      } else if (res?.status === 400) {
        console.log("bad request");
        return res?.data;
      } else if (res?.status === 401) {
        console.log("unAuthorise error");
        return res?.data;
      } else if (res?.status === 500) {
        console.log("server error");
        return res?.data;
      }
    })
  );
  return dataPromise;
};

export const POSTAPIDATA = (URL, param, toastStatus) => {
  const promise = instancseApiData.post(URL, param, {
    validateStatus: (status) => status >= 200 && status < 600,
  });
  const dataPromise = promise.then((res) => {
    if (res.status === 200) {
      console.log("sucess");
      if (res?.data?.status) {
        toastStatus("sucesss");
        return res?.data?.data;
      } else {
        res?.data?.message;
        toastStatus("error");
      }
    } else if (res?.status === 400) {
      toastStatus("bad request");
      return res?.data;
    } else if (res?.status === 500) {
      toastStatus("internal server error");
      return res?.data;
    }
  });
  return dataPromise;
};

export const apiInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  headers: {
    "Content-Type": "application/json",
  },
});
