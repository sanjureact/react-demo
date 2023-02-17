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
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./Componets/Dashboard";
import Signup from "./Auth/Signup";
// toast.configure();

function App() {
  return (
    <div>
      {/* <Home /> */}
      <BrowserRouter>
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/post" element={<Post />} />
            <Route path="/blogs" element={<Blog />} />
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
