let auteur = { // un objet

prenom:'Ernest', // clé "prenom" valeur de stockage "Ernest"
nom:'Hemingway', // clé "nom" valeur de stockage "Hemingway"
dateNaissance : '21/07/1899',// clé "dateNaissance" valeur de stockage "21/07/1899"
dateMort : '02/07/1961',// clé "dateMort" valeur de stockage "02/07/1961"
livre : 'Le vieil homme et la mer',// clé "livre" valeur de stockage "Le vieil homme et la mer"
recompenses: ["prix pullizer" , "prix nobel"],// clé "recompenses" valeur de stockage "prix pullizer" "prix nobel"
}

console.log(`le prenom de l'auteur est ${auteur.prenom} son nom de famille est ${auteur.nom} il a gagné ${auteur.recompenses.length}`)


let promo11 = [

    {
        prenom : "alexis",
        age : 19,
        ville : "St Etienne",
        job : "gagner de l'argent"
    },
    {
        prenom : "Romain",
        age : 27,
        ville : "St Etienne", 
        job : "data scientist"
    },
    {
        prenom : "Ludivine",
        age : 29,
        ville : "St Etienne", 
        job : "formatrice"
    },
    {
        prenom : "Nico",
        age : 42,
        ville : "St Etienne", 
        job : "eleveur de poulet"
    },
]

// role: afficher des fiche eleve dans le dom
// paramètre: tableauPromo11    
// return :rien car elle affiche

function ficheEleveDansDom(tableauPromo11) {
    // prendre les eleves un par un
    tableauPromo11.forEach(eleve => {
        //écrire leur prenom, leur age et leur ville en console

        //apeller ma fonction dont le role est d'envoyer dans le dom
        ajouterAuBody(`

            <div class="bg-blue text-white mb-50 w-30 txt-center">
                <h2>${eleve.prenom}</h2>
                <p>${eleve.age} ans</p>
                <p>${eleve.ville}</p>
                <p>job : ${eleve.job}</p>
            </div>
        `)
    });

}

function ajouterAuBody(trucAafficher){
    document.querySelector("body").innerHTML += trucAafficher
}

ficheEleveDansDom(promo11)