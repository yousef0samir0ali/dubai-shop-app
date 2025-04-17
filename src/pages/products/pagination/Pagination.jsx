import "./pagination.css";

export default function Pagination({ pages, setCurrentPage, currentPage }) {
  const generatedPages = [];
  for (let i = 1; i <= pages; i++) {
    generatedPages.push(i);
  }

  return (
    <div className="pagination">
      <button disabled={currentPage === 1} onClick={() => setCurrentPage((prev) => prev - 1)} className="page previous">
        <i className="bi bi-arrow-right"></i>
        السابق
      </button>
      {generatedPages.map((page) => (
        <div
          key={page}
          className={currentPage === page ? "page active-page" : "page"}
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </div>
      ))}
      <button disabled={currentPage === pages} onClick={() => setCurrentPage(currentPage + 1)} className="page next">
        التالي
        <i className="bi bi-arrow-left"></i>
      </button>
    </div>
  );
}
