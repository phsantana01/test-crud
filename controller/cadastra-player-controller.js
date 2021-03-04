import { playerServices } from "../services/player-service.js"

const formulario = document.querySelector("[data-form]")

formulario.addEventListener("submit", (evento)=> {
    evento.preventDefault()
    const nome = evento.target.querySelector("[data-nome]").value
    const email = evento.target.querySelector("[data-email]").value

    playerServices.adicionaPlayer(nome, email)
    .then(()=>{
        window.location.href = "cadastro-concluido.html"
    })
})
