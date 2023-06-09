

//Exercice9
let words = prompt('Entrer une phase');

let tabWords = words.split(" ")

if(tabWords[0].length > 1){
    alert(`il y a ${tabWords.length} mot(s) dans [${words}]`)
}else{
    alert("il y a 0 mot")
}

