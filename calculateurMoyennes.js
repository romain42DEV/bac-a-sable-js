// jeu du Guess the number

//l'ordinateur pioche un nombre aleatoire
//role : choisir un nombre entre 1 et 20
//parametre : non
//return : nombre pioché
function nbrAleatoire() {

    // on pioche un nombre aléatoire entre 0 et 20 (non inclut normalement, c'est pourquoi on rajoute le +1) 
    let nbrPioche = Math.floor(Math.random() * 20) + 1
    return nbrPioche
}

//role : demander au joueur de deviner
//parametre  : non 
//return : la reponse du joueur 
function reponseUtilisateur() {

    // pose la question 
    //parseFloat permet de transformer la réponse au prompt qui est un string en number
    let repUtili = parseFloat(prompt("devine le chiffre auquel je pense. Il se situe entre 1 et 20"))

    //retourner la reponse
    return repUtili;
}


//role : indique a l'utilisateur plus haut ou plus bas en focntion de sa réponse 
//parametre : le chiffre pioché par l'ordi, la réponse de l'utilisateur 
//return : rien car elle affiche 
function indiquePlusOuMoins(nbrPioche, choixUtilisateur) {

    // si le nombre choisi est inferieur à la réponse utilisateur -> "c'est moins"
    if (choixUtilisateur > 20) {
        alert("ereur")
    }

    else if (nbrPioche < choixUtilisateur) {
        alert("c'est moins")
    }

    // si le nombre choisi est supérieur à la réponse utilisateur -> "c'est plus"
    else if (nbrPioche > choixUtilisateur) {
        alert("c'est plus")
    }

    // si le nombre choisi = réponse utilisateur -> "bravo"
    else {
        alert("bravo ! ")
    }


}

//role : lancer le scenario de jeu 
//parametre : non
//return : non 
function scenario() {

    let choixOrdi = nbrAleatoire();
    let choixJoueur = reponseUtilisateur();
    indiquePlusOuMoins(choixOrdi, choixJoueur);


}

scenario()







// jeu du chifoumi

let choixOrdi;
let choixUtili;

// Fonction choix de l'utilisateur
function choixUtilisateur() {
  // Role : Demander à l'utilisateur de choisir une option par le biais d'un prompt et transforme la reponse pour la mettre en majuscule 
  //parametre : aucun
  choixUtili = prompt("Choisissez pierre, Papier ou Ciseaux :").toUpperCase();
  return choixUtili;
}

// fonction choix de l'ordinateur
function choixOrdinateur() {
  // Role : Générer un nombre aléatoire entre 0 et 2 pour représenter le choix de l'ordinateur. Le chiffre est ensuite associé à une chaine de caractère
  // parametre : aucun
  var choixOrdiNum = Math.floor(Math.random() * 3); // 0: pierre, 1: Papier, 2: Ciseaux

  // Convertir le nombre en une chaîne de caractères
  if (choixOrdiNum === 0) {
    choixOrdi = "PIERRE";
  } else if (choixOrdiNum === 1) {
    choixOrdi = "PAPIER";
  } else {
    choixOrdi = "CISEAUX";
  }

  return choixOrdinateur;
}

// fonction afficher les choix
function afficherChoix() {
  // Role : Afficher le choix de l'utilisateur et de l'ordinateur dans une alerte
  // parametre : aucun
  alert(`Vous avez choisi :  ${choixUtili} 
    L'ordinateur a choisi : ${choixOrdi}`);
}

// fonction determiner le gagnant
function determinerGagnant() {
  // Role : Comparer les choix de l'utilisateur et de l'ordinateur pour determiner le gagnant et l'afficher en alert
  // parametre : aucun
  if (choixUtili === choixOrdi) {
    alert("Égalité !");
  } else if (
    (choixUtili === "PIERRE" && choixOrdi === "CISEAUX") ||
    (choixUtili === "PAPIER" && choixOrdi === "PIERRE") ||
    (choixUtili === "CISEAUX" && choixOrdi === "PAPIER")
  ) {
    alert("Vous avez gagné !");
  } else {
    alert("L'ordinateur a gagné !");
  }
}

//Focntion jouer pour lancer mon jeu
function jouer() {
  // Role : Lancer le jeu en jouant successivement les fonctions
  // parametre : aucun
  choixUtilisateur();
  choixOrdinateur();
  afficherChoix();
  determinerGagnant();
}

jouer();