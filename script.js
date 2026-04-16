// 1. Array de objetos contendo os dados das atividades do semestre
const meusProjetos = [
    { 
        titulo: "Atividade 01 - Portfólio MVP", 
        desc: "Desenvolvimento da primeira versão do portfólio profissional utilizando HTML5 semântico, CSS3 e lógica de renderização com JavaScript puro.", 
        link: "https://antoniojose-ux.github.io/meu-portfolio/" 
    },
    { 
        titulo: "Atividade 02 - Portfólio React", 
        desc: "Evolução do projeto para um ambiente moderno utilizando React.js e Vite, focando em componentização e melhor performance.", 
        link: "#" // Se ele já tiver o link da atividade 2, coloque aqui
    },
    { 
        titulo: "Projeto Final - Sistemas Web", 
        desc: "Em desenvolvimento: Aplicação completa integrando banco de dados e autenticação de usuários.", 
        link: "#" 
    }
];

// 2. Seleciona o elemento onde os projetos serão inseridos
const container = document.getElementById('lista-projetos');

// 3. Função para renderizar os cards na tela de forma dinâmica
meusProjetos.forEach(projeto => {
    container.innerHTML += `
        <div class="card">
            <h3>${projeto.titulo}</h3>
            <p>${projeto.desc}</p>
            <a href="${projeto.link}" target="_blank">Acessar Projeto</a>
        </div>
    `;
});
