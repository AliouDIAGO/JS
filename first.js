// console.log("Hello les nuls");
// Les bases du JS

// Les variables et constante




var nom="Aliou"; //porté global
let a =10; //porté local

console.log("Bonjour",nom);

const PI=3.14;
console.log("La valeur de PI est :", PI);

//La valeur d'une variable peut changer
nom = "test";
console.log("Bonjour maintenant a",nom);
console.log("Le type de la variable nom est ",typeof nom);
console.log("Le type de la variable a est ",typeof a);
let test;
console.log("Le type de la variable a est ",typeof test);
let b = false;
console.log("Le type de la variable b est ",typeof false);
let bizare = null;
delete bizare;
console.log("Le type de la variable a est ",typeof bizare);


// Impossible de changer La valeur d'une variable peut changer
// PI=3.14;
// console.log("La nouvelle valeur de PI est :",PI);

// Opérateurs
    //Opérateurs d'affectation =, +=, -=, *=, /= ...
    //Opérateurs incrémentation ++, décrémentation --
    // Opérateurs concaténation +
    console.log("Bonjour le"+" monde");




// Opérateurs arithmétique +,-,*,/,%,**
let x=10;
let y=5;
console.log("La somme de",x,"+",y,"=",x+y);
console.log("La différence de",x,"-",y,"=",x-y);
console.log("La produit de",x,"*",y,"=",x*y);
console.log("La Quotient de",x,"/",y,"=",x/y);
console.log("La reste de",x,"%",y,"=",x%y);
console.log("L'exponentielle de",x,"**",y,"=",x**y);

// Opérateurs logique &&, ||, !
//Opérateurs de comparaison >,>=,<,<=,==,!=,===,!==
console.log(2=='2');
console.log(2==='2');
console.log(2!==7);

// Les structures de controles
// Les structures conditionnelle simple (parse ou cast pour convetir)
let age = parseInt(prompt("Donner votre age"));
// console.log(typeof age);
// if(age>18){
//     console.log("Vous etes majeur");
// }

// Les structures conditionnelle alternative

// if(age>18){
//     console.log("Vous etes majeur");
// }else{
//     console.log("Vous etes mineur");
// }

//Les structures conditionnelle multiple
if(age>0 && age <=18){
    console.log("Vous etes mineur");
}else if(age>=18 && age<30){
    console.log("Vous etes majeur");
}else if(age>=30 && age<75){
    console.log("Vous etes vieux");
}else if(age>=75 && age<90){
    console.log("Vous etes Papi");
}else if(age>=90 && age<=110){
    console.log("Vous etes Fauscillle");
} else{
    console.log("Mettez un age raisonnbale");
}

//Les structures conditionnelle a choix multiple

let choix =prompt("Donner votre fruit préféré");
switch (choix.toLowerCase()){
    case "orange":
        console.log("Votre fruit préféré est l'orange");
        break;
    case "ananas":
        console.log("Votre fruit préféré est l'Ananas");
        break;
    case "pomme":
        console.log("Votre fruit préféré est le Pomme");
        break;
    default:
        console.log("N'exite pas");
        break;
}

//Les structures conditionnelle a choix multiple
let estMajeur = age >=18 ? "Vous etes Majeur" :"Vous etes Mineur" ;
console.log("Le ternaire affiche que : ", estMajeur);





