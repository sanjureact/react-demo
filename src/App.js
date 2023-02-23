import logo from "./logo.svg";
import "./App.css";
import Layout from "./Componets/Layout/Layout";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Post from "./Componets/Posts/Post";
import Home from "./Componets/Home";
import { PrivateRoute } from "./routing/PrivateRoute";
import Login from "./Auth/Login";
import ProtectedRoute from "./routing/proctedRoute";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./Componets/Dashboard";
import Signup from "./Auth/Signup";
import Addblog from "./Componets/Blogs/AddBlog";
import UpdateBlogs from "./Componets/Blogs/UpdateBlogs";
import Bloglist from "./Componets/Blogs/Bloglist";
import { UsersList } from "./Componets/Blogs/List";
import Addorder from "./Componets/Blogs/Add";
import Editorder from "./Componets/Blogs/Edit";
// toast.configure();

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/post" element={<Post />} />
            <Route path="/bloglist" element={<Bloglist />} />
            <Route path="/bloglist/addblog" element={<Addblog />} />
            <Route path="/bloglist/edit/:id" element={<UpdateBlogs />} />
            <Route path="/orderlist" element={<UsersList />} />
            <Route path="/orderlist/addorder" element={<Addorder />} />
            <Route path="/orderlist/edit/:id" element={<Editorder />} />
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* <Route path="/home" element={<Home />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
