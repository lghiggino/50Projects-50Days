const open = document.getElementById("open");
const close = document.getElementById("close");
const container = document.querySelector(".container")

open.addEventListener("click", () =>{
    container.classList.add("show-nav")
})

close.addEventListener("click", () =>{
    container.classList.remove("show-nav")
})

//click on the navigation, transform the container back, send to the link
const links = document.querySelectorAll(".links")

links.forEach(link => {
    link.addEventListener("click", () => {
        console.log(link.id)
        if (container.classList.contains("show-nav")){
            container.classList.remove("show-nav")
        }

        function linkFinder (){
            switch(link.id){
                case ("index"):
                    window.location.href="index.html";
                    break;
                case("about"):
                    window.location.href="about.html";
                    break;
                case("contact"):
                    window.location.href="contact.html";
                    break;
            }
        }
        setTimeout(linkFinder, 500)
    })
})



