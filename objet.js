// Declarer un objet
let personne = { 
nom: "Jean", 
age: 30, 
profession: "Développeur" 
}; 
console.log(personne);

// Acceder aux proprietes d un objet
 // -- Notation par point
 console.log(personne.nom); // Affiche "Jean" 
//  -- Notation par crochets
 console.log(personne["age"]); // Affiche 30

 console.log(` Je m'appelle ${personne.nom} j'ai ${personne.age} ans et je travaille en tant que ${personne.profession}`);

 // Ajouter une nouvelle valeur
personne.nationalite = "Senegalaise"; 
console.log(personne);
// Supprimer une valeur
delete personne.profession;
console.log(personne);
// Creer un objet etudiant (nom prenom age classe) ensuite afficher un message d information decrivant cet etudiant

let etudiant ={
    nom: "Diop",
    prenom: "Moustapha",
    age: 20,
    classe: "L1 GL"
};

console.info(`Je m'appelle ${etudiant.prenom +" "+etudiant.nom} j'ai ${etudiant.age} ans et je suis en ${etudiant.classe}`);

// Pour afficher la cle et la valeur avec for in

for(let cle in etudiant){
    console.log(cle+":"+etudiant[cle]);
    
}
// Declarer un objet
 let voiture = { 
     marque: "Toyota", 
     modele: "Corolla", 
     annee: 2020, 
  afficherDetails: function() { 
     console.log(`Marque: ${this.marque}, Modèle: ${this.modele}, Année: 
     ${this.annee}`); 
    } 
}; 
// Afficher l objet
voiture.afficherDetails();

         // EXERCICE DISCORD

// Exo1
let notes=[
    [12,15,14],
    [8,10,9],
    [17,18,16]
]
// 1-Afficher les notes de chaque etudiant
for(i=0;i<3;i++){
    console.log(`Les notes de l etudiant ${i+1} sont:${notes[i]}`);   
}
// autre methode avec for of
    /*  let i=0;
     for(let note of notes){
           console.log(Etudiant ${i+1} , notes:${note});
           i+=1;
     }*/
// - 
// 2- Calculer et afficher la moyenne de chaque etudiant
// 3- Creer un tableau de moyenne qui contient toutes les moyennes
let tabmoy=[];
for(let i=0 ; i < notes.length;i++){
    let somme=0;
    let note=notes[i];
    for(let j=0;j < note.length;j++){
        somme+=note[j];
    }
    let moy=somme/note.length;
    console.log(`Etudiant ${i+1}, moyenne: ${moy.toFixed(2)}`);
    // parsefloat pour convertir la chaine de caractere en nombre
    tabmoy.push(parseFloat(moy.toFixed(2)))   
}
// 4- Afficher la moyenne generale de la classe
console.log("Tableau des moyennes");
console.log(tabmoy);
let sommoy=0;
for(let moy of tabmoy){
    sommoy+=moy;
}
let moygen=sommoy/tabmoy.length;
console.log(`La moyenne generale est:${moygen.toFixed(2)}`);


// Exo3
let etudiants =[
  { nom:"Cheikh" , notes:[12,10,11]},
  { nom:"Fatou" , notes:[16,18,15]},
  { nom:"Moussa" , notes:[9,8,10]}
];
//  1- Afficher le nom et les notes de chaque etudiant
for(let etu of etudiants){
   console.log(`L etudiant ${etu.nom} a ces notes: ${etu.notes}`);  
}
// 2- Calculer et afficher la moyenne de chaque etudiant
for(let etu of etudiants){
    let notes = etu.notes;
    let som=0;
    let moy;
    for(let note of notes){
        som+=note;
        moy=som/notes.length;
    }
    console.log(`L etudiant ${etu.nom} a une moyenne de: ${moy.toFixed(2)}`);
// 3-
    let tabresult=[];
    let objetu= {nom:etu.nom,moyenne:moy};
    tabresult.push(objetu);
    console.log(tabresult)
}

// 3- Creer un tableau contenant le nom et le resultat
// for(let etu of etudiant){

//     let tabresult=[];
//     let objetu= {nom:etu.nom,moyenne:moy};
//     tabresult.push(objetu);
//     console.log(tabresult);
// }

// Eercice 2

let Etudiant = {
  nom: "Awa",
  prenom: "Sow",
  age: 21,
  notes: [13, 16, 15]
};

// 1. afficher le nom complet de l'etudiant
console.log(`Le nom complet de l'etudiant : ${Etudiant.nom+" "+Etudiant.prenom}`);
// 2. afficher les notes
console.log(`Les notes de ${Etudiant.nom} sont : ${Etudiant.notes}`);
// console.log(Etudiant.nom.join(","));
// 3. calculer et afficher la moyenne
let s = 0;
for (let i = 0; i < Etudiant.notes.length; i++) {
   s += Etudiant.notes[i];
}
let moy = s / Etudiant.notes.length;
console.log(`La moyenne est : ${moy.toFixed(2)}`);

// 4. ajouter une nouvelle note
Etudiant.notes.push(17);
console.log(`Les notes de ${Etudiant.nom} sont ${Etudiant.notes}`);


