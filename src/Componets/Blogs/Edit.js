import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getUser, updateUserAction } from "../../Redux/Action/ActionBlog";

export default function Editorder() {
  const [user, setUser] = useState({
    // id: 1,
    title: "",
    body: "",
    userId: 1,
  });

  const { users } = useSelector((state) => state.user);

  console.log(users, "users---");
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
    dispatch(getUser(id));
  }, []);
  useEffect(() => {
    if (users) {
      setUser(...users);
    }
  }, [users]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUserAction(user, id));
    navigate("/orderlist");
  };

  return (
    <div>
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
    </div>
  );
}
