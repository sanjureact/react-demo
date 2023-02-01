import React from "react";
import Post from "../Posts/Post";

export default function Header() {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg fixed-top navbar-scroll">
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
                  <a className="nav-link" aria-current="page" href="#intro">
                    Home
                  </a>
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
              </ul>
            </div>
          </div>
        </nav>

        <div id="intro" className="bg-image">
          <div className="mask text-white">
            <div className="container d-flex align-items-center text-center h-100">
              <div>
                <h1 className="mb-5">This is title</h1>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
