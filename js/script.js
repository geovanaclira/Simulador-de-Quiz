//Arrays de perguntas e respostas
const perguntasERespostas = [
    {
        pergunta: "Qual estrutura de repetição utilizamos quando sabemos a quantidade exata das repetições no código?",
        alternativas: ["A) While", "B) Do-While", "C) For"],
        respostaCorreta: "C"
    },

    {
        pergunta: "Em JavaScript, qual a principal diferença entre 'let' e 'const' para declarar variáveis?",
        alternativas: ["A)'let' é para strings e 'const' é para números", "B) 'const' permite reatribuição e 'let' não", "C)'let' permite reatribuição e 'const' não"],
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
function iniciarQuiz() {
  // Pega uma pergunta aleatória do array
  const perguntaAleatoria = perguntasERespostas[Math.floor(Math.random() * perguntasERespostas.length)];

  // Constrói a mensagem para o usuário
  let mensagem = perguntaAleatoria.pergunta + '\n\n';
  perguntaAleatoria.alternativas.forEach(alt => {
    mensagem += alt + '\n';
  });

  // Pede a resposta do usuário
  const respostaUsuario = prompt(mensagem);

  // Verifica a resposta e exibe o resultado
  if (respostaUsuario && respostaUsuario.toUpperCase() === perguntaAleatoria.respostaCorreta) {
    alert('Parabéns! Você acertou!');
  } else {
    alert('Que pena! Resposta incorreta. A resposta certa é: ' + perguntaAleatoria.respostaCorreta);
  }
}

// chamada da Função para rodar o quiz.
iniciarQuiz();

