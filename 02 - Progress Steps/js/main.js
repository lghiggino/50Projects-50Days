const progress = document.getElementById("progress")
const prev = document.getElementById("prev")
const next = document.getElementById("next")
const circles = document.querySelectorAll(".circle")

const formBoxes = document.querySelectorAll(".form-box")

let currentActive = 1

next.addEventListener("click", () => {
    currentActive++
    if (currentActive > circles.length){
        currentActive = circles.length
    }
    updateCircles()
    updateForms()
})


prev.addEventListener("click", () => {
    currentActive--
    if (currentActive < 1){
        currentActive = 1
    }
    updateCircles()
    updateForms()
})

function updateCircles(){
    circles.forEach((circle, index) => {
        if (index < currentActive){
            circle.classList.add("active")
        } else {
            circle.classList.remove("active")
        }
    })

    const actives = document.querySelectorAll(".active");
    progress.style.width = `${(actives.length -1) / (circles.length -1) * 100}%`

    if(currentActive === 1){
        prev.disabled = true
    } else if(currentActive === circles.length){
        next.disabled = true
    } else{
        prev.disabled = false;
        next.disabled = false;
    }
}

function updateForms(){
    formBoxes.forEach(formBox => {
        if (formBox.id.includes(String(currentActive))){
            console.log(formBox.id)
            formBox.classList.add("visible")
            formBox.classList.remove("hidden")
        } else{
            formBox.classList.add("hidden")
            formBox.classList.remove("visible")
        }
    })
}