import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [showToggle, setShowToggle] = useState(false);

  const handlToggle = () => {
    setShowToggle(!showToggle);
  };
  console.log("sidebar");
  return (
    <div>
      <div className="container-fluid" style={{ backgroundColor: "#212529" }}>
        <div className="row flex-nowrap">
          <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
              <Link
                to="/"
                className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
              >
                <span className="fs-5 d-none d-sm-inline">Home</span>
              </Link>
              <ul
                className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
                id="menu"
              >
                <li>
                  <Link
                    to="/dashbord"
                    data-bs-toggle="collapse"
                    className="nav-link px-0 align-middle"
                  >
                    <i className="fs-4 bi-speedometer2"></i>{" "}
                    <span className="ms-1 d-none d-sm-inline">Dashboard</span>{" "}
                  </Link>
                  <ul
                    className="collapse show nav flex-column ms-1"
                    id="submenu1"
                    data-bs-parent="#menu"
                  >
                    <li className="w-100">
                      <Link to="/post" className="nav-link px-0">
                        {" "}
                        <span className="d-none d-sm-inline">Post</span>{" "}
                      </Link>
                    </li>
                    <li>
                      <Link to="/bloglist" className="nav-link px-0">
                        {" "}
                        Blogs{" "}
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="orderlist" className="nav-link px-0 align-middle">
                    <i className="fs-4 bi-table"></i>{" "}
                    <span className="ms-1 d-none d-sm-inline">Orders</span>
                  </Link>
                </li>
                <li>
                  <li>
                    <Link
                      to="#"
                      data-bs-toggle="collapse"
                      className="nav-link px-0 align-middle"
                      onClick={handlToggle}
                    >
                      <i className="fs-4 bi-grid"></i>{" "}
                      <span className="ms-1 d-none d-sm-inline">Products</span>{" "}
                    </Link>
                    <ul
                      className={`dropdown-menu ${showToggle ? "show" : ""}`}
                      aria-labelledby="dropdownMenuButton"
                      id="submenu3"
                      data-bs-parent="#menu"
                    >
                      <li className="w-100">
                        <Link to="#" className="nav-link px-0">
                          {" "}
                          <span className="d-none d-sm-inline">Product</span> 1
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="nav-link px-0">
                          {" "}
                          <span className="d-none d-sm-inline">Product</span> 2
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="nav-link px-0">
                          {" "}
                          <span className="d-none d-sm-inline">Product</span> 3
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="nav-link px-0">
                          {" "}
                          <span className="d-none d-sm-inline">Product</span> 4
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <Link to="#" className="nav-link px-0 align-middle">
                      <i className="fs-4 bi-people"></i>{" "}
                      <span className="ms-1 d-none d-sm-inline">Cart </span>{" "}
                    </Link>
                  </li>
                  <Link to="#" className="nav-link px-0 align-middle">
                    <i className="fs-4 bi-table"></i>{" "}
                    <span className="ms-1 d-none d-sm-inline"> Setting </span>
                  </Link>
                </li>
                <li>
                  <Link to="#" className="nav-link px-0 align-middle">
                    <i className="fs-4 bi-table"></i>{" "}
                    <span className="ms-1 d-none d-sm-inline">Report</span>
                  </Link>
                </li>
              </ul>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
