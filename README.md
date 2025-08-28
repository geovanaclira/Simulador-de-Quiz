 # Simulador de Quiz com JavaScript
- Projeto para fins acadêmicos, que consiste na criação de um quiz com múltiplas escolhas que testará conhecimentos básicos de programação.

Construindo um Quiz Interativo com JavaScript
Este arquivo README explica os principais conceitos e trechos de código para criar um quiz interativo simples usando JavaScript.

A Base de Dados - O Cartão de Perguntas
A estrutura principal do nosso quiz é um array de objetos, onde cada objeto representa uma pergunta.

JavaScript

const perguntasERespostas = [
    {
        pergunta: "...",
        alternativas: ["...", "..."],
        respostaCorreta: "C"
    },
    // ...
];
O que este código faz?

perguntasERespostas é o nosso array, que funciona como uma lista de cartões.

Cada "cartão" é um objeto que contém todas as informações de uma pergunta: o texto da pergunta, as alternativas de resposta e a resposta correta.

Usamos a palavra-chave const para declarar esse array. Isso significa que a lista de perguntas não pode ser alterada ou substituída durante a execução do quiz, garantindo que a base do jogo permaneça intacta.

O Placar e o Caderno de Anotações
Antes de começar o jogo, precisamos de variáveis para rastrear a pontuação e as respostas do jogador.

JavaScript

let pontuacao = 0;
let respostasAluno = [];
O que este código faz?

pontuacao: Essa variável é o nosso placar. Ela começa em zero e vai aumentar a cada resposta correta. Usamos let porque o valor dela será alterado (incrementado) ao longo do jogo.

respostasAluno: Este é um array vazio que usaremos como um "caderno de anotações". Nele, vamos armazenar a resposta que o jogador dá para cada pergunta.

O Mecanismo do Jogo: o Loop for
O loop for é a "engrenagem" que faz o nosso quiz rodar, garantindo que cada pergunta seja exibida.

JavaScript

for (let i = 0; i < perguntasERespostas.length; i++) {
    // ...
    código para fazer a pergunta ...
}
O que este código faz?

O loop for é ideal para quando sabemos exatamente quantas vezes queremos que o código se repita. No nosso caso, queremos que ele se repita para cada pergunta na lista.

let i = 0: Iniciamos o nosso contador i em 0, que é a posição da primeira pergunta no array.

i < perguntasERespostas.length: O loop continua enquanto o contador i for menor que o número total de perguntas.

i++: A cada repetição, o contador i é incrementado em 1, movendo o loop para a próxima pergunta.

Garantindo a Resposta Certa: o Loop do-while
Para evitar que o jogador digite uma resposta inválida, como 'X' ou '123', usamos o loop do-while.

JavaScript

do {
    resposta = prompt(...);
} while (resposta !== "A" && resposta !== "B" && resposta !== "C");
O que este código faz?

O loop do-while é perfeito para essa situação, pois ele garante que o código dentro do do seja executado pelo menos uma vez.

A cada repetição, a prompt solicita uma resposta ao jogador.

Em seguida, a condição no while é verificada. Se a resposta for diferente de "A", "B" ou "C", o loop reinicia, e a prompt é exibida novamente, forçando o jogador a inserir uma resposta válida.

A Lógica do Jogo: if e else
Após o jogador responder, o quiz precisa tomar uma decisão: a resposta está certa ou errada? Para isso, usamos estruturas condicionais.

JavaScript

if (resposta === questao.respostaCorreta) {
    // Acertou
} else {
    // Errou
}
O que este código faz?

O if verifica se a resposta do jogador (resposta) é exatamente igual (===) à resposta correta da pergunta (questao.respostaCorreta).

Se a condição for verdadeira, o código dentro do bloco if é executado (por exemplo, a pontuação é aumentada e uma mensagem de "parabéns" é exibida).

Se a condição for falsa, o código dentro do bloco else é executado (uma mensagem de erro com a resposta correta é exibida).

O Fim do Jogo e o Gabarito
Quando o loop do jogo termina, é hora de encerrar e exibir os resultados.

JavaScript

alert(`Fim de Quiz! ...`);
console.log("---- GABARITO ----");
// ... loop para o gabarito
O que este código faz?

A função alert() é usada para exibir a pontuação final para o jogador.

A função console.log() é uma ferramenta crucial para desenvolvedores. Ela não é visível para o jogador, mas permite "debugar" o código, ou seja, verificar se tudo está funcionando como esperado. Neste caso, ela pode ser usada para mostrar um gabarito completo no console do navegador, que é útil para a fase de testes do desenvolvedor.
