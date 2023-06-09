

//Exercice7

function sommerWord(tab){

  let tableauNbCaractere = [];

  for (let i = 0; i < tab.length; i++) {
    const chaineDeCaracter = tab[i];
    tableauNbCaractere.push(chaineDeCaracter.length);
  }

    return tableauNbCaractere;
}

let word = ['papa', 'maman', 'coléoptère', 'manger', 'somnoler', 'arranger '];
  
console.log(sommerWord(word));
