import logo from "./logo.svg";
import "./App.css";
import Layout from "./Componets/Layout/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Post from "./Componets/Posts/Post";
import Home from "./Componets/Home";
import Blog from "./Componets/Blog";
import { PrivateRoute } from "./routing/PrivateRoute";
import Login from "./Auth/Login";
import { Fragment } from "react";
function App() {
  return (
    <div>
      {/* <Layout /> */}
      <BrowserRouter>
        <Fragment>
          <Routes>
            <Route element={<PrivateRoute />}>
              <Route exact path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/blogs" element={<Blog />} />
              </Route>
            </Route>
            <Route exact path="/post" element={<Post />} />
            <Route exact path="/login" element={<Login />} />
          </Routes>
        </Fragment>
      </BrowserRouter>
    </div>
  );
}

export default App;
