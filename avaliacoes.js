const lista = document.getElementById("lista-avaliacoes")
const botao = document.getElementById("enviar")

botao.addEventListener("click", () => {

    const nome = document.getElementById("nome").value
    const nota = document.getElementById("nota").value
    const comentario = document.getElementById("comentario").value

    const card = document.createElement("div")
    card.classList.add("card")

    card.innerHTML = `
        <h3>${nome}</h3>
        <p>⭐ ${nota}</p>
        <p>${comentario}</p>
    `

    lista.appendChild(card)

})
fetch("dados.json")
  .then(res => res.json())
  .then(dados => {
    const container = document.getElementById("conteudo");

    dados.forEach(item => {
      container.innerHTML += `
        <div>
          <p>${item.texto}</p>
        </div>
      `;
    });
  });
