/*

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


ficheEleveDansDom(promo11)



// exo recette

// V1
let recette={
  nom:"poulet rôti au thym et à l'ail",
  difficulte: "Facile",
  tempPreparation: "15 min",
  tempCuisson: "1h 15 min",
  nbrPortions: 6,
  ingredients : ["huile d'olive","beurre fondu","feuilles de thym","sel","poivre","ail"]
}

console.log(`
    Recette du ${recette.nom} 
    Difficulté: ${recette.difficulte} 
    Temp de préparation: ${recette.tempPreparation} 
    Temp de cuisson: ${recette.tempCuisson} 
    pour ${recette.nbrPortions} personnes 
    listes des ingrédients : ${recette.ingredients}
    `);
*/
// V2


function ajouterAuBody(trucAafficher){
    document.querySelector("body").innerHTML += trucAafficher
}

let recettes = [
  {
    nom: "poulet rôti au thym et à l'ail",
    difficulte: "Facile",
    tempPreparation: "15 min",
    tempCuisson: "1h 15 min",
    nbrPortions: 6,
    ingredients: ["huile d'olive","beurre fondu","feuilles de thym","sel","poivre","ail"]
  },
  {
    nom: "spaghetti à la bolognaise",
    difficulte: "Moyenne",
    tempPreparation: "20 min",
    tempCuisson: "40 min",
    nbrPortions: 4,
    ingredients: ["spaghetti","viande hachée","oignon","carotte","tomate concassée","ail","huile d'olive","sel","poivre"]
  },
  {
    nom: "salade César",
    difficulte: "Facile",
    tempPreparation: "15 min",
    tempCuisson: "0 min",
    nbrPortions: 2,
    ingredients: ["laitue romaine","croûtons","parmesan râpé","filet de poulet","sauce César","sel","poivre"]
  }
];


// role : récupérer les recettes une par une pour les afficher
// paramètre : le tableau des recettes
// return: rien

function ficheRecette(tableauRecettes) {

    // récupérer les recettes une par une
    tableauRecettes.forEach(recette => {
        let ingredientsListe = "";

        recette.ingredients.forEach(ingredient => {
            ingredientsListe += `<li> ${ingredient}</li>`
            console.log(ingredientsListe)
            
        });
        // Quan il en tiens une il l'affiche
        ajouterAuBody(`
            <div>
                <h2>Titre rectte: ${recettes[0].nom}</h2>
                <p>Difficulté: ${recettes[0].difficulte}</p>
                <p>Temps de préparation: ${recettes[0].tempPreparation}</p>
                <p>Temps de cuisson: ${recettes[0].tempCuisson}</p>
                <p>Nombre de portions: ${recettes[0].nbrPortions}</p>
                <p>Listes des ingrédients : </p>
                <ul>
                    ${ingredientsListe}
                </ul>
            </div>
        `)
    });
}
