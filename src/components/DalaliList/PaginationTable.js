import React, { useMemo, useEffect, useState } from "react";
import { useTable, useGlobalFilter, usePagination } from "react-table";
// import MOCK_DATA from "./MOCK_DATA.json";
// import ColumnsDataTable, { COLUMNS } from "./ColumnsDataTable";
import "./table.css";
import { SearchFilter } from "./SearchFilter";
import { Link } from "react-router-dom";
// import { url, requests, utils } from "helpers";

export default function PaginationTable({ columns, data }) {
  
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
    footerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },

    useGlobalFilter,
    usePagination
  );

  const { pageIndex, pageSize, globalFilter } = state;

  return (
    <>
      <div className="ltn__product-area ltn__product-gutter mb-100">
        <div className="container d-flex flex-column align-item-center justify-content-center">
          <SearchFilter filter={globalFilter} setFilter={setGlobalFilter} />
          <table {...getTableProps()}>
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th {...column.getHeaderProps()}>
                      {column.render("Header")}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {page.map((row) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                      return (
                        <td {...cell.getCellProps()}>
                          <Link to="/dalali-posts">{cell.render("Cell")}</Link>
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              {footerGroups.map((footerGroup) => (
                <tr {...footerGroup.getFooterGroupProps()}>
                  {footerGroup.headers.map((column) => (
                    <td {...column.getFooterProps()}>
                      {column.render("Footer")}
                    </td>
                  ))}
                </tr>
              ))}
            </tfoot>
          </table>
          <div className="ltn__product-area ltn__product-gutter mb-10 mt-30">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="ltn__shop-options">
                    <ul>
                      <li className="mt-10">
                        <button
                          onClick={() => gotoPage(0)}
                          disabled={!canPreviousPage}
                        >
                          {"<<"}
                        </button>

                        <button
                          onClick={() => previousPage()}
                          disabled={!canPreviousPage}
                        >
                          <strong>Previous</strong>&nbsp;
                        </button>

                        <button
                          onClick={() => nextPage()}
                          disabled={!canNextPage}
                        >
                          <strong>Next</strong>
                        </button>

                        <button
                          onClick={() => gotoPage(pageCount - 1)}
                          disabled={!canNextPage}
                        >
                          {">>"}&nbsp;
                        </button>
                      </li>
                      <li className="mt-10">
                        <div className="showing-product-number text-right">
                          <span>
                            <strong>
                              Showing&nbsp;{pageIndex + 1} of{" "}
                              {pageOptions.length} results
                            </strong>
                          </span>
                        </div>
                      </li>

                      <div className="d-flex flex-row justify-content-center">
                        <label className="col-sm-8 col-form-label">
                          <strong>Go to page:</strong>
                        </label>
                        <div className="">
                          <input
                            type="number"
                            className="form-control"
                            type="number"
                            defaultValue={pageIndex + 1}
                            onChange={(e) => {
                              const pageNumber = e.target.value
                                ? Number(e.target.value) - 1
                                : 0;
                              gotoPage(pageNumber);
                            }}
                            style={{ width: "70px" }}
                          />
                        </div>
                      </div>

                      <li className="mt-10">
                        <span>
                          <div className="short-by text-center">
                            <select
                              className="nice-select"
                              value={pageSize}
                              onChange={(e) =>
                                setPageSize(Number(e.target.value))
                              }
                            >
                              {[10, 25, 50].map((pageSize) => (
                                <option key={pageSize} value={pageSize}>
                                  Show {pageSize}
                                </option>
                              ))}
                            </select>
                          </div>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
