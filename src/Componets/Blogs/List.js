import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
  deleteUserAction,
  getUsersAction,
} from "../../Redux/Action/ActionBlog";
import Pagination from "../Pagination";

export const UsersList = () => {
  let dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const users = useSelector((state) => state.user);

  const [blogPosts, setBlogPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [search, setSearch] = useState("");
  //   const users = useSelector((state) => state.BlogsDataState);
  console.log(users?.users, "post----");

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  // const currentPosts = blogPosts?.slice(indexOfFirstPost, indexOfLastPost);
  const currentPost = users?.users?.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const deleteData = (id) => {
    if (window.confirm("Are you sure You want to delete?"));
    dispatch(deleteUserAction(id));
  };

  const previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage !== Math.ceil(blogPosts.length / postsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    dispatch(getUsersAction());
  }, []);

  return (
    <div className="container">
      Order
      <label htmlFor="search">
        Search by Title:
        <input
          id="search"
          type="text"
          onChange={handleSearch}
          value={search}
          style={{ marginRight: "25px" }}
        />
      </label>
      {/* <button className="btn btn-primary">  </button> */}
      <Link to="/orderlist/addorder" className="btn btn-primary">
        Add
      </Link>
      {users?.users ? (
        <div className="blog-content-section">
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Title </th>
                <th>Body </th>
              </tr>
            </thead>
            <tbody>
              {currentPost
                ?.filter((items) =>
                  items.title.toLowerCase().includes(search.toLowerCase())
                )
                ?.map((item, item_key) => {
                  return (
                    <tr key={item_key}>
                      <td style={{ width: "100px" }}>{item_key + 1} </td>
                      <td style={{ width: "330px" }}>{item.title} </td>
                      <td style={{ width: "330px", padding: "5px" }}>
                        {item.body}{" "}
                      </td>
                      <button
                        className="btn btn-danger"
                        onClick={() => deleteData(item.id)}
                      >
                        Delete{" "}
                      </button>
                      <button className="btn btn-success">
                        {" "}
                        <Link to={`/orderlist/edit/${item.id}`}>Edit</Link>
                      </button>
                    </tr>
                  );
                })}
            </tbody>
          </table>
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={users?.users.length}
            paginate={paginate}
            handlePrevPageClick={previousPage}
            handleNextPageClick={nextPage}
            // currentPages={currentPage}
          />
        </div>
      ) : (
        <div className="loading">Loading...</div>
      )}
    </div>
  );
};
