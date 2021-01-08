const button = document.querySelector("#toggle");
const nav = document.querySelector("#nav");
const links = document.querySelectorAll("li");


links.forEach(link => {
    link.addEventListener("click", toggleMenu)
})
button.addEventListener("click", toggleMenu);

function toggleMenu(){
    nav.classList.toggle("active")
}