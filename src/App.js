import logo from "./logo.svg";
import "./App.css";
import Layout from "./Componets/Layout/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Post from "./Componets/Posts/Post";
import Home from "./Componets/Home";
import Blog from "./Componets/Blog";
import { PrivateRoute } from "./routing/PrivateRoute";
import Login from "./Auth/Login";

import ProtectedRoute from "./routing/proctedRoute";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Home />} />
            <Route path="/post" element={<Post />} />
            <Route path="/blogs" element={<Blog />} />
          </Route>

          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
