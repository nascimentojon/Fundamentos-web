/*
Case sentive = reconhece letras maiusculas e minusculas

por tag: getElementByTagName()
por id: getElementById()
por nome: getElementsByName()
por classe: getElementsByClassName()
por seletor : querySelector()
*/
let nome = window.document.getElementById("nome");
let email = document.querySelector("#email");
let assunto = document.querySelector("#assunto");

nome.style.width = "30%"
email.style.width = "30%"
function validaNome () {
let txtNome = document.querySelector("#txtNome");
 if(nome.value.length <3) {
    txtNome.innerHTML ="Nome invalido"
    txtNome.style.color= "red"
}else{
    txtNome.innerHTML= "Nome valido"
    txtNmeo.style.color = "green"
}
}
function validaEmail () {
    let txtEmail = document.querySelector("#txtEmail");

     if(email.value.indexOf ("@") == -1 || email.value.indexOf(".") == -1) {
        txtEmail.innerHTML ="E-mail invalido"
        txtEmail.style.color= "red"
    }else{
        txtEmail.innerHTML= "Email valido"
        txtEmail.style.color = "green"
    }
    }