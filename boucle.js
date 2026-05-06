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
