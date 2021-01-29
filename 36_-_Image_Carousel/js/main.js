const imageContainer = document.querySelector(".image-container");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right")
const images = document.querySelectorAll("#imgs img")

let idx = 0
let running = true

let interval = setInterval(run, 2000)

function run(){
    idx++
    changeImage()
}

function changeImage(){
    if(idx > images.length-1){
        idx = 0;
    }else if(idx < 0){
        idx = images.length-1
    }

    imageContainer.style.transform = `translateX(${-idx*500}px)`
}

function resetInterval(){
    clearInterval(interval);
    interval = setInterval(run, 2000);
}

rightBtn.addEventListener("click", () => {
    idx++
    changeImage()
    resetInterval()
})

leftBtn.addEventListener("click", () => {
    idx--
    changeImage()
    resetInterval()
})

images.forEach(image => {
    image.addEventListener("click", () => {
        console.log(idx);
        if (running) {
            clearInterval(interval);
            running = false;
        } else {
            resetInterval();
            running = true;
        }
       
    })
})