//Variaveis
const loginClick = document.querySelector("#submit-btn")
//const cadastroClick = document.querySelector("#botao")//alterar mais tarde
//Sistema de contas
const user1 = {  //admin
    name: "GaloAdmin",
    emailUser:"contatogalofiap@gmail.com",
    senhaUser:"12345",
    Região:"Centro",
}
let userList = []
userList.push(user1)
//Local storage para usuario
localStorage.setItem("userLog", JSON.stringify("0")) //define usuario deslogado
localStorage.setItem("usersList", JSON.stringify(userList)) //define a um localStorage todos os usuarios existentes
//Login
loginClick.addEventListener("click", (login)=>{
  login.preventDefault() //previne recarregamento da tela
  let listaDeUsuario = JSON.parse(localStorage.getItem("usersList")); //busca contas no storage
  let emailInput = document.querySelector("#email").value;
  let senhaInput = document.querySelector("#senha").value;
  const acharUsuario = listaDeUsuario.find(usuario => {
    return usuario.emailUser === emailInput && usuario.senhaUser === senhaInput;
  });
  if(acharUsuario){
    localStorage.setItem("userLog", "1");//define usuario logado
    //localStorage.setItem("usuarioLogado", acharUsuario) //define qual usuario foi logado
    window.location.href = "./index.html";
    console.log("Usuario Validado!")
  }else{
    console.log("Usuario Invalido digite novamente")
  }
})
//Cadastro
// cadastroClick.addEventListener("click", (cadastro)=>{
//     cadastro.preventDefault()
//     let emailInput = document.querySelector("#email").value;
//     let senhaInput = document.querySelector("#senha").value;
//     if(emailInput.value.length < 5){
//     }else{
//       if(emailInput.value)
//     }
//     if(emailInput !== '' && senhaInput !== ''){ //alterar para melhor tratamento e adicionar nome
//       const newUser = {
//         emailUser: emailInput,
//         senhaUser: senhaInput    //alterar para melhor tratamento
//       }
//       userList.push(newUser);
//     }
//   })
  
  
  
  