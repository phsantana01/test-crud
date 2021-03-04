import {playerServices} from "../services/player-service.js";

const criaNovaLinha = (nome, email, id) => {
    const novaLinha = document.createElement("tr")
    const conteudo = `<td class="td" data-td>${nome}</td>
    <td>${email}</td>
    <td>
        <ul class="tabela__botoes-controle">
            <li><a href="edita-player.html?id=${id}" class="botao-simples botao-simples--editar">Editar</a></li>
            <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
        </ul>
    </td>`

    novaLinha.innerHTML = conteudo
    novaLinha.dataset.id = id

    return novaLinha
}

const tabela = document.querySelector("[data-tabela]")

tabela.addEventListener("click", (evento)=> {
    const botaoExcluir = evento.target.className == "botao-simples botao-simples--excluir"
    if (botaoExcluir) {
        const linhaPlayer = evento.target.closest("[data-id]")
        let id = linhaPlayer.dataset.id
        playerServices.deletaPlayer(id)
        .then(()=>{
            linhaPlayer.remove()    
        })

    }
})

playerServices.listaPlayers()
    .then(data =>{
        data.forEach(elemento => {
        tabela.appendChild(criaNovaLinha(elemento.nome, elemento.email, elemento.id))
    })
})