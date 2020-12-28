const search = document.querySelector("section.search");
const button = document.querySelector(".btn");
const input = document.querySelector(".input")

button.addEventListener("click", () => {
    search.classList.toggle("active")
    input.focus();
})