let anneeNaissance = 1998;
let anneeFuture = 2060;
let ageFuture = anneeFuture - anneeNaissance;

console.log(2026-anneeNaissance);
console.log(anneeFuture - anneeNaissance);
console.log(`En ${anneeFuture} j'aurais ${ageFuture} ans`);



let français = 12;
let math = 15;
let geographie = 11;
let musique = 10.5;

let moyenne = (français + math + geographie + musique) / 4;
console.log(`la moyenne de l'eleve est : ${moyenne}`);


// role : écrire bonjour dans la console
// paramètre : prenom de la personne à saluer
// retourner : rien

// je créer ma fonction
function direBjr (prenom) {
    console.log(`bonjour ${prenom}`);
}

// j'appelle, je lance ma fonction
direBjr("Nico");


// role: aditionner deux chiffres
// paramètre: deux chiffres
// return: le résultat

function addition (a , b) {
    return a+b;
}

console.log(addition(5,2))

let valeur = addition(5,2);
console.log(valeur);