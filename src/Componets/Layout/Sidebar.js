import React from "react";
import { Link } from "react-router-dom";
export default function Sidebar() {
  console.log("sidebar");
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/post">Post</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
