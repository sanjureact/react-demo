import React from "react";

const Pagination = ({
  postsPerPage,
  totalPosts,
  paginate,
  handleNextPageClick,
  handlePrevPageClick,
  currentPages,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <>
      <ul className="pagination">
        <li className="page-item">
          <button
            className="page-link"
            href="#"
            onClick={() => handlePrevPageClick()}
            disabled={currentPages === 1}
          >
            Previous
          </button>
        </li>

        {pageNumbers.map((number) => (
          <li
            className="page-item"
            key={number}
            onClick={() => paginate(number)}
          >
            <a className="page-link" href="#">
              {number}
            </a>
          </li>
        ))}
        <li className="page-item">
          <button
            className="page-link"
            href="#"
            onClick={() => handleNextPageClick()}
            disabled={currentPages === totalPosts}
          >
            Next
          </button>
        </li>
      </ul>
    </>
  );
};

export default Pagination;
