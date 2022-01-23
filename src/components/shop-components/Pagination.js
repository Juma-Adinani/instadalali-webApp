import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import _ from "lodash";

export default function Pagination(props) {
  const { page, total_pages = 0, is_paginated, onClickPage } = props;
  const firstPages = [...Array(Math.min(...[3, total_pages])).keys()].filter(p=>p<total_pages && p>=0);
  const lastPages = [total_pages - 3, total_pages - 1, total_pages].filter(p=>p<total_pages && p>=0);
  const hasMiddlePages = (!_.isEqual(firstPages, lastPages) && lastPages.length>0 
              && _.intersection(firstPages,lastPages).length !== lastPages.length)
              
  if (!is_paginated) return <div />;
  return (
    <div className="ltn__pagination-area text-center">
      <div className="ltn__pagination">
        <ul>
          {hasMiddlePages && <li>
            <Link to="#" className="bg-white" onClick={() => onClickPage(page-2)}>
              <i className="fas fa-angle-double-left" />
            </Link>
          </li>}

          {firstPages.map((_page, i) => (
            <li key={i} onClick={() => onClickPage(_page + page-1)}>
              <Link to="#" className="bg-white">{_page + page}</Link>
            </li>
          ))}

          {hasMiddlePages && (
            <li>
              <Link to="#" className="bg-white">...</Link>
            </li>
          )}

          {hasMiddlePages && lastPages.map((_page, j) => (
            <li key={j} onClick={() => onClickPage(_page)}>
              <Link to="#" className="bg-white">{_page}</Link>
            </li>
          ))}

          {hasMiddlePages && 
          <li>
            <Link to="#" className="bg-white" onClick={() => onClickPage(page)}>
              <i className="fas fa-angle-double-right" />
            </Link>
          </li>}
        </ul>
      </div>
    </div>
  );
}
