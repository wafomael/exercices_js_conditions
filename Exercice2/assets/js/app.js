
//Exercice2

function pair(tab){
    const pairT = tab.filter(nombre => nombre % 2 === 0);
    
    return pairT;
}
  
let nbL = [1,2,3,4,5,6,7,8,9];
console.log(`les nombre paire de [${nbL}] sont [${pair(nbL)}]`);

