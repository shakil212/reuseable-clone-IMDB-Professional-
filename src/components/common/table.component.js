import React from "react";
import TableHeader from "./table.header.component";
import TableBody from "./table.body.component";
import "../../styles/styles.css"; // Import CSS file

function TableComponent(props) {
    const { items, columns, currentPage, limit, onPageChange } = props;

    // Calculate start and end index for pagination
    const start = (currentPage - 1) * limit;
    const end = Math.min(start + limit, items.length);
    const totalPages = Math.ceil(items.length / limit);

    // Slice items based on current page and limit
    const paginatedItems = items.slice(start, end);

    // Generate page numbers for pagination links
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }

    return (
      <>
          <table className="table">
              <TableHeader columns={columns} />
              <TableBody items={paginatedItems} columns={columns} />
          </table>

          <nav aria-label="Page navigation example">
            <ul className="pagination">
                <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                      <button
                          className="page-link"
                          onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
                          disabled={currentPage === 1}
                      >
                          Previous
                      </button>
                </li>
      
                {pages.map((page) => (
                  <li
                      key={page}
                      className={`page-item ${page === currentPage ? "active" : ""}`}
                  >
                      <button className="page-link" onClick={() => onPageChange(page)}>
                        {page}
                      </button>
                  </li>
                ))}
                <li
                    className={`page-item ${
                      currentPage === totalPages ? "disabled" : ""
                    }`}
                >
                  <button
                      className="page-link"
                      onClick={() =>
                        currentPage < totalPages && onPageChange(currentPage + 1)
                      }
                      disabled={currentPage === totalPages}
                  >
                      Next
                  </button>
                </li>
            </ul>
          </nav>
      </>
    );
}

export default TableComponent;
