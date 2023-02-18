import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";
export default function Layout() {
  return (
    <>
      {/* <div >
        <Header />
        <Sidebar />
        <Outlet />
      </div>
      <div>
        <Footer />
      </div> */}
      <div className="parent">
        <div className="child">
          {" "}
          <Header />
        </div>
        <div className="main">
          <div className="">
            {" "}
            <Sidebar />
          </div>
          <div className="child content">
            <Outlet />
          </div>
        </div>
        <div className="child">
          {" "}
          <Footer />
        </div>
      </div>
    </>
  );
}
