import React from "react";

function Pagination({ currentPage, totalPages, handlerPageChange }) {
  return (
    <div className="flex items-center justify-center gap-10 py-6 mt-20 text-white bg-darkmode-element-DarkBlue">
      <button onClick={() => handlerPageChange(currentPage - 1)}>
        Previous
      </button>
      <span>
        {currentPage} / {totalPages}
      </span>
      <button onClick={() => handlerPageChange(currentPage + 1)}>Next</button>
    </div>
  );
}

export default Pagination;
