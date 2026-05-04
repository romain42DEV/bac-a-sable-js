console.log("salut" + " romain"); // console.log() -> écrit dans la console

let age = 17; // une variable dont le contenu peut évoluer
const vitesseLumière = 300000; // une variable dont le contenu n'évoluera jamais: une constante
console.log(age);

//vitesseLumière = 380000;
age = 24;

console.log(age);
console.log(vitesseLumière);

let salut = "bonjour Ludivine, ça va ?";
let connecte = false;
console.log(connecte);
console.log(salut);
age = age + 1;
console.log(age);

//let age = 5 * "2";
//console.log(age);

let i = 0;

i = i + 1; // la nouvelle valeur de i = l'ancienne valeur de i + 1
console.log(i);

i = i + 1;
console.log(i);

i = i + 1;
console.log(i);

i = i + 1; // i += 1 ou i++   i = i + 2 ou i += 2
console.log(i);



let prenom = "romain"; // on peut changer le prenom et le chagement se fait sur nomComplet
let nom = "dupont"; // let nom = " dupont";

//let nomComplet = prenom + " " + nom;
let nomComplet = `le prenom est ${prenom} et le nom est ${nom}`;
console.log(nomComplet);


let comment = `Bonjour ${prenom}, comment vas tu aujourd'hui ?`;
console.log(comment);
console.log("salut " + prenom + ", comment vas tu aujourd'hui ?");
console.log(`Bonjour ${prenom}, comment vas tu aujourd'hui ?`);

let phrase = "il fait beau aujourd'hui";
console.log(phrase);
let longueurPhrase = phrase.length;
console.log(phrase.length); // console.log(elephant.length);
console.log(`la phrase : ${phrase} contient ${longueurPhrase} caractère`);


let mot = "chateau";
console.log(mot.replace("t","p")); // replaceall

mot = "pelican";
let dernierePos = mot.length-1
console.log(mot.indexOf("p"));
console.log(mot[6]);
console.log(mot.charAt(0));
console.log(mot[mot.length-1]); // console.log(mot[dernierePos])