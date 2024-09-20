const prompt = require("prompt-sync")()

const verificacao = (entrada) => {
    let indice = 0
    let countA = 0

    while(indice < entrada.length){
        if(entrada[indice] == 'A' || entrada[indice] == 'a'){
            countA++
        }

        indice++
    }

    if(countA == 0){
        return "Não existem letras 'a' na string informada"
    } else {
        return `Existem ${countA} letras 'a' na string informada`
    }
}

entrada = prompt("Informe a string: ")
console.log(verificacao(entrada))