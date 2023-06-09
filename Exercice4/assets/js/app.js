

//Exercice4

function max(tab){
    let maxi = tab[0];
    for(let i=1; i < tab.length; i ++){
      if(maxi < tab[i]){
        maxi = tab[i];
      }
    }
    return maxi;
}

let nbL = [1,2,3,4,5,6,7,8,9];
console.log(`les nombre le plus grand de [${nbL}] et [${max(nbL)}]`);


