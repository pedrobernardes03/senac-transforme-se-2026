var users = JSON.parse(localStorage.getItem("users")) || [] // parse: reverte de string para objeto 

var logado = JSON.parse(localStorage.getItem("logado")) || {}
var welcome = document.getElementById("welcome")
if (welcome && logado) welcome.innerHTML = "Olá " + logado.nome

var logUsers = document.getElementById("logUsers")
if (logUsers){
    users.forEach((u) => {
        console.log(u)
    });
}
    


var formR = document.getElementById("formRegister");
formR?.addEventListener("click", (e) => { // Listener reconhece que o button foi acionado 
    // "formR?" = if(formL)    
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

    const modalRegister = document.getElementById("modalRegister");
    modalRegister.classList.remove("flex");
    modalRegister.classList.add("hidden");
    window.location.href = "painel.html"

})

varbtL = document.getElementById("btLogin");
if(btL) btL.addEventListener("click", (e) => {
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
        localStorage.setItem("logado", JSON.stringify(user))
        window.location.href = "painel.html"

    } else {
        console.log("senha invalida")
    }
})
