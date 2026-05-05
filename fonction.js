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
    ajouterBalise(`<p class="red">Salut ${prenom}, comment ça va ?</p>`)
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



// role: retournera toujours la somme des deux valeurs renseignées en argument de cette fonction
// paramètre: deux valeurs
// return : le résultat

function addition(a , b) {
	return a+b;
}

let resultat = addition(5,4);
console.log(resultat);



// role: poser une question
// paramètre: la question
// return : la réponse de l'utilisateur à la question

function poseUneQuest(question) {
    let rep = prompt(question);  // return = prompt(question)
    return rep;
}

let reponse = poseUneQuest("comment aller vous");
console.log(reponse);  //alert ou confirm



// rôle : convertir un prix en euro en dollar, multiplier par 1,17
// paramètre: le prix a convertir et le taux de change
// return : le prix convertit

function convertion(prix, taux) {
	return prix * taux;
}

let resultat2 = convertion(3, 1.17);
console.log(`le prix convertit est de ${resultat2} dollars`);


// rôle : demander un prix et un taux de change a l'utilisateur et covertit le prix
// paramètre: le prix et taux de change
// return : prix convertit

function convertisseur() {
    // demande le prix a convertir
    let prix = parseFloat(prompt("quel prix veux tu convertir ?")) // typeOf

    // demande le taux
    let taux = parseFloat(prompt("a quel taux ?"))

    // convertit
    return prix * taux

    // retourne le résultat
    
}

let prixConvertit = convertisseur();
alert(`le prix convertit est de ${prixConvertit} dollars`);



// rôle : calculer une moyenne a partir des notes donné par l'utilistateur
// paramètre: rien
// return : la moyenne

function moyenne() {
    // demande les notes
    let noteMath = parseFloat(prompt("quel note avez vous eu en Math"))
    let noteFrançais = parseFloat(prompt("quel note avez vous eu en Francais"))
    let noteHistoire = parseFloat(prompt("quel note avez vous eu en Histoire"))
    let noteSvt = parseFloat(prompt("quel note avez vous eu en Svt"))

    // calcule la moyenne
    let moy = (noteMath + noteFrançais + noteHistoire + noteSvt)/4

    // returner la moyenne
    return moy;
}

let moyenneEleve = moyenne();
alert(`votre moyenne est de ${moyenneEleve}`);
