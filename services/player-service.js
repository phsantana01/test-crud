const listaPlayers = () => {
    return fetch(`http://localhost:3000/profile`)
    .then(resposta => {
        return resposta.json()
    })
    
}

const adicionaPlayer = (nome, email) => {
    return fetch(`http://localhost:3000/profile`,{
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            nome: nome,
            email: email
            })
    
        })
        .then(resposta => {
            return resposta.body
        })
}

const deletaPlayer = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`,{
        method: "DELETE"
    })
}

const mostraPlayer = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`)
        .then(resposta => {
            return resposta.json()
        })
}

const editaPlayer = (id, nome, email) => {
    return fetch(`http://localhost:3000/profile/${id}`,{
        method: "PUT",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            nome: nome,
            email: email
        })
    })
    .then(resposta => {
        return resposta.json()
    })
}



export const playerServices = {
    listaPlayers,
    adicionaPlayer,
    deletaPlayer,
    mostraPlayer,
    editaPlayer
}