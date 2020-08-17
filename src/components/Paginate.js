import React from "react";

export const Paginate = React.memo(({ activepage, itemxpage, totalitem, handlePage }) => {
  const pageAdd = !Number.isInteger(totalitem / itemxpage) ? 1 : 0;
  const totPage = parseInt(totalitem / itemxpage, 10) + pageAdd;

  const range = (start, stop, step) =>
    Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);

  const dataPage = range(1, totPage, 1);

  const handleClick = (nPage) => {
    for (let index = 0; index <= totPage + 1; index++) {
      const elementHtml = document.querySelector(`#page${index}`);
      elementHtml.className = "page-item";
    }

    if (nPage === 1) {
      const elementHtml = document.querySelector(`#page0`);
      elementHtml.className = "page-item disabled";
    }

    if (nPage === totPage) {
      const elementHtml = document.querySelector(`#page${totPage + 1}`);
      elementHtml.className = "page-item disabled";
    }

    const pageHtml = document.querySelector(`#page${nPage}`);
    pageHtml.className = pageHtml.className + " active";

    handlePage(nPage);
  };

  return (
    <>
      <ul className="pagination">
        <li id="page0" className="page-item">
          <button className="page-link" onClick={() => handleClick(1)}>
            &laquo;
          </button>
        </li>
        {dataPage.map((e) => (
          <li id={`page${e}`} key={e} className={`page-item page${e}`}>
            <button className="page-link" onClick={() => handleClick(e)}>
              {e}
            </button>
          </li>
        ))}
        <li id={`page${totPage + 1}`} className="page-item">
          <button className="page-link" onClick={() => handleClick(totPage)}>
            &raquo;
          </button>
        </li>
      </ul>
    </>
  );
});
