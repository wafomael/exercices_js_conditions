


//Exercice8

function unique(tab){
    let test = [];
    let uniqueTab = [];
    let nb;
    
    for(let i=0;i <tab.length;i++){
      test = []
      nb = tab[i];
      test = tab.filter(nbr => nb === nbr)
      if(test.length === 1){
        uniqueTab.push(tab[i]);
      }
    }
    return uniqueTab;
}
  
let nbLs = [1,2,3,4,5,6,72,3,4,5,2,8,9,2,3,4,5,2,8,9];
console.log(`la liste [${nbLs}] sans repetition donne [${unique(nbLs)}]`);



