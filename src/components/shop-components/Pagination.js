import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Pagination(props) {
  const { page, total_pages = 0, is_paginated, onClickPage } = props;

  const firstPages = [...Array(Math.min(...[3, total_pages])).keys()];
  const lastPages = [total_pages - 3, total_pages - 1, total_pages];
  const hasMiddlePages = true;

  if (!is_paginated) return <div />;
  return (
    <div className="ltn__pagination-area text-center">
      <div className="ltn__pagination">
        <ul>
          <li>
            <Link to="#">
              <i className="fas fa-angle-double-left" />
            </Link>
          </li>

          {firstPages.map((_page) => (
            <li onClick={() => onClickPage(_page + page)}>
              <Link to="#">{_page + page}</Link>
            </li>
          ))}

          {hasMiddlePages && (
            <li>
              <Link to="#">...</Link>
            </li>
          )}

          {lastPages.map((page) => (
            <li>
              <Link to="#">{page}</Link>
            </li>
          ))}

          <li>
            <Link to="#">
              <i className="fas fa-angle-double-right" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
