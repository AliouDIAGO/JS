// Tableau
// Declaration
let fruits = ["Pomme", "Banane", "Orange", "Fraise"];
console.log("Le 1er fruit est : ", fruits[0]);
console.log("taille du tableau : ", fruits.length);

// Modification
console.log("Le 4er fruit avant Modification est : ", fruits[3]);
fruits[3] = "ananas";
console.log("Le 4er fruit apres Modification est : ", fruits[3]);

// Ajout
// Ajout a la fin
console.log(fruits);
fruits.push("poire");
console.log(fruits);
// Ajout au debut
fruits.unshift("clematine");
console.log(fruits);
// Ajout dans le tableau
fruits.splice(2,0,"cerise","abricot");
console.log(fruits);

// Supprimer
// pop Supprime la derniere valeur du tableau (fin)
let val = fruits.pop();
console.log(fruits);
console.log("La valeur supprimer est : ",val);
// shift Supprime debut
val = fruits.shift();
console.log(fruits);
console.log("La valeur supprimer est : ",val);
// Supprimer dans le tableau
val = fruits.splice(2,1);
console.log(fruits);
console.log("La valeur supprimer est : ",val);


// Affichage avec for
console.log("Affichage avec for ==============");
for(let i=0 ; i<fruits.length ; i++){
    let fruit = fruits[i];
    console.log(fruit);
}

// while
console.log("Affichage avec while ==============");

i=0;
while(i<fruits.length){
     let fruit = fruits[i];
     console.log(fruit);
     i++;
}


// for in
console.log("Affichage avec for in ===============");
for(let key in fruits){
     console.log(fruits[key]);
}

// for of
console.log("Affichage avec for of =================");
for(let value of fruits){
     console.log(value);
}

// Exercice 

let tab=[];
for(let i=0 ; i<5 ; i++){
    let n = parseInt(prompt("Donnez une valeur"));
    tab[i]=n  ;
}

console.log("Les valeur du tableau sont :")
for(let i=0 ; i<5 ; i++){
    console.log(tab[i]);
}

for(let i=0 ; i<5 ; i++){
    if(tab[i]%2 === 0){
        console.log(`${tab[i]} est pair`);
        
        // console.log(tab[i],"est pair");
    }

     if(tab[i]%2 != 0){
        console.log(`${tab[i]} est impair`);
        
        // console.log(tab[i],"est impair");
    }

    let cpt = 0;
    for(let j=1 ; j<=tab[i] ; j++){
        if(tab[i]%j === 0){
            cpt += 1;
        }
    }
    if(cpt == 2){
        console.log(`${tab[i]} est un nombre premier`);
        
        // console.log(tab[i],"est un nombre premier");
    }
}
