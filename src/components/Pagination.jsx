
import { useState } from 'react';

export default function PaginationComponent({ totalEntries = 10328 }) {
    const [currentPage, setCurrentPage] = useState(1);
    const [entriesPerPage, setEntriesPerPage] = useState(10);
    const entriesOptions = [10, 25, 50, 100, 'All'];

    const totalPages = Math.ceil(totalEntries / entriesPerPage);

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return (
        <div className="pagination-container">
            <div className="entries-info">
                <span>Showing </span>
                <select
                    value={entriesPerPage}
                    onChange={(e) => setEntriesPerPage(e.target.value === 'All' ? totalEntries : Number(e.target.value))}
                >
                    {entriesOptions.map((option, index) => (
                        <option key={index} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
                <span> of {totalEntries} entries</span>
            </div>

            <div className="pagination">
                <button
                    className="pagination-button"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>

                <div className="pagination-links">
                    {currentPage > 1 && (
                        <button
                            className="pagination-link"
                            onClick={() => handlePageChange(1)}
                        >
                            1
                        </button>
                    )}

                    {currentPage > 3 && <span className="pagination-ellipsis">...</span>}

                    {currentPage > 2 && (
                        <button
                            className="pagination-link"
                            onClick={() => handlePageChange(currentPage - 1)}
                        >
                            {currentPage - 1}
                        </button>
                    )}

                    <button
                        className="pagination-link active"
                        disabled
                    >
                        {currentPage}
                    </button>

                    {currentPage < totalPages - 1 && (
                        <button
                            className="pagination-link"
                            onClick={() => handlePageChange(currentPage + 1)}
                        >
                            {currentPage + 1}
                        </button>
                    )}

                    {currentPage < totalPages - 2 && <span className="pagination-ellipsis">...</span>}

                    {currentPage < totalPages && (
                        <button
                            className="pagination-link"
                            onClick={() => handlePageChange(totalPages)}
                        >
                            {totalPages}
                        </button>
                    )}
                </div>

                <button
                    className="pagination-button"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
        </div>
    );
}