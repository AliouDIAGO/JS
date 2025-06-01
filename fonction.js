// 1 - déclaration d'une fonction simple nommée
function saluer(){
    console.log("Bonjour");
}

//  appel de la fonction
saluer();
// saluer();

// 2 - déclaration d'une fonction nommée avec parametre
function salue(nom){
    console.log("Bonjour", nom);
}

salue("Modou"); // appel avec argument

// créer une fonction qui fait l'addition de 2 valeurs
function addition(x,y){
    console.log("La somme est : ", x+y);
}
addition(3,5);

// 3 - déclaration d'une fonction nommée avec parametre et valeur de retour
function produit(a,b){
    let p = a*b;
    return p;
    // console.log(p); ne fonctionnera jamais
    
}
// 1er afficher directement la fonction ----------------
console.log(`Le produit est : ${produit(3,5)}`); 
// 2em methode recuperer le retour dans une variable ---------------
let p = produit(34,20);
console.log(`Le produit est : ${p}`);

// 4 - Les fonctions anonymes
let afficherMessage = function(message) {
    console.log(message);
};
afficherMessage("Salut!");

// créer une fonction anonyme qui prend en parametre une age puis détermine et affiche si cette personne est majeur ou mineur
let majorité = function(age){
    if(age>=18){
        return "Majeur";
    }else if(age>0 && age<18){
        return "Mineur";
    }else{
        return "Majorité Indéfinie";
    }
};
console.log(majorité(20));



 
