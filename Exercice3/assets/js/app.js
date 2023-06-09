

//Exercice3

function motsC(tab){
    const motTab = tab.filter(mot => 5 < mot.length);
    
    return motTab;
}


let word = [
    'papa', 'maman', 'coléoptère', 
    'manger', 'somnoler', 'arranger '
];
  console.log(`le nommbre de mots de plus de 5 carractere est de ${motsC(word).length}`);