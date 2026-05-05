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
// paramètre: couleur du feu,rien
// retour : je m'arrete, je freine, je passe, danger

function couleurFeu () {
    let couleur = prompt("Quelle est la couleur du feu ? (rouge, orange, vert)");

    if(couleur === "rouge") {
        console.log("Je m'arrête !");
    }else if(couleur === "orange") {
        console.log("Je freine !");
    }else if(couleur === "vert") {
        console.log("Je passe !");
    }else {
        console.log("Danger : feu défectueux !");
    }
}

couleurFeu();

//let saisie = prompt("Quelle est la couleur du feu ?");
//console.log(messageFeu(saisie));
