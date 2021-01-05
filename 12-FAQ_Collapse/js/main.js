const toggles = document.querySelectorAll(".faq-toggle");

toggles.forEach(toggle => {
    toggle.addEventListener("click", () => {
        toggle.parentNode.classList.toggle("active")
    })
})

// const chevron = document.querySelectorAll(".fa-chevron-down");
// const times = document.querySelectorAll(".fa-times");

// chevron.forEach(chev => {
//     chev.addEventListener("click", (e) => {
//         console.log(e)
//         e.target.parentNode.parentNode.classList.add("active")
//     })
// })

// times.forEach(cross => {
//     cross.addEventListener("click", (e) => {
//         e.target.parentNode.parentNode.classList.remove("active")
//     })
// })