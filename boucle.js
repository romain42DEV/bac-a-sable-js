/*
for(let i=1; i<5; i++) {
    console.log("coucou")
}

for(let i=1; i<=100; i++) {
    console.log(i)
}

for(let i=1; i<=100; i=i+2) {
    console.log(i)
}

for(let i=100; i>0; i--) {
    console.log(i)
}

for(let i=100; i>0; i=i-2) {
    console.log(i)
}
*/



// role: afficher la table de multiplication d'un nombre quelconque
// paramètre: le nombre quelconque
// return: rien car elle affiche

function afficheTable (nombreTable) {
    
    for(let i=1; i<=10; i++) {
        console.log(`${nombreTable} x ${i} = ${nombreTable * i}`)
    }
}

// role: écrire 50 fois la phrase
// paramètre: non
// return: rien car elle affiche

function punition(){
    // créer une boucle qui tournera 50 fois
    for(let i=1; i<=50; i++) {
        //ecrit la phrase
        console.log("I will not waste chalk")
    }
}



// role: épeler le mot
// paramètre: le mot à epeler
// return: rien car elle affiche

function epeler(mot){
    console.log(`le mot ${mot} contient ${mot.length} lettres`)

    for (let i=0; i < mot.length; i++) {
        console.log(mot.charAt(i))
    }
}


let animaux = ["chien", "chat", "lapin", "hamster"]
console.log(animaux[2]);
console.log(animaux[animaux.length-1]);


// créer un tableau "panierFruits" contenant 6 fruits
// aficher dans la console le premier et le dernier fruit du tableau
const panierFruits = ["pomme", "fraise", "orange", "banane", "peche", "abricot"]
console.log(`le premier fruit du tableau est ${panierFruits[0]} et le dernier fruit est ${panierFruits[panierFruits.length-1]}`)

panierFruits.push("pastèque");
console.log(panierFruits);

panierFruits.pop();
console.log(panierFruits);

panierFruits.shift();
console.log(panierFruits);

//delete panierFruits[2];
//console.log(panierFruits);


for(let i=0; i<panierFruits.length; i++){
    console.log(panierFruits[i])
}

panierFruits.forEach(element => {
    console.log(panierFruits)
});



// Imaginer une fonction permettant de calculer la moyenne d'un élève à partir des notes qui nous sont
// données dans un tableau, la moyenne général de l'élève sera retourné puis affiché en console

// Tableau de notes
const notes = [12, 9, 15, 17, 10];
console.log(notes[0]);

// role: calculer la moyenne a partir d'un tableau de notes
// paramètre: le tablaeau de notes
// return: la moyenne

// créer une fonction
function calculerMoyenne(tableauNotes){
    let somme = 0;
    // récupérer les notes une par une dans le tableau
    tableauNotes.forEach(note => { 
        somme = somme + note;
        // quand il en a une, il l'additionne dans une variable(à l'origine une variable vide)
    });
    // on divise la somme obtenu par le nombre de valeur dans le tableau c'est à dire la longueur du tableau
    let moyenne = somme/tableauNotes.length;
    // retourner le résultat
    return moyenne;
}


// role: afficher le résultat retourné par la fonction 1
// paramètre: le résultat
// return: rien car elle affiche

function afficheMoyenne(moyenne){
    console.log(`la moyenne de l'élève est : ${moyenne}`)
}

let moyenneEleve = calculerMoyenne(notes)
afficheMoyenne(moyenneEleve)



// exo 2: le panier de fruit
let tabFruits = ["cerises", "pommes", "cerises", "pommes", "poires", "bananes", 
"pommes", "poires", "cerises"];
console.log(tabFruits[0]);

// role: compter le nombre de chaque fruits
// paramètre: le tableau des fruits
// return: le nombre total de chaque fruits

function compterFruit(TableauFruits){

    let compteurPommes = 0;
    let compteurCerises = 0;
    let compteurPoires = 0;
    let compteurBananes = 0;
    let compteurInconnus = 0;

    tabFruits.forEach(fruit => {

        if (fruit === "pommes") {
            compteurPommes++
        }else if (fruit === "cerises") {
            compteurCerises++
        }else if (fruit === "poires") {
            compteurPoires++
        }else if (fruit === "bananes") {
            compteurBananes++
        }else {
            compteurInconnus++
        }
    });

    return `Dans le pannier, il y a : ${compteurPommes} pommes,
        il y a ${compteurPoires} poires,
        il y a ${compteurBananes} bananes,
        il y a ${compteurCerises} cerises.`

}

function afficherDansPage(aAfficher) {
    document.querySelector("body").innerHTML += `<p>${aAfficher}</p>`
}

let = phraseAafficher = compterFruit(tabFruits)
afficherDansPage(phraseAafficher)



// code cesar

// role: encoder un message
// paramètre: le mot a encoder
// return: le mot encodé

function codeCesar(motAencoder){
    // un alphabet
    const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    let motEncode = "";

    // récupérer les lettres du mot une par une
    for(let i=0; i < motAencoder.length; i++) {
        let lettreEncode = "";

        // on stock le caractère a la position i du mot
        let = lettreActuelle = motAencoder.charAt(i)
        console.log(lettreActuelle);

        if(lettreActuelle === "z"){
            lettreEncode = "a"
        }else {

        // quand il aura récupérer une lettre il va chercher la position de cette lettre dans l'alphabet
        //-> stock dans une variable posLettreActuelle
        let posLettreActuelle = alphabet.indexOf(lettreActuelle)
        console.log(posLettreActuelle);

        // va chercher la lettre à la position suivante
        lettreEncode = alphabet[posLettreActuelle + 1]
        console.log(lettreEncode)

        }

        // stock dans une variable pour recomposer le mot encoder
        motEncode = motEncode + lettreEncode // motEncode += lettreEncode
        console.log(motEncode)
    }

    // return le mot encode
    return motEncode
    
}


function afficheDansBody(trucAafficher){
    document.querySelector("body").innerHTML += `<p>${trucAafficher}</p>`
}

function scenario(motAencoder){
    let motEncode = codeCesar(motAencoder)
    afficheDansBody(motEncode)
}



// jacKpot
//Créer une fonction
// role: choisir 3 emojis
//paramètre : tableau avec tous les emojis possibles(entre 3 et 5)
// return: les 3 emojis selectioné

function emojiAlea(tableauEmoji){
    //créer le tableau d'emoji

    //tirer 3 chiffre aleatoirement -> Math.floor(Math.random()*3)

    //attribuer un emoji a chaque chiffre tiré -> si on tire 0 on va chercher l'emoji a la position 0 dans le tableau

    //stocker mes emojis dans une boite -> je reconstruit un tableau avec les emoji piochés

    //retourner les emojis pioché
}

// role: comparer les emojis pour définir si victoire
// paramètre: les emojis piochés -> un tableau
// return: true/false -> boolean


// role: afficher le resultat dans le body
// paramètre: les emojis pioché, et le resultat
// return: rien car elle affiche