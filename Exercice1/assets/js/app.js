//Exercice1


function sommer(tab){
  let somme = 0;
  for(let i=0;i <tab.length;i++){
    somme = somme + tab[i];
  }
  return somme;
}


let nbL = [1,2,3,4,5,6,7,8,9];
console.log(`la somme de [${nbL}] est egale à ${sommer(nbL)}`);