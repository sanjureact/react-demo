import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postsActionData } from "../../Redux/Action/ActionPost";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Pagination from "../Pagination";
export default function Post() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [search, setSearch] = useState("");
  const post_item = useSelector((state) => state.PostDataState);
  console.log(post_item?.data?.data, "post----");
  // console.log(blogPosts, "blogPosts");
  const dispatch = useDispatch();

  const getApidata = () => {
    dispatch(postsActionData());
  };

  const apiResponse = () => {
    axios("https://jsonplaceholder.typicode.com/posts").then((response) =>
      // console.log(response)
      setBlogPosts(response.data)
    );
  };
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  // const currentPosts = blogPosts?.slice(indexOfFirstPost, indexOfLastPost);
  const currentPost = post_item?.data?.data?.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  // console.log(currentPage, "currentPage");
  useEffect(() => {
    getApidata();
    // apiResponse();
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

  const fiterData = () => {
    if (search) {
      currentPost.filter((elm) => {
        return (
          elm.title.toLowerCase().includes(search.toLowerCase()) ||
          elm.body.toLowerCase().includes(search.toLowerCase())
        );
      });
      // setBlogPosts(filteredData);
    }
  };
  return (
    <div>
      Post
      <label htmlFor="search">
        Search by Title:
        <input id="search" type="text" onChange={handleSearch} value={search} />
      </label>
      {post_item?.data?.data ? (
        <div className="blog-content-section">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
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
                      <td>{item.id} </td>
                      <td>{item.title} </td>
                      <td>{item.body} </td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={post_item?.data?.data.length}
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
