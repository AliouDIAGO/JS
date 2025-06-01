// Structures itératives
// for
for(let i=0 ; i<5 ; i++){
    console.log ("bonjour");
}

for (let i=1 ; i<=100 ; i++){
    let cpt = 0;
    for(let k=1 ; k<=i ; k++){
        if(i%k === 0){
            cpt+=1;
        }
    }
    if(cpt == 2){
        console.log(i,"est premier");
    }
}

// while

let i=1;
while(i<=5){
    console.log("hello");
    i++;
}

// Nombres parfaits
let j=1;
while(j<=10000){
    let som = 0;
    let k = 1;
    while(k<j){
        if(j%k === 0){
            som += k;
        }
        k+=1;
    }
    if(som === j){
        console.log(j,"est parfait");
    }
    j+=1;
}

// do...while

let n=5;
let rep;

do{
    rep= parseInt(prompt("Donnez un nombre"));
    if(n === rep){
        console.log("Tu a trouvé");
    }
    else if (rep < n){
        console.log("Le nombre est trop petit");
    }
    else{
        console.log("Le nombre est trop grand");
    }
}while( rep !=n);