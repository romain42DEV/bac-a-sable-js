// je recupère le header
let header = document.querySelector("header")
// je récupère le héro
let hero = document.querySelector(".hero")
window.addEventListener("scroll", function() {
    // j'écoute le scroll
    console.log("coucou")

    // si l'utilisateur a scrollé plus bas que le hero
    if(window.scrollY > hero.clientHeight) {
        // je donne au header une classe qui change le background
        header.classList.add("bg-bleu")
    }else{
        // sinon
        // je lui enleve la classe qui change le bg
        header.classList.remove("bg-bleu")
    }
})