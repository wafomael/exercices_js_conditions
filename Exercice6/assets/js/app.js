

//Exercice6
function revers(tab){
    let tabRevers = [];
    for(let i = tab.length - 1 ; 0 <= i; i --){
      tabRevers.push(tab[i])
    }
    return tabRevers;
  }
let mot = ''
console.log(`[${lettre}] à l'envers ça donne [${revers(lettre)}]`);
