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
import Profile from "./Componets/Profile/Profile";
import ChangePassword from "./Componets/Profile/ChangePassword";
import EditProfile from "./Componets/Profile/EditProfile";
// toast.configure();

function App() {
  const isAuthenticated = () => {
    const token = localStorage.getItem("user");
    // Check if the token exists and is not expired
    return !!token && !isTokenExpired(token);
  };

  const isTokenExpired = (token) => {
    const decodedToken = jwt.decode(token);
    return decodedToken.exp < Date.now() / 1000;
  };

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route path="/dashbord" element={<Dashboard />} />
            <Route path="/post" element={<Post />} />
            <Route path="/bloglist" element={<Bloglist />} />
            <Route path="/bloglist/addblog" element={<Addblog />} />
            <Route path="/bloglist/edit/:id" element={<UpdateBlogs />} />
            <Route path="/orderlist" element={<UsersList />} />
            <Route path="/orderlist/addorder" element={<Addorder />} />
            <Route path="/orderlist/edit/:id" element={<Editorder />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/change-password" element={<ChangePassword />} />
            <Route path="/edit-profile" element={<EditProfile />} />
          </Route>

          {/* <Route element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
            <Route path="/dashbord" element={<Dashboard />} />
            <Route path="/post" element={<Post />} />
            <Route path="/bloglist" element={<Bloglist />} />
            <Route path="/bloglist/addblog" element={<Addblog />} />
            <Route path="/bloglist/edit/:id" element={<UpdateBlogs />} />
            <Route path="/orderlist" element={<UsersList />} />
            <Route path="/orderlist/addorder" element={<Addorder />} />
            <Route path="/orderlist/edit/:id" element={<Editorder />} />
          </Route> */}

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
