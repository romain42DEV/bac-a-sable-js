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