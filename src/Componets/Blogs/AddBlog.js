import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { blogsActionData, blogsAddData } from "../../Redux/Action/ActionBlog";

export default function Addblog() {
  const [user, setUser] = useState({
    // id: 101,
    title: "",
    body: "",
    userId: 1,
  });
  const { title, body } = user;
  const { data } = useSelector((state) => state.BlodAddState);
  console.log(data, "--data");
  const handlInput = (e) => {
    const { value, name } = e.target;
    setUser({ ...user, [name]: value });
    console.log(value, "name");
  };
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const submitForm = (e) => {
    e.preventDefault();
    dispatch(blogsAddData(user));
    navigate("/bloglist");
  };

  return (
    <>
      <form onSubmit={submitForm}>
        <div className="form-outline mb-4">
          <input
            type="text"
            id="form1Example1"
            className="form-control"
            name="title"
            value={title}
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
            value={body}
            onChange={handlInput}
          />
          <label className="form-label" for="form1Example2">
            Body
          </label>
        </div>

        <button type="submit" className="btn btn-primary btn-block">
          submit{" "}
        </button>
      </form>
    </>
  );
}
