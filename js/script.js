//Arrays de perguntas e respostas
const perguntasERespostas = [
    {
        pergunta: "Qual estrutura de repetição utilizamos quando sabemos a quantidade exata das repetições no código?",
        alternativas: ["A) While", "B) Do-While", "C) For"],
        respostaCorreta: "C"
    },

    {
        pergunta: "Em JavaScript, qual a principal diferença entre 'let' e 'const' para declarar variáveis?",
        alternativas: ["A) 'let' é para strings e 'const' é para números", "B) 'const' permite reatribuição e 'let' não", "C) 'let' permite reatribuição e 'const' não"],
        respostaCorreta: "C"
    },

    {
        pergunta: "Qual operador lógico é usado para representar 'OU' (OR)?",
        alternativas: ["A) &&", "B) ||", "C) !="],
        respostaCorreta: "B"
    },

    {
       pergunta: "Qual estrutura é usada para testar vários valores da mesma variável?",
       alternativas: ["A) Switch", "B) While", "C) Do-While"],
       respostaCorreta: "A" 
    }
];

let pontuacao = 0;
let respostasAluno = [];

for (let i = 0; i < perguntasERespostas.length; i++) {
    let questao = perguntasERespostas[i];
    let resposta;

    do {
        resposta = prompt(
             `Pergunta ${i + 1}: ${questao.pergunta}\n${questao.alternativas.join("\n")}\nDigite A, B ou C:`
        ).toUpperCase();
    } while (resposta !== "A" && resposta !== "B" && resposta !== "C");

    respostasAluno.push(resposta);

    if (resposta === questao.respostaCorreta) {
        pontuacao++;
        alert("Parabéns, você acertou!");
    } else {
       
        alert(`Você errou! A resposta correta é: ${questao.respostaCorreta}`);
    }
}

alert(`Fim de Quiz! \nVocê acertou ${pontuacao} de ${perguntasERespostas.length} perguntas!`);

console.log("---- GABARITO ----");
for (let i = 0; i < perguntasERespostas.length; i++) {
    console.log(
        "Pergunta " + (i + 1) + ": " + perguntasERespostas[i].pergunta +
        " | Correta: " + perguntasERespostas[i].respostaCorreta +
        " | Sua resposta: " + respostasAluno[i]
    );
}


