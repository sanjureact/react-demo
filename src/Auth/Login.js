import React, { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loginAction } from "../Redux/Action/AuthAction";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState(false);

  const navigate = useNavigate();
  const { state } = useLocation();
  const dispatch = useDispatch();
  const { login_status, login_loading } = useSelector(
    (state) => state.AuthLoginStateData
  );

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required()
      .email("Invalid email")
      .required("email required"),
    password: Yup.string().required("password required"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(validationSchema),
  });
  const onSubmit = (data) => {
    dispatch(loginAction(data));
    setTimeout(() => {
      navigate(state?.path || "/dashbord");
      // navigate(state?.path || "/");
    }, 500);
    console.log(data);
  };

  //=> without react-hook useform
  const submitForm = (e) => {
    e.preventDefault();
    setMessage(true);
    if (user.email && user.password) {
      dispatch(loginAction(user));
      setTimeout(() => {
        navigate(state?.path || "/");
      }, 500);
    }
  };

  const handOnchange = (e) => {
    const { value, name } = e.target;
    setUser({ ...user, [name]: value });
    console.log(value);
  };

  //=> without redux form
  // const handlSubmit = (e) => {
  //   e.preventDefault();
  //   setMessage(true);
  //   axios
  //     .post("https://reqres.in/api/login", user)
  //     .then((res) => {
  //       const data = res.data;
  //       const token = data.token;
  //       if (!token) {
  //         alert("Unable to login. Please try after some time.");
  //         return;
  //       }
  //       localStorage.setItem("user", JSON.stringify(token));

  //       setTimeout(() => {
  //         navigate("/");
  //       }, 500);
  //     })
  //     .catch((error) => {
  //       console.log(error, "err");
  //       alert("Oops! Some error occured.");
  //     });
  // };

  return (
    <>
      {login_loading ? "loading" : ""}

      <section className="vh-100" style={{ backgroundColor: "#508bfc" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                className="card shadow-2-strong"
                style={{ borderRadius: "1rem" }}
              >
                <form
                  className="card-body p-5 text-center"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <h3 className="mb-5">Sign in</h3>

                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="typeEmailX-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="typeEmailX-2"
                      className="form-control form-control-lg"
                      // name="email"
                      // value={user.email}
                      // onChange={handOnchange}
                      {...register("email")}
                    />

                    <p style={{ color: "red" }}>{errors?.email?.message} </p>

                    {/* {message && !user.email && (
                      <p style={{ color: "red" }}> email required</p>
                    )} */}
                  </div>

                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="typePasswordX-2">
                      Password
                    </label>
                    <input
                      type="password"
                      id="typePasswordX-2"
                      className="form-control form-control-lg"
                      // name="password"
                      // value={user.password}
                      // onChange={handOnchange}
                      {...register("password")}
                    />

                    <p style={{ color: "red" }}>
                      {" "}
                      {errors?.password?.message}{" "}
                    </p>
                  </div>

                  <div className="form-check d-flex justify-content-start mb-4">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="form1Example3"
                    />
                    <label className="form-check-label" htmlFor="form1Example3">
                      {" "}
                      Remember password{" "}
                    </label>
                  </div>

                  <button
                    className="btn btn-primary btn-lg btn-block"
                    type="submit"
                  >
                    Login
                  </button>

                  <hr className="my-4" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
