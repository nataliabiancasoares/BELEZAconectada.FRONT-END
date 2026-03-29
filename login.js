document.getElementById("entrar").addEventListener("click", function(){

let email = document.getElementById("email").value
let senha = document.getElementById("senha").value

if(email === "" || senha === ""){
alert("Preencha todos os campos!")
return
}

if(!email.includes("@") || !email.includes(".")){
alert("Digite um e-mail válido!")
return
}

alert("Login realizado com sucesso!")

window.location.href = "home.html"

})
