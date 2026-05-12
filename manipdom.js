/*
document.querySelector("body").innerHTML += `<div> <p> lorem </p> </div>`
document.querySelector("p").classList.add("red")
let paragrapheAmettreEnRouge.classList.add("red")
paragrapheAmettreEnRouge.classLilst.remove("bg-yellow")
paragrapheAmettreEnRouge.classList.toggle("bg-yellow")


let bouton = document.querySelector("#btn")

bouton.addEventListener("click", creerunP() {
    console.log()
})

function creerunP () {
    document.querySelector("#grosseBoite").innerHTML += `<p>lorem</p>`
}
*/

function ajouterAuBody(trucAafficher){
    document.querySelector("#resultat").innerHTML = trucAafficher;
};

let btnJouer = document.querySelector("#btnJouer");

btnJouer.addEventListener("click", jouer);


function jouer(){
    scenario(emojisArray)
}

/*
let btnJ = document.querySelector("#btnJouer")
 
btnJ.addEventListener("click" , function(){
    scenario(emojisArray)
})
*/


// jackpot ludivine

/*
Créer une machine à Jackpot qui affiche 4 emojis. 
Si les emojis sont identiques : Afficher  `jackpot !` 
Sinon, afficher `perdu !`
Indice : il faudra utiliser `Math.floor` et `Math.random`
*/

// créer une fonction 
// role : choisir 3 emojis
//parametre : tableau avec tous les emojis possibles (entre 3 et 5)
//return : les 3 emojis selectionné 

//créer le tableau d'emoji 
let emojisArray = ["🦊", "🐺", "🦁", "🐶", "🐻‍❄️"]

function emojiAlea(tableauEmojis) {

    let emojisPioche = []

    //va répéter le code 3 fois (tant que i est inférieur a 3)
    for (let i = 0; i < 3; i++) {

        //tirer 1 chiffre aleatoirement Math.floor(Math.random()*3)
        let chiffreAleatoire = Math.floor(Math.random() * tableauEmojis.length)

        //attribuer un emoji a chaque chiffre tiré -> si on tire 0 on va charcher l'emoji a la position 0 dans le tableau 
        let emojiPioche = tableauEmojis[chiffreAleatoire];

        //stocker mes emojis dans une boite -> je reconstruit un tableau avec les emoji piochés
        emojisPioche.push(emojiPioche)

    }
    //retourner les emojis pioché
    return emojisPioche;
}

//role : comparer les emojis pour définir si victoire 
//parametre : les emojis piochés -> un tableau
//return : true/false -> boolean
function comparerEmojisPioche(emojisPioche) {


    // si le premier emojis du tableau est identique au deuxieme ET le deuxieme au troisieme ET le premier au troisieme alors il sont tous identique -> victoire (true)
    if (emojisPioche[0] === emojisPioche[1] && emojisPioche[1] === emojisPioche[2] && emojisPioche[0] === emojisPioche[2]) {
        return true;
    }
    // sinon, défaite (false)
    else {
        return false;
    }
}

//role : afficher la resultat dans le body 
//parametre : les emojis pioché, et le résultat
//return : rien car elle affiche
function afficherResultat(emojisPioche, resultat) {

    if (resultat === true) {
        ajouterAuBody(`
        <div> 
            <p> Votre pioche. : </p>
            <span>${emojisPioche[0]}</span>
            <span>${emojisPioche[1]} </span>
            <span>${emojisPioche[2]}</span>

            <p> Victoire ! </p>
        </div>   
        `) 
    }
    else {
        ajouterAuBody(`
        <div> 
            <p> Votre pioche. : </p>
            <span>${emojisPioche[0]}</span>
            <span>${emojisPioche[1]} </span>
            <span>${emojisPioche[2]}</span>

            <p> Dommage, retente ta chance ! </p>
        </div>   
        `) 
    }


}




function scenario(tableauEmojis){
    let emojisPioches = emojiAlea(tableauEmojis);
    let conclusionResultat = comparerEmojisPioche(emojisPioches);
    afficherResultat(emojisPioches, conclusionResultat)
}

//scenario(emojisArray)



// exo 1
document.querySelector("h1").style.color = "green" ;


// exo 2
//fonction toggle
// role :cacher et afficher l'element
// paramètre: hide
// return: rien

function cacheEtAffiche() {
    document.querySelector("#hide").classList.toggle("hide");
}

// au clic
btn.addEventListener("click", cacheEtAffiche);

//lance la fonction
//cacheEtAffiche(hide);


// exo 3
let boites = document.querySelectorAll(".boite")
console.log(boites);

// je parcours mon tableau de div
boites.forEach(boite => {
    boite.addEventListener("click",function() {
        //je reset
        reset()
        // j'ai la boite sur laquelle j'ai cliqué
        console.log(boite)
        boite.classList.toggle("bg-red")
    })
})

// role: reset (enlève la classe bg-red a toutes les div qui on la classe boite)
// paramètre : non
// retour: non
function reset() {
    let boites = document.querySelectorAll(".boite")
    boites.forEach(boite => {
        boite.classList.remove("bg-red")
    })
}

// exo 4
let nombreClics = 0;

function comptage() {
  nombreClics++;
  document.getElementById("nombreClics").textContent   = nombreClics;
}

document.getElementById("btncompter").addEventListener("click", comptage);