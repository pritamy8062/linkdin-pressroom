import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Pagination } from "react-bootstrap";
import News from "./News";
import NewsPage2 from "./NewsPage2";

const PaginationComponent = () => {
  const totalPages = 10; // Total number of pages
  const [currentPage, setCurrentPage] = useState(1); // Current active page
  const [showNews, setShowNews] = useState(true); // State to toggle between News and NewsPage2

  const renderPaginationItems = () => {
    const items = [];
    for (let page = 1; page <= totalPages; page++) {
      items.push(
        <Pagination.Item
          key={page}
          active={page === currentPage}
          onClick={() => handlePageClick(page)}
        >
          {page}
        </Pagination.Item>
      );
    }
    return items;
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
    // code to switch between components (News.jsx and NewsPage1.jsx)
    // if page=2,4,6,8...means even then showNews value will be false and hence
    // <NewsPage2/> will be visible at that time.
    // Otherwise if page=1,3,5...means odd then <News/> component will be visible at that time.
    if (page % 2 === 0) {
      setShowNews(false);
    } else {
      setShowNews(true);
    }
  };

  return (
    <div>
      <div> {showNews ? <News /> : <NewsPage2 />}</div>
      <div className="thirdDivOfNews">
        <Pagination>
          <Pagination.Prev />
          <h3 className="previousOrNext">Previous</h3>
          {renderPaginationItems()}
          <h3 className="previousOrNext">Next</h3>
          <Pagination.Next />
        </Pagination>
      </div>
    </div>
  );
};

export default PaginationComponent;
