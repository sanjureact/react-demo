import React from "react";
import { Link } from "react-router-dom";
import img1 from "../assets/p7.jpg";
export default function Home() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg fixed-top navbar-scroll"
        style={{ backgroundColor: "rgb(221, 221, 220)", position: "sticky" }}
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
                <Link className="nav-link" to="#">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/yoga-classes"
                  // rel="nofollow"
                  // target="_blank"
                >
                  Yoga Classes
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/meditation">
                  Meditation
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/pranayama">
                  Pranayama
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/courses">
                  Courses
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/challanges">
                  Challanges
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/teachers">
                  Our Teachers
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/articles">
                  Articles
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/language">
                  Language
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/primium-trainings">
                  Primium Trainings
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/signup">
                  SignUp
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <section>
        <img src={img1} alt="pic" style={{ height: "155px", width: "155px" }} />
        <div className="row">
          <div className="col">fdf</div>
          {/* <div className="col-6"> */}

          {/* </div> */}
        </div>
      </section>
      <section>
        <div className="row">
          <div className="col-3">fdf</div>
          <div className="col-3">fdf</div>
          <div className="col-3">fdf</div>
        </div>
      </section>
      <section>
        <div className="row">
          <div className="col-3">fdf</div>
          <div className="col-3">fdf</div>
          <div className="col-3">fdf</div>
        </div>
      </section>

      <footer className="text-center">
        <div
          className="text-center p-4"
          style={{ backgroundColor: "#d9d9d9", width: "1389px" }}
        >
          © 2021 Copyright:
          <a className="text-reset fw-bold">theme by bootstrap</a>
        </div>
      </footer>
    </>
  );
}
