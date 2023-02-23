import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  singleUserBlogData,
  updateBlogData,
  blogsActionData,
} from "../../Redux/Action/ActionBlog";

export default function UpdateBlogs() {
  const [user, setUser] = useState({
    // id: 1,
    title: "",
    body: "",
    userId: 1,
  });
  // BlogSigleuserState: signupReducer,
  // BlogUpdateState
  const { data } = useSelector((state) => state.BlogSigleuserState);

  console.log(data, "data---");
  const { title, body } = user;
  console.log(user, "user");
  const id = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handlInput = (e) => {
    const { value, name } = e.target;
    setUser({ ...user, [name]: value });
    console.log(value, "name");
  };

  useEffect(() => {
    dispatch(blogsActionData());
    dispatch(singleUserBlogData(id));
  }, []);

  // useEffect(() => {
  //   if (data) {
  //     setUser(...data);
  //   }
  // }, [data]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateBlogData(user, id));
    // navigate("/blogs");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-outline mb-4">
          <input
            type="text"
            id="form1Example1"
            className="form-control"
            name="title"
            value={title || ""}
            onChange={handlInput}
          />
          <label className="form-label" for="form1Example1">
            Title
          </label>
        </div>

        <div className="form-outline mb-4">
          <input
            type="text"
            id="form1Example2"
            className="form-control"
            name="body"
            value={body || ""}
            onChange={handlInput}
          />
          <label className="form-label" for="form1Example2">
            Body
          </label>
        </div>

        <button type="submit" className="btn btn-primary btn-block">
          Update{" "}
        </button>
      </form>
    </>
  );
}
