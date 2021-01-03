const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

generateJoke()

async function generateJoke(){
    const config = {
        headers: {"Accept": "application/json"}
    }

    const response = await fetch("https://icanhazdadjoke.com", config); 
    const data = await response.json();
    jokeEl.innerHTML = data.joke;
}


jokeBtn.addEventListener("click", generateJoke);

// then method
// .then(res=> res.json())
// .then(data => {
//     jokeEl.innerHTML = data.joke;
// })