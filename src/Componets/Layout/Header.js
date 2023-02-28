import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Post from "../Posts/Post";

export default function Header() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <>
      <header>
        <nav
          className="navbar navbar-expand-lg fixed-top navbar-scroll"
          style={{ backgroundColor: "#e3e2e0" }}
        >
          <div className="container-fluid">
            <button
              className="navbar-toggler ps-0"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#navbarExample01"
              aria-controls="navbarExample01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon d-flex justify-content-start align-items-center">
                <i className="fas fa-bars"></i>
              </span>
            </button>
            <div className="collapse navbar-collapse" id="navbarExample01">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item active">
                  <Link to="/dashbord" className="nav-link">
                    Dashboard
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/post" className="nav-link">
                    post
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/bloglist">
                    Blog
                  </Link>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://www.youtube.com/channel/UC5CF7mLQZhvx8O5GODZAhdA"
                    rel="nofollow"
                    target="_blank"
                  >
                    Learn redux
                  </a>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/profile">
                    Profile
                  </Link>
                </li>
                <li className="nav-item">
                  <button type="button" className="btn btn" onClick={logout}>
                    {" "}
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* <div id="intro" className="bg-image">
          <div className="mask text-white">
            <div className="container d-flex align-items-center text-center h-100">
              <div>
                <h1 className="mb-5">This is title</h1>
              </div>
            </div>
            <button onClick={logout}> logout</button>
          </div>
        </div> */}
      </header>
    </>
  );
}
