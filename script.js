// 1. Criar o array com os dados dos projetos
const meusProjetos = [
    { titulo: "Projeto A", desc: "Descrição do projeto A", link: "#" },
    { titulo: "Projeto B", desc: "Descrição do projeto B", link: "#" },
    { titulo: "Projeto C", desc: "Descrição do projeto C", link: "#" }
];

// 2. Selecionar onde vamos mostrar os projetos
const container = document.getElementById('lista-projetos');

// 3. Renderizar dinamicamente
meusProjetos.forEach(projeto => {
    container.innerHTML += `
        <div class="card">
            <h3>${projeto.titulo}</h3>
            <p>${projeto.desc}</p>
            <a href="${projeto.link}">Ver Projeto</a>
        </div>
    `;
});