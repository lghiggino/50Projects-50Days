const sounds = document.querySelectorAll("audio");

console.log(sounds);

sounds.forEach(sound => {
    const btn = document.createElement("button");
    btn.classList.add("btn")

    btn.innerText = sound.id
    btn.addEventListener("click", () => {
        stopSongs()
        document.getElementById(sound.id).play()
    })



    document.getElementById("buttons").appendChild(btn)
})

function stopSongs(){
    sounds.forEach(sound => {
        const song = document.getElementById(sound.id);
        song.pause();
        song.currentTime = 0;
    })
}
