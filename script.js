
let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%¨&*";
let novaSenha = "";

sizePassword.innerHTML = sliderElement.value;

slider.oninput = function(){
  sizePassword.innerHTML = this.value;
}

function generatePassword(){  

  let pass = "";
  for(let i = 0, n = charset.length; i < sliderElement.value; ++i ){
    pass += charset.charAt(Math.floor(Math.random() * n ))
  }
  
  containerPassword.classList.remove("hide"); //a senha ao ser criada irá aparecer na tela.
  password.innerHTML = pass;
  
} //fara com que seja criado a senha de acordo com o numero de caracteres desejado.

function copyPassword(){
  alert ("SENHA COPIADA COM SUCESSO!"); // criará um alerta mostrando que a senha foi copiada.
  navigator.clipboard.writeText(novaSenha);
} //fara com que a senha seja copiada ao clicar.