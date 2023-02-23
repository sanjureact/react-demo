import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Pagination from "../Pagination";
import { blogDeleteData, blogsActionData } from "../../Redux/Action/ActionBlog";
import { Link, useParams } from "react-router-dom";
export default function Bloglist() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [search, setSearch] = useState("");
  const blogs_item = useSelector((state) => state.BlogsDataState);
  console.log(blogs_item?.data?.data, "post----");

  const delete_item = useSelector((state) => state.BlogDeleteState);
  console.log(delete_item, "delete_item");
  const dispatch = useDispatch();
  const id = useParams();

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  // const currentPosts = blogPosts?.slice(indexOfFirstPost, indexOfLastPost);
  const currentPost = blogs_item?.data?.data?.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (delete_item) {
    console.log("deleted");
  }
  const deleteData = () => {
    dispatch(blogDeleteData(id));
    console.log(id, "id---");
  };

  useEffect(() => {
    dispatch(blogsActionData());
    deleteData();
  }, []);

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

  return (
    <div>
      Blog
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
      <Link to="/bloglist/addblog" className="btn btn-primary">
        Add
      </Link>
      {blogs_item?.data?.data ? (
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
                      <td style={{ width: "100px" }}>{item.id + 1} </td>
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
                        <Link to={`/bloglist/edit/${item.id}`}>Edit</Link>
                      </button>
                    </tr>
                  );
                })}
            </tbody>
          </table>
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={blogs_item?.data?.data.length}
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
}
