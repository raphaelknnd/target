const prompt = require("prompt-sync")()

const alimenta = (numero) => {
    //esta função é responsável por alimentar o array com a sequência de fibonacci até um número maior que o informado pelo usuário
    let array = [0, 1]

    while(true){
        array.push((array[array.length - 1]) + (array[array.length - 2]))

        if (numero < array[array.length - 1]){
            return array
        }
    }
}

const compara = (entrada) => {
    let sequencia = alimenta(entrada)
    let indice = 0

    while (indice < sequencia.length){
        if (entrada == sequencia[indice]){
            return `O número ${entrada} pertence à sequência`
        }

        indice++
    }
    return `O número ${entrada} não pertence à sequência`
}

let entrada = prompt("Insira um número: ")
console.log(compara(entrada)) 
