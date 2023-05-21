//Variaveis
const loginIndex = document.querySelector('#sign-up')
const cadastroCard = document.querySelector('.cadastro-container')
const cadastroIndex = document.querySelector('#register')
const loginClick = document.querySelector("#login-submit-btn")
const cadastroClick = document.querySelector("#cadastro-submit-btn")
const msgError = document.querySelector('.errorMsg')
const msgErrorC = document.querySelector('.errorMsgC')
//Sistema de contas
var listaUser = JSON.parse(localStorage.getItem("usersList"))
console.log(listaUser)
if (listaUser == null) {
  console.log('Lista de usuarios nao encontrada')
  const user1 = {  //admin
    name: "GaloAdmin",
    emailUser: "contatogalofiap@gmail.com",
    senhaUser: "12345"
  }
  let userList = []
  userList.push(user1)
  localStorage.setItem("usersList", JSON.stringify(userList)) //define a um localStorage todos os usuarios existentes
} else {
  console.log('lista de usuarios encontrada')
}
//Local storage para usuario
localStorage.setItem("userLog", JSON.stringify("0")) //define usuario deslogado

//Login
loginClick.addEventListener("click", (login) => {
  login.preventDefault() //previne recarregamento da tela
  let listaDeUsuario = JSON.parse(localStorage.getItem("usersList")); //busca contas no storage
  let emailInput = document.querySelector("#email").value;
  let senhaInput = document.querySelector("#senha").value;
  if (emailInput === "" || senhaInput === "") { //validações
    msgError.innerHTML = 'Preencha todos os campos'
    msgError.setAttribute('style', 'visibility: visible;')
  } else {
    const acharUsuario = listaDeUsuario.find(usuario => {
      return usuario.emailUser === emailInput && usuario.senhaUser === senhaInput;
    });
    if (acharUsuario) {
      localStorage.setItem("userLog", "1");//define se o usuario foi logado
      let logUser = [acharUsuario]; //define qual usuario foi logado
      localStorage.setItem("logedUser", JSON.stringify(logUser))
      window.location.href = "./index.html";
      console.log("Usuario Validado!")
    } else {
      msgError.setAttribute('style', 'visibility: visible;')
      msgError.innerHTML = 'Email ou senha incorretos'
      console.log("Usuario Invalido digite novamente")
    }
  }
})

//Sistema para alterar entre cadastro e login
cadastroIndex.addEventListener("click", () => {
  cadastroCard.setAttribute('style', 'z-index: 2;')
})
loginIndex.addEventListener("click", () => {
  cadastroCard.setAttribute('style', 'z-index: -2;')
})

//Cadastro
cadastroClick.addEventListener("click", (cadastro) => {
  cadastro.preventDefault()
  let nameInput = document.querySelector('#nameC').value;
  let emailInput = document.querySelector('#emailC').value;
  let senhaInput = document.querySelector('#senhaC').value;
  let senhaConfirmInput = document.querySelector('#senhaCC').value;
  // let regiaoInput = document.querySelector('#regiaoC').value;
  if (nameInput == "" || emailInput == "" || senhaInput == "" || senhaConfirmInput === "") {
    msgErrorC.innerHTML = 'Todos os campos devem ser preenchidos'
    console.log('Todos os campos devem ser preenchidos');
    msgErrorC.setAttribute('style', 'visibility: visible;')
    return;
  }
  //email
  if (emailInput.length < 5) {
    console.log('email com menos de 5 letras');
    msgErrorC.innerHTML = 'Email deve conter mais de 5 caracteres'
    msgErrorC.setAttribute('style', 'visibility: visible;')
    return;
  } else if (emailInput.indexOf('@') === -1) {
    console.log('email invalido nao contem "@"');
    msgErrorC.innerHTML = 'Email deve conter "@"'
    msgErrorC.setAttribute('style', 'visibility: visible;')
    return;
  }
  //senha
  if (senhaInput.length < 5) {
    console.log('senha deve conter mais de 5 digitos');
    msgErrorC.innerHTML = 'Senha deve conter no minimo 5 digitos'
    msgErrorC.setAttribute('style', 'visibility: visible;')
    return;
  }
  //confirmar senha
  if (senhaConfirmInput != senhaInput) {
    msgErrorC.innerHTML = 'Senhas digitadas não coincidem'
    msgErrorC.setAttribute('style', 'visibility: visible;')
    console.log('senhas nao coincidem')
    return;
  }
  console.log('to funcionando');
  msgErrorC.innerHTML = 'Cadastro efetuado com sucesso!';
  msgErrorC.setAttribute('style', 'visibility: visible; color: #46f548;');
  let nameInputCLEAR = document.querySelector('#nameC')
  let emailInputCLEAR = document.querySelector('#emailC')
  let senhaInputCLEAR = document.querySelector('#senhaC')
  let senhaConfirmInputCLEAR = document.querySelector('#senhaCC')
  nameInputCLEAR.value = ""
  emailInputCLEAR.value = ""
  senhaInputCLEAR.value = ""
  senhaConfirmInputCLEAR.value = ""
  const newUser = {
    name: nameInput,
    emailUser: emailInput,
    senhaUser: senhaInput,
  }
  let listaDeUsuarioCadastro = JSON.parse(localStorage.getItem("usersList"));
  listaDeUsuarioCadastro.push(newUser);
  localStorage.setItem("usersList", JSON.stringify(listaDeUsuarioCadastro));
  console.log(newUser)
})

//Evento de olho
let eyeLogin = document.querySelector('#openLEye')
eyeLogin.addEventListener('click', () => {
  const loginPass = document.querySelector("#senha");
  if (loginPass.getAttribute('type') == 'password') {
    loginPass.setAttribute("type", "text");
    eyeLogin.setAttribute("class", "fa-regular fa-eye");
  } else {
    loginPass.setAttribute("type", "password");
    eyeLogin.setAttribute("class", "fa-regular fa-eye-slash");

  }
})

let eyeCadastro = document.querySelector('#openCEye')
eyeCadastro.addEventListener('click', () => {
  const cadastroPass = document.querySelector("#senhaC");
  if (cadastroPass.getAttribute('type') == 'password') {
    cadastroPass.setAttribute("type", "text");
    eyeCadastro.setAttribute("class", "fa-regular fa-eye");
  } else {
    cadastroPass.setAttribute("type", "password");
    eyeCadastro.setAttribute("class", "fa-regular fa-eye-slash");

  }
})

let eyeCadastro2 = document.querySelector('#openCEye2')
eyeCadastro2.addEventListener('click', () => {
  const cadastroPass2 = document.querySelector("#senhaCC");
  if (cadastroPass2.getAttribute('type') == 'password') {
    cadastroPass2.setAttribute("type", "text");
    eyeCadastro2.setAttribute("class", "fa-regular fa-eye");
  } else {
    cadastroPass2.setAttribute("type", "password");
    eyeCadastro2.setAttribute("class", "fa-regular fa-eye-slash");

  }
})