


//Exercice5

function first(nb){
    if (nb <= 1) {
      return 'n est pas premier';
    }
    
    for (let i = 2; i <= Math.sqrt(nb); i++) {
      if (nb % i === 0) {
        return 'n est pas premier';
      }
    }
    
    return 'est premier';
}

let nb = parseInt(prompt("entrer un nombre"));
alert(`[${nb}] ${first(nb)}`);



