const keys = document.getElementById("keys")

window.addEventListener("keydown" , (e) => {
    console.log(e.key, e.keyCode, e.code)
    keys.innerHTML = `
        <div class="key">
            ${e.key === " " ? "Space" : e.key}
            <small>event.key</small>
        </div>

        <div class="key">
            ${e.keyCode}
            <small>event.keyCode</small>
        </div>

        <div class="key">
            ${e.code}
            <small>event.code</small>
        </div>
    `



    if (e.key === " "){

    }
})
