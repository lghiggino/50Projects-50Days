//constants
const form = document.querySelector("#form")
const search = document.querySelector("#search")
const main = document.querySelector("main")
const API_URL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=4ba3c3e2200f3937e93cfe0b4f6d6ea8&page=1";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280"
const SEARCH_API = "https://api.themoviedb.org/3/search/movie?api_key=4ba3c3e2200f3937e93cfe0b4f6d6ea8&query=";



//on enter in the search



//clear the DOM

//fetch the APIAdress


// fetch(APIAdress)
//     .then(res =>  res.json())
//     .then(data => {
//         console.log(data);
//         //  create the cards
//     })
//     .catch(error => {
//         console.log(error)
//     })



getMovies(API_URL)

//with async await
async function getMovies(url){
    const res = await fetch(url)
    const data = await res.json()
    showMovies(data.results)
}

function showMovies(movies){
    main.innerHTML = "";
    movies.forEach(movie => {
        const {title, poster_path, vote_average, overview} = movie

        const movieElement = document.createElement("div");
        movieElement.classList.add("movie")
        movieElement.innerHTML = `
            <img src="${IMG_PATH + poster_path}" alt="" class="src">
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getClassByRate(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
                <h3>Overview</h3>
                <p>${overview}</p>
            </div>
        `
        main.appendChild(movieElement)
    })
}

function getClassByRate(vote){
    if (vote >= 8){
        return "green";
    } else if (vote >= 5){
        return "orange";
    } else return "red";
}

form.addEventListener("submit", (e) => {
    e.preventDefault()
    const searchTerm = search.value
    if (searchTerm && searchTerm !== ""){
        getMovies(SEARCH_API+searchTerm)
        search.value = ""
    }else{
        window.location.reload();
    }
})