console.log(9 === 10);
console.log("Hello" !== "hello");
console.log(8 > 12);

// Si b=b -> bien joué
// sinon -> dommage

let b = 5;
let c = 6;

if(b === c) {
    console.log("bien joué !")
} else{
    console.log("dommage")
}

if (b === c) {
    console.log("c'est pareil")
}else if (b > c){
    console.log("b est supérieur a c")
}else {
    console.log("b est inférieur a c")
}


let connect = true;

if(connect === true) {
    console.log("l'utilisateur est connecté")
}else {
    console.log("l'utilisateur n'est pas connecté")
}


let nbr = 3;

if(nbr % 2 === 0) {
    console.log("le nombre est paire")
}else {
    console.log("le nombre est impair")
}


let meteo = "orage";

if (meteo === "soleil") {
    console.log("prend une casquette")
}else if (meteo === "pluie") {
    console.log("n'oublie pas ton parapluie")
}else if (meteo === "neige") {
    console.log("met des bottes")
}else {
    console.log("débrouille toi")
}



let age = 11;

if (age < 12 ) {
    console.log("Enfant");
}else if (age >= 12 && age<=18 ) {
    console.log("Adolescent")
}else if (age>18 && age<=70) {
    console.log("Adulte")
} else {
    console.log("Personne agée")
}



let longa = 30;
let longb = 30;
let longc = 50;

if (longa !== longb && longa !== longc && longb !== longc) {
    console.log("triangle quelconque")
}else if (longa === longb && longb === longc && longc === longa) 
    console.log("triangle équilatéral")
else {
    console.log("triangle isocèle")
}



// rôle: determine si une personne est éligible a une réduction
// paramètre: age(number), membre(boolean), achat(number)
// retour : "reduction accordé reduction refusé"


function reduction(age,membre,achat) {
    // si la persoone a plus de 18 ans
    if(age>18) {
        //Si la personne est membre ou a fait plus de 100€ d'achat
        if(membre === true || achat > 100) {
        //Reduction accordée
         return "reduction accordée"
        }else{
        //Sinon :elle est pas membre ou elle a pas fait d'achat supérieur à 100
        //Reduction refusée
         return "reduction refusée"
        }
    }else{
        // sinon (elle a pas 18ans) :
        // reduction refusé
        return "reduction refusé"
    }
}

let ticket = reduction(19,true,80);
console.log(ticket);





// rôle: demande a l'utilisateur la couleur du feu
// paramètre: rien
// retour : rouge vert orange ou autre

function demanderCouleur () {
    let reponseUtilisateur = prompt("de quel couleur est le feu ?")
    return reponseUtilisateur;
}

// rôle: afficher une indication de conduite en fonction de la couleur du feu
// paramètre: couleur du feu
// retour : rien car elle affiche

function afficherInfoConduite(couleurFeu) {
    // si la couleur du feu est vert -> je passe
    if(couleurFeu === "vert") {
        alert("je passe !");
    }
    // si la couleur du feu est orange -> je freine
    else if (couleurFeu === "orange") {
        alert("je freine !");
    }
    // si la couleur du feu est rouge -> je m'arrete
    else if (couleurFeu === "rouge") {
        alert("je m'arrête !");
    }else {  // si la couleur du feu est autre -> danger
        alert("Danger : feu défectueux !");
    }
}

function lancerFonctions(){
    let couleur = demanderCouleur()
    afficherInfoConduite(couleur)
}

lancerFonctions();




// rôle: calcule la moyenne générale de l'eleve
// paramètre: les moyennes des notes
// retour : la moyenne generale

function calculerMoyenne (noteMath, noteFrançais, noteHistoire, noteSvt) {
    let moyenneG = (noteMath + noteFrançais + noteHistoire + noteSvt)/4
    return moyenneG
}



// rôle: Créer un commentaire a partir de la moyenne générale
// paramètre: la moyenne générale de l'élève
// retour : le commentaire

function genererCommentaire (moyGen) {
    if(moyGen <= 10) { // si la moyenne G est inférieur à 10 -> trvailler plus
        return "Il faut travailler plus";
    }else if (moyGen > 10 && moyGen <= 13) {
        return "Poursuivez vos efforts ";
    }else if (moyGen > 13 && moyGen <= 15) {
        return "Bon travail";
    }else if (moyGen > 15 && moyGen <= 17) {
        return "Bravo";
    }else {
        return "Félicitations !";
    }
}



// rôle: afficher le bulletin
// paramètre: la moyenne g et le commentaire
// retour : rien car elle affiche

function afficherBulletin(commentaire, moyenneGenerale, prenomEleve){
    alert(`La moyenne de l'éléve ${prenomEleve} est : ${moyenneGenerale} et le commentaire est : ${commentaire}`)
}

// role: jouer le scénario -> calculeMoyenne, commentaire,buletin
// paramètre: notes
// return: rien

function scenario(a, b, c, d, prenomEleve) {
    let moyenneG = calculerMoyenne(a, b, c, d)
    let commentaire = genererCommentaire(moyenneG)
    afficherBulletin(commentaire, moyenneG, prenomEleve)
}

scenario(15,15,12,14,"Romain");
scenario(8,10,2,4,"nico");