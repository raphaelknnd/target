# Desafio Target - Estágio
## Questão 1
Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência. 

IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;

![questão 1](https://i.ibb.co/mJMvsfP/questao1.png)

## Questão 2
Escreva um programa que verifique, em uma string, a existência da letra ‘a’, seja maiúscula ou minúscula, além de informar a quantidade de vezes em que ela ocorre.

IMPORTANTE: Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;

![questão 2](https://i.ibb.co/1vcVtrN/questao2.png)

## Questão 3
Observe o trecho de código abaixo: int INDICE = 12, SOMA = 0, K = 1; enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; } imprimir(SOMA);. Ao final do processamento, qual será o valor da variável SOMA?

R = 77

## Questão 4
Descubra a lógica e complete o próximo elemento:
- a) 1, 3, 5, 7, ___ R = 9 (somas de 2 em 2 ou a sequência de números ímpares)
- b) 2, 4, 8, 16, 32, 64, ____ R = 128 (o próx elemento é o dobro do atual)
- c) 0, 1, 4, 9, 16, 25, 36, ____ R = 49 (soma-se o elemento atual ao próximo número ímpar. Ex: 0 + 1 = 1, 1 + 3 = 4)
- d) 4, 16, 36, 64, ____ R = 100 (Cada número é o quadrado dos primeiros números pares)
- e) 1, 1, 2, 3, 5, 8, ____ R = 13 (Sequencia de fibonacci, o próximo número é o resultado da soma dos dois últimos números)
- f) 2,10, 12, 16, 17, 18, 19, ____ R = Não me parece existir um padrão bem definido. Analisando vejo que de 2 para 10 há uma diferença de 8, de 10 para 12 uma diferença de 2 e de 12 para 16 uma diferença de 4, mas a partir daí as diferenças são de apenas 1 para todos. Seguindo esse raciocínio a resposta seria **20**


## Questão 5
Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em salas diferentes. Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar os interruptores quantas vezes quiser. Seu objetivo é descobrir qual interruptor controla qual lâmpada. Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, qual interruptor controla cada lâmpada?

R = Ligaria o interruptor 1 por tempo suficiente para a lâmpada aquecer e depois ligaria o interruptor 2. Imediatamente iria até a primeira sala e verificaria: Se a lâmpada estiver quente, trata-se do interruptor 1, se estiver ligada trata-se do interruptor 2 e se estiver acessa trata-se do interruptor 3. Vamos assumir que a lâmpada da primeira sala fosse controlada pelo interruptor 3. O próximo passo seria ligar qualquer um dos outros dois interruptores que sobraram e verificar se a sala acessada está com a lâmpada acesa ou apagada e associar ao seu interruptor.