const container = document.querySelector(".search-container");
const search = document.querySelector(".search");
const button = document.querySelector(".btn");

button.addEventListener("click", () => {
  container.classList.toggle("active");
  search.focus();
});
