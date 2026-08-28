var users = JSON.parse(localStorage.getItem("users")) || [] // parse: reverte de string para objeto 

var logado = JSON.parse(localStorage.getItem("logado")) || {}
var welcome = document.getElementById("welcome")
if (welcome && logado) welcome.innerHTML = "Olá " + logado.nome

/*  function name(parametro, p2){
    return
}*/
function createButton(text, classes, i) {
    let bt = document.createElement("a");
    bt.innerHTML = text;
    classes.forEach((c) =>{
        bt.classList.add(c);
    });
    
    
    bt.classList.add("cursor-pointer");
    bt.classList.add("px-3");
    bt.classList.add("text-white");
    bt.classList.add("hover:shadow");
    bt.classList.add("shadow-md");
    bt.classList.add("m-3");
    bt.classList.add("rounded-full");
    bt.dataset.id = i;
    return bt;
}

var logUsers = document.getElementById("logUsers") // capturando tbody
if (logUsers) {
    let i = 0;
    users.forEach((u) => { /* vetor que cria as linhas e coluna da tabela da tabela*/

        let tdNome = document.createElement("td");
        tdNome.innerHTML = u.nome;
        let tdEmail = document.createElement("td"); /* td= table data, colunas */
        tdEmail.innerHTML = u.email;
        let tdAction = document.createElement("td");

        /* 
        tdAction.appendChild(createButton("V", "show", i)
                        ==
        let btV = createElement("V","show", i)
        tdAction.appendChild(btV)
        */
        tdAction.appendChild(createButton("V", ["show", "bg-primary"], i));

        tdAction.appendChild(createButton("X", ["remove", "bg-red"], i));

        let tr = document.createElement("tr"); /* tr= table row, linhas */
        tr.appendChild(tdNome);
        tr.appendChild(tdEmail);
        tr.appendChild(tdAction);
        logUsers.appendChild(tr);
        //append: junta/anexa
          
        //i = i + 1;
        //i+= 1;
        i++;
    });
}

var buttonsV = document.querySelectorAll(".show");
buttonsV.forEach((b) => {
    b.addEventListener("click", () => {
        const id = b.dataset.id;
        b.innerHTML = users[id].nascimento;

    })
})

var buttonsR = document.querySelectorAll(".remove");
buttonsR.forEach((b) => {
    b.addEventListener("click", () => {
        const id = b.dataset.id;
        users.splice(id, 1);
        localStorage.setItem("users", JSON.stringify(users));
        window.location.href = "painel.html"
    })
})




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

var btL = document.getElementById("btLogin");
if (btL) btL.addEventListener("click", (e) => {
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
