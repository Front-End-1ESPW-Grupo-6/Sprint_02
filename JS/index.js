//Variaveis
const loginBar = document.querySelector('.loginBar')
const loginNav = document.querySelector('#Login')
//Verificação se o usuario esta logado
window.addEventListener("load", () => {
  console.log("Evento de carregamento acionado");
  let userLog = JSON.parse(localStorage.getItem("userLog"));
  console.log(userLog)
  if (userLog === 1) {
    loginNav.href = 'javascript:void(0);'
    console.log("Usuario esta logado");
    let userLogado = JSON.parse(localStorage.getItem('logedUser'));
    console.log(userLogado);
    console.log(userLogado[0].name);
    loginNav.innerHTML = userLogado[0].name
    loginNav.addEventListener('click', () => {
      loginBar.classList.toggle('open');
    });
    loginBar.addEventListener('click', () => {
      localStorage.setItem("userLog", JSON.stringify("0"))
      location.reload();
      console.log('Usuario deslogado');
    })
  }
})

// //sistema galowather
let cidades1 = document.querySelector('#cidades1');
let cidades2 = document.querySelector('#cidades2');
cidades1.addEventListener('change', () => {
  cidades2.value = cidades1.value;
});

cidades2.addEventListener('change', () => {
  cidades1.value = cidades2.value;
});
let chuvaP = document.querySelector("#chuvaP");
let capacidade = document.querySelector("#capacidade");
let tempoImg1 = document.querySelector("#imgSim1")
let tempoImg2 = document.querySelector("#imgSim2")
let temperatura = document.querySelector('#temperatura-numero')
let statusT = document.querySelector('#tempoTemp')
let resultadoC = document.querySelector('#resultadoChuva')
cidades2.addEventListener('change', ()=>{
  console.log('cidade mudou')
  if (cidades2.value == 'op1'){
    capacidade.innerHTML= "Capacidade de chuva: 5mm/h"
    tempoImg1.src = "./imgs/clima-imgs/cloud.png"
    tempoImg2.src = "../imgs/clima-imgs/cloud.png"
    temperatura.innerHTML="20"
    statusT.innerHTML="Nublado" //alterar essas variaveis para o exemplo do programa
    chuvaP.innerHTML= "999mm/h" //copiar colar e alterar para as opçoes abaixo
    resultadoC.innerHTML="aaaaaaaa"
  } else if(cidades2.value == 'op2'){
    capacidade.innerHTML= "Capacidade de chuva: 10mm/h"
    tempoImg1.src = "./imgs/clima-imgs/clear.png"
    tempoImg2.src = "./imgs/clima-imgs/clear.png"
    temperatura.innerHTML="29"
    statusT.innerHTML="Ensolarado"
  } else if(cidades2.value == 'op3'){
    capacidade.innerHTML= "Capacidade de chuva: 15mm/h"
    tempoImg1.src = "./imgs/clima-imgs/snow.png"
    tempoImg2.src = "./imgs/clima-imgs/snow.png"
    temperatura.innerHTML="19"
    statusT.innerHTML="Chuva Forte"
  } else if(cidades2.value == 'op4'){
    capacidade.innerHTML= "Capacidade de chuva: 20mm/h"
    tempoImg1.src = "./imgs/clima-imgs/cloud.png"
    tempoImg2.src = "./imgs/clima-imgs/cloud.png"
    temperatura.innerHTML="21"
    statusT.innerHTML="Chuva Fraca"
  } else if(cidades2.value == 'op5'){
    capacidade.innerHTML= "Capacidade de chuva: 30mm/h"
    tempoImg1.src = "./imgs/clima-imgs/snow.png"
    tempoImg2.src = "./imgs/clima-imgs/snow.png"
    temperatura.innerHTML="17"
    statusT.innerHTML="Chuva Forte"
  } 
})