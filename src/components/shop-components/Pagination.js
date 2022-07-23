import React from "react";
import PaginationComponent from "react-js-pagination";

export default function Pagination(props) {
  const { page, count, is_paginated, onClickPage, pageSize = 12 } = props;
  if (!is_paginated) return <div />;
  return (
    <PaginationComponent
      activePage={page}
      itemsCountPerPage={pageSize}
      totalItemsCount={count}
      pageRangeDisplayed={10}
      onChange={(p) => onClickPage(p - 1)}
      itemClass="nav-tabs nav-link"
      disabledClass="nav-link disabled"
      hideDisabled={true}
    />)
}
