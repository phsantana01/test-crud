import { playerServices } from "../services/player-service.js"

const getURL = new URL(window.location)

const id = getURL.searchParams.get("id")

const inputNome = document.querySelector("[data-nome]")
const inputEmail = document.querySelector("[data-email]")

playerServices.mostraPlayer(id)
.then(dados => {
    inputNome.value = dados.nome
    inputEmail.value = dados.email
})

const formulario = document.querySelector("[data-form]")


formulario.addEventListener("submit", (evento) =>{
    evento.preventDefault()

    playerServices.editaPlayer(id, inputNome.value, inputEmail.value)
    .then(()=> {
        window.location.href = "../telas/players.html"
    })
})