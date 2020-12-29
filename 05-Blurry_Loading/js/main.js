const loadText = document.querySelector(".loading-text");
const background = document.querySelector(".background");

let load = 0;

let interval = setInterval(blurring, 30)

function blurring(){
    load++
    if (load === 100){
        clearInterval(interval)
        
    }
    loadText.innerText =`${load}%`
    loadText.style.opacity = scale(load, 0, 100, 1, 0)
    background.style.filter = `blur(${scale(load, 0, 100, 40, 0)}px)`
}


//scale function maps the range of load with the range of the opacity ad blur
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  }