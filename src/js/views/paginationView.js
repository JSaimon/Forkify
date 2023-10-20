import icons from "url:../../img/icons.svg";
import View from "./view";

class PaginationView extends View {
  _parentElement = document.querySelector(".pagination");

  addHandlerClick(handler) {
    this._parentElement.addEventListener("click", function (event) {
      const buttonElement = event.target.closest(".btn--inline");

      if (!buttonElement) return;

      const goToPage = +buttonElement.dataset.goto;
      handler(goToPage);
    });
  }

  _generateMarkup() {
    return this._generateMarkupButton();
  }

  _generateMarkupButton() {
    const currentPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    let markup = "";
    const previousButton = `
    <button data-goto="${
      currentPage - 1
    }" class="btn--inline pagination__btn--prev">
        <svg class="search__icon">
            <use href="${icons}#icon-arrow-left"></use>
        </svg>
        <span>Page ${currentPage - 1}</span>
    </button>
    `;

    const nextButton = `
    <button data-goto="${
      currentPage + 1
    }" class="btn--inline pagination__btn--next">
        <span>Page ${currentPage + 1}</span>
        <svg class="search__icon">
            <use href="${icons}#icon-arrow-right"></use>
        </svg>
    </button>
    `;

    if (currentPage < numPages) {
      markup += nextButton;
    }

    if (currentPage > 1) {
      markup += previousButton;
    }

    return markup;
  }
}

export default new PaginationView();
