// role: calcule la moyenne d'un élève
// paramètre: quatres notes
// return : le résultat de la moyenne

// je crée ma fonction
function calculMoyenne (a, b, c, d) {
    return (a+b+c+d)/4;
}

//j'appelle ma fonction
console.log(`votre moyenne est ${calculMoyenne(12,15,18,14)}`);


// role: décrémente, retirer une pomme aux stock de pommes
// paramètre: rien si 1 pomme, si plusieurs pommes : nombre de pomme
// return : rien

let stockDePom = 6;
console.log(stockDePom)

function decremente () {   
    stockDePom--
}

/*
function decremente (nombreDePommeAretirer) {   
    nombreDePommeAretirer--
}

decremente();
console.log(5);
*/

decremente();
console.log(stockDePom);

decremente();
console.log(stockDePom);

decremente();
console.log(stockDePom);

decremente();
console.log(stockDePom);



// role: affiche en console la dernière lettre de n’importe quel mot
// paramètre: un mot
// return : rien


function DerniereLettre (mot) {
    let dernierePos = mot.length-1 // position de la derniere lettre du mot

    console.log(mot.charAt(dernierePos))
}

DerniereLettre("chat");



// role: afficher la nouvel offre après avoir remplacer le prduit bubble tea par un autre
// paramètre: le nouveau produit et la liste initiale "thé, café, tisane, bubble tea"
// return : rien


function nouvelleOffre (nouveauProduit, listeInitial) {
    console.log(listeInitial.replace("bubble tea", nouveauProduit))
}

nouvelleOffre("matcha", "café, bubble tea, tisane");



// role: afficher des balises à ma page html
// paramètre: la balise ajouter
// return : rien

function ajouterBalise(balise) {
    document.querySelector("body").innerHTML+= balise
}

ajouterBalise("<h1>Coucou</h1>");
ajouterBalise("<p>On est vraiment trop fort en js</p>");
ajouterBalise("<h2>Salut</h2>");



// role: afficher l'addition de deux chiffres
// paramètre: les chiffres à additionner
// return : rien

function afficherAddition(a, b) {
    ajouterBalise(`<p> ${a+b} </p>`)
}

afficherAddition(7,5)



// role: afficher le prenom dans le body
// paramètre: le prenom
// return : rien

function afficherPrenom(prenom) {
    ajouterBalise(`<p>Salut ${prenom}, comment ça va ?</p>`)
}

afficherPrenom("romain");



// role: afficher si l'adresse mail contient ou non un @
// paramètre: l'adresse mail a vérifier
// return : rien car elle affiche

function verifMail(mailAverif) {
    console.log(mailAverif.includes("@"))
    ajouterBalise(`<p>Le mail ${mailAverif} est valide</p>`)
}

verifMail("romain.mail@orange.fr");