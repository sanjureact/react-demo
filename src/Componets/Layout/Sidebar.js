import React from "react";
import { Link } from "react-router-dom";
export default function Sidebar() {
  console.log("sidebar");
  return (
    <div>
      <div class="container-fluid">
        <div class="row flex-nowrap">
          <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
            <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
              <Link
                to="/"
                class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
              >
                <span class="fs-5 d-none d-sm-inline">Menu</span>
              </Link>
              <ul
                class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
                id="menu"
              >
                <li>
                  <Link
                    to="/"
                    data-bs-toggle="collapse"
                    class="nav-link px-0 align-middle"
                  >
                    <i class="fs-4 bi-speedometer2"></i>{" "}
                    <span class="ms-1 d-none d-sm-inline">Dashboard</span>{" "}
                  </Link>
                  <ul
                    class="collapse show nav flex-column ms-1"
                    id="submenu1"
                    data-bs-parent="#menu"
                  >
                    <li class="w-100">
                      <Link to="/post" class="nav-link px-0">
                        {" "}
                        <span class="d-none d-sm-inline">Post</span>{" "}
                      </Link>
                    </li>
                    <li>
                      <Link to="/blogs" class="nav-link px-0">
                        {" "}
                        Blogs{" "}
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="#" class="nav-link px-0 align-middle">
                    <i class="fs-4 bi-table"></i>{" "}
                    <span class="ms-1 d-none d-sm-inline">Orders</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="#submenu2"
                    data-bs-toggle="collapse"
                    class="nav-link px-0 align-middle "
                  >
                    <i class="fs-4 bi-bootstrap"></i>{" "}
                    <span class="ms-1 d-none d-sm-inline">Bootstrap</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="#submenu3"
                    data-bs-toggle="collapse"
                    class="nav-link px-0 align-middle"
                  >
                    <i class="fs-4 bi-grid"></i>{" "}
                    <span class="ms-1 d-none d-sm-inline">Products</span>{" "}
                  </Link>
                  <ul
                    class="collapse nav flex-column ms-1"
                    id="submenu3"
                    data-bs-parent="#menu"
                  >
                    <li class="w-100">
                      <Link to="#" class="nav-link px-0">
                        {" "}
                        <span class="d-none d-sm-inline">Product</span> 1
                      </Link>
                    </li>
                    <li>
                      <Link to="#" class="nav-link px-0">
                        {" "}
                        <span class="d-none d-sm-inline">Product</span> 2
                      </Link>
                    </li>
                    <li>
                      <Link to="#" class="nav-link px-0">
                        {" "}
                        <span class="d-none d-sm-inline">Product</span> 3
                      </Link>
                    </li>
                    <li>
                      <Link to="#" class="nav-link px-0">
                        {" "}
                        <span class="d-none d-sm-inline">Product</span> 4
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="#" class="nav-link px-0 align-middle">
                    <i class="fs-4 bi-people"></i>{" "}
                    <span class="ms-1 d-none d-sm-inline">Customers</span>{" "}
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
