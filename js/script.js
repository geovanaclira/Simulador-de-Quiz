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

// Função para embaralhar as perguntas
function embaralhar(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
embaralhar(perguntasERespostas);

// Função do Quiz

let nomeUsuario = prompt("Olá! Digite o seu nome para iniciarmos o quiz: ");
alert(`Bem-vindo, ${nomeUsuario}! Boa sorte no quiz!`);

function quiz(perguntasERespostas) {
    let pontuacao = 0;
    const respostasAluno = [];

    for (let i = 0; i < perguntasERespostas.length; i++) {
        let questao = perguntasERespostas[i];
        let resposta;
    
        do {
            resposta = prompt(
                `Pergunta: ${questao.pergunta}\n${questao.alternativas.join("\n")}\nDigite A, B ou C:`
            );

            if (resposta === null) return; 

            resposta = resposta.toUpperCase();

            const respostaValida = ["A", "B", "C"].includes(resposta);

            if (!respostaValida) {
                alert("Resposta inválida! Digite apenas A, B ou C.");
            }

        } while (!["A", "B", "C"].includes(resposta));
    
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
            `Pergunta: ${perguntasERespostas[i].pergunta}\n` +
            `Correta: ${perguntasERespostas[i].respostaCorreta} | Sua resposta: ${respostasAluno[i]}\n`
        );
    }

    if (pontuacao === perguntasERespostas.length) {
        alert("Excelente! Você tem um conhecimento sólido em programação");
    }
    else if (pontuacao >= perguntasERespostas.length /2){
        alert( "Muito bom! Você está no caminho certo.");
    }
    else {
        alert("Continue estudando! A prática leva à perfeição.");
    }
}

quiz(perguntasERespostas);
