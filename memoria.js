const cenas = [
    { 
        id: 1, 
        texto: "O Pequeno Príncipe está no seu planeta com a rosa. Ele decide se deve sair para explorar ou ficar mais um pouco com a rosa.",
        escolhas: [
            { texto: "Ficar com a rosa", proximaCena: 2 },
            { texto: "Partir para explorar", proximaCena: 3 }
            
        ]
        
    },
    { 
        id: 2, 
        texto: "Depois de passar um tempo com a rosa, o Pequeno Príncipe decide que está na hora de partir em busca de novas aventuras.",
        escolhas: [
            { texto: "Partir para explorar", proximaCena: 3 }
        ]
    },
    { 
        id: 3, 
        texto: "O Pequeno Príncipe chega a um planeta onde encontra um pintor pintando um quadro. O pintor pede ajuda para buscar três coisas: um girassol, um balde de água e uma semente de árvore. O Pequeno Príncipe aceita?",
        escolhas: [
            { texto: "Sim, ajudar o pintor", proximaCena: 4 },
            { texto: "Não, continuar explorando", proximaCena: 5 }
        ]
    },
    { 
        id: 4, 
        texto: "O Pequeno Príncipe decide ajudar o pintor. Ele vai primeiro ao jardim em busca do girassol. Ele encontra o jardim, mas o girassol está no alto de uma colina. O que ele faz?",
        escolhas: [
            { texto: "Escalar a colina", proximaCena: 6 },
            { texto: "Procurar outra forma de alcançar", proximaCena: 7 }
        ]
    },
    { 
        id: 5, 
        texto: "O Pequeno Príncipe decide não ajudar o pintor e continua explorando o planeta. No entanto, ele percebe que está se sentindo perdido e decide voltar ao pintor para ajudá-lo.",
        escolhas: [
            { texto: "Voltar ao pintor", proximaCena: 4 }
        ]
    },
    { 
        id: 6, 
        texto: "O Pequeno Príncipe escala a colina e consegue pegar o girassol. Agora ele deve buscar o balde de água da correnteza. Ele encontra um rio, mas a correnteza é muito forte. O que ele faz?",
        escolhas: [
            { texto: "Enfrentar a correnteza", proximaCena: 8 },
            { texto: "Procurar um balde", proximaCena: 9 }
        ]
    },
    { 
        id: 7, 
        texto: "O Pequeno Príncipe procura outra forma de alcançar o girassol e encontra uma escada escondida atrás de uma árvore. Ele usa a escada e pega o girassol. Agora ele deve buscar o balde de água da correnteza.",
        escolhas: [
            { texto: "Ir até a correnteza", proximaCena: 6 }
        ]
    },
    { 
        id: 8, 
        texto: "Ele enfrenta a correnteza, mas percebe que está ficando muito perigoso. Ele recua e decide procurar outra maneira de conseguir a água.",
        escolhas: [
            { texto: "Procurar um balde", proximaCena: 9 }
        ]
    },
    { 
        id: 9, 
        texto: "O Pequeno Príncipe encontra um balde e usa-o para pegar a água da correnteza com segurança. Agora só falta a semente da árvore. Ele encontra a árvore, mas a semente está enterrada no chão. O que ele faz?",
        escolhas: [
            { texto: "Cavar para pegar a semente", proximaCena: 10 },
            { texto: "Procurar outra solução", proximaCena: 11 }
        ]
    },
    { 
        id: 10, 
        texto: "O Pequeno Príncipe cava e encontra a semente. Ele retorna ao pintor com todos os itens: o girassol, a água e a semente.",
        escolhas: [
            { texto: "Entregar os itens ao pintor", proximaCena: 12 }
        ]
    },
    { 
        id: 11, 
        texto: "O Pequeno Príncipe procura outra solução e encontra um pássaro que está cavando perto da árvore. Ele pede ajuda ao pássaro, que lhe entrega a semente. Ele volta ao pintor com todos os itens.",
        escolhas: [
            { texto: "Entregar os itens ao pintor", proximaCena: 12 }
        ]
    },
    { 
        id: 12, 
        texto: "O pintor agradece o Pequeno Príncipe e completa sua obra com os itens coletados. Ele presenteia o Pequeno Príncipe com o quadro, e o Pequeno Príncipe parte em busca de novas aventuras.",
        escolhas: [
            { texto: "Ir para o quiz final", proximaCena: 13 }
        ]
    },
    // Começo do quiz de múltipla escolha
    { 
        id: 13, 
        texto: "Quiz: O que o Pequeno Príncipe buscou primeiro?",
        quiz: {
            pergunta: "O que o Pequeno Príncipe buscou primeiro?",
            opcoes: ["Girassol", "Semente", "Água", "Pássaro"],
            respostaCorreta: "Girassol"
        },
        escolhas: [
            { texto: "Próxima pergunta", proximaCena: 14 }
        ]
    },
    { 
        id: 14, 
        texto: "Quiz: Como o Pequeno Príncipe conseguiu pegar o girassol?",
        quiz: {
            pergunta: "Como o Pequeno Príncipe conseguiu pegar o girassol?",
            opcoes: ["Escalou", "Achou uma escada", "Usou uma corda", "Pediu ajuda"],
            respostaCorreta: "Achou uma escada"
        },
        escolhas: [
            { texto: "Próxima pergunta", proximaCena: 15 }
        ]
    },
    { 
        id: 15, 
        texto: "Quiz: O que o pintor precisava para completar sua pintura?",
        quiz: {
            pergunta: "O que o pintor precisava para completar sua pintura?",
            opcoes: ["Girassol, água e semente", "Semente e pássaro", "Rosas", "Cores mágicas"],
            respostaCorreta: "Girassol, água e semente"
        },
        escolhas: [
            { texto: "Ver resultado", proximaCena: 16 }
        ]
    },
    { 
        id: 16, 
        texto: "Fim do quiz! Você ajudou o Pequeno Príncipe a completar sua missão e agora ele parte para novas aventuras."
    }
];

// Função para mostrar a cena e lidar com escolhas e quiz
function mostrarCena(id) {
    const cena = cenas.find(c => c.id === id);
    document.getElementById("texto").innerText = cena.texto;

    const opcoesDiv = document.getElementById("opcoes");
    opcoesDiv.innerHTML = "";
    if (cena.escolhas) {
        cena.escolhas.forEach(escolha => {
            const button = document.createElement("button");
            button.innerText = escolha.texto;
            button.onclick = () => mostrarCena(escolha.proximaCena);
            opcoesDiv.appendChild(button);
        });
    }

    if (cena.quiz) {
        const perguntaDiv = document.createElement("div");
        perguntaDiv.innerText = cena.quiz.pergunta;
        opcoesDiv.appendChild(perguntaDiv);
        cena.quiz.opcoes.forEach(opcao => {
            const button = document.createElement("button");
            button.innerText = opcao;
            button.onclick = () => verificarResposta(opcao, cena.quiz.respostaCorreta, cena.escolhas[0].proximaCena);
            opcoesDiv.appendChild(button);
        });
    }
}

// Função para verificar resposta do quiz
function verificarResposta(resposta, respostaCorreta, proximaCena) {
    if (resposta === respostaCorreta) {
        alert("Resposta correta!");
    } else {
        alert("Resposta errada.");
    }
    mostrarCena(proximaCena);
}

// Iniciar na cena 1
mostrarCena(1);
