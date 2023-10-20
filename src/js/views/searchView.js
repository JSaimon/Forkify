class SearchView {
  #parentElement = document.querySelector(".search");

  getQuery() {
    const query = this.#parentElement.querySelector(".search__field").value;
    this._clearInput();
    return query;
  }

  addHandlerSearch(handler) {
    this.#parentElement.addEventListener("submit", function (event) {
      event.preventDefault();
      handler();
    });
  }

  _clearInput() {
    this.#parentElement.querySelector(".search__field").value = "";
  }
}

export default new SearchView();
