import React from "react";
import { Link } from "react-router-dom";
export default function Blog() {
  return (
    <div>
      Blog
      <li>
        <Link to="/login">Login</Link>
      </li>
    </div>
  );
}
