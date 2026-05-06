// l'ordinateur pioche un nombre aleatoire
// role: Génère un nombre aléatoire entre 1 et 20
// paramètre : rien
// return: renvoie un chiffre aléatoire

function chiffreAleatoire () {
    let nmbrPioche = Math.floor(Math.random()*20)+1
    return nmbrPioche
}

// demande au joueur de deviner
// role: poser la question
// paramètre : rien
// return: la reponse du joueur

function reponseUtilisateur () {
    let reponseUtili = parseFloat(prompt("choisi un nombre entre 1 et 20 ?"));
    return reponseUtili;
}

// indique à l'utilisateur plus haut ou plus bas
// role: compare
// paramètre : chiffre pioché , réponse de l'utilisateur
// return: rien

function comparechiffre (nbrUtilisateur, nmbrPioche) {

    if (nbrUtilisateur > 20) {
        alert ("erreur")
    }
    // si le nombre est trop petit
    else if (nbrUtilisateur < nmbrPioche) {
        alert ("trop petit")
    }
    // si le nomnre est trop grand
    else if (nbrUtilisateur > nmbrPioche) {
        alert ("trop grand")
    }
    // si il a trouvé le nombre
    else {
        alert ("Bravo tu as trouvé")
    }
}



// role: jouer le scénario -> choisi un nombre aléatoire, pose la question, compare les deux nombres
// paramètre: deux nombres
// return: rien car elle affiche

function lancerFonctions(){
    let choixOrdi = chiffreAleatoire();
    let choixJoueur = reponseUtilisateur();
    let trouve = comparechiffre(choixJoueur, choixOrdi);
}

lancerFonctions();