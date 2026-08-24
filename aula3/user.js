var users = JSON.parse(localStorage.getItem("users")) || [] // parse: reverte de string para objeto 
var formR = document.getElementById("formRegister");
formR.addEventListener("submit", (e) => { // Listener reconhece que o button foi acionado 
    e.preventDefault(); //impede atualizar a tela

    let name = document.getElementById("iName").value
    let email = document.getElementById("iEmail").value
    let password = document.getElementById("iPassword").value
    let date = document.getElementById("iDate").value

    const user = { //objeto anônimo, estrutura, json
        nome: name,
        email: email,
        senha: password,
        nascimento: date
    }
    users.push(user)
    localStorage.setItem("users", JSON.stringify(users)) // stringfy: transforma em texto (string)
    
})

var formL = document.getElementById("formLogin")
formL.addEventListener("submit", (e) => {
    e.preventDefault();

    let email = document.getElementById("lEmail").value
    let password = document.getElementById("lPassword").value

    let user = users.find(u => {
        return u.email == email
    })

    if (!user) { // not usuario
        console.log("usuario não encontrado")
        return
    }

    if (user.senha == password) {
        console.log("usuario logado")
        window.location.href = "painel.html"
    } else {
        console.log("senha invalida")
    }
})
