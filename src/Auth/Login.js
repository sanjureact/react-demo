import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState(false);
  const navigate = useNavigate();
  const handOnchange = (e) => {
    const { value, name } = e.target;
    setUser({ ...user, [name]: value });
    console.log(value);
  };
  const handlSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
    axios
      .post("https://reqres.in/api/login", user)
      .then((res) => {
        const data = res.data;
        const token = data.token;
        if (!token) {
          alert("Unable to login. Please try after some time.");
          return;
        }
        localStorage.clear();
        localStorage.setItem("user", JSON.stringify(token));

        setTimeout(() => {
          navigate("/");
        }, 500);
      })
      .catch((error) => {
        console.log(error, "err");
        alert("Oops! Some error occured.");
      });
  };
  return (
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
                onSubmit={handlSubmit}
              >
                <h3 className="mb-5">Sign in</h3>

                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="typeEmailX-2">
                    Username
                  </label>
                  <input
                    type="email"
                    id="typeEmailX-2"
                    className="form-control form-control-lg"
                    name="email"
                    value={user.email}
                    onChange={handOnchange}
                  />
                  {message && !user.email && (
                    <p style={{ color: "red" }}> email required</p>
                  )}
                </div>

                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="typePasswordX-2">
                    Password
                  </label>
                  <input
                    type="password"
                    id="typePasswordX-2"
                    className="form-control form-control-lg"
                    name="password"
                    value={user.password}
                    onChange={handOnchange}
                  />
                  {message && !user.password && (
                    <p style={{ color: "red" }}> enter password</p>
                  )}
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
  );
}
