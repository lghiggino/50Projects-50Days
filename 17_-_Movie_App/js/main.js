//constants
const input = document.querySelector("input")
const main = document.querySelector("main")

//on enter in the search



//clear the DOM

//fetch the APIAdress

let APIAdress = "https://api.themoviedb.org/3/movie/550?api_key=4ba3c3e2200f3937e93cfe0b4f6d6ea8";
fetch(APIAdress)
    .then(res =>  res.json())
    .then(data => {
        console.log(data);
        //  create the cards
    })
    .catch(error => {
        console.log(error)
    })
