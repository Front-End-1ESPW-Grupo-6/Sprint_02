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
var select1 = document.querySelector('#cidades1');
var select2 = document.querySelector('#cidades2');
select1.addEventListener('change', () => {
  select2.value = select1.value;
});

select2.addEventListener('change', () => {
  select1.value = select2.value;
});
var cidades = document.getElementById("cidades1");
var precipitacao = document.getElementById("precipitacao");

function selectCidades() {
  var c1 = document.getElementById("cidades1");
  var capacidade = document.getElementById("capacidade");
  var CS = c1.options[c1.selectedIndex].value;

  if (CS == "op1") {
    capacidade.innerHTML = "Capacidade: 10mm de chuva";
  } else if (CS == "op2") {
    capacidade.innerHTML = "Capacidade: 15mm";
  } else if (CS == "op3") {
    capacidade.innerHTML = "Capacidade: 20mm";
  } else if (CS == "op4") {
    capacidade.innerHTML = "Capacidade: 30mm";
  } else {
    capacidade.innerHTML = "Capacidade:";
  }
}


function galoWeather(event) {
  event.preventDefault();
  var c1 = document.getElementById("cidades2");
  var CS = c1.options[c1.selectedIndex].value;
  var PS = document.getElementById("precipitacao").value;
  var resultado = document.getElementById("resultado");

  if (CS === "op1") {
    if (PS > 10) {
      resultado.innerHTML = "Vai alagar na Mocca, principalmente no centro e extremidades.";
      console.log("Vai alagar na Mocca, principalmente no centro e extremidades.");
    } else if (PS > 5 && PS <= 10) {
      resultado.innerHTML = "Nao vai alagar na Mocca, mas algum lugares podem enfrentar transito";
      console.log("Nao vai alagar na Mocca, mas algum lugares podem enfrentar transito");
    } else {
      resultado.innerHTML = "Não vai alagar na Mocca";
      console.log("Não vai alagar na Mocca");
    }
  } else if (CS === "op2") {
    if (PS > 15) {
      resultado.innerHTML = "Vai alagar na Vila Prudente, areas residenciais podem ser prejudicadas.";
      console.log("Vai alagar na Vila Prudente, areas residenciais podem ser prejudicadas.");
    } else if (PS > 10 && PS <= 15) {
      resultado.innerHTML = "Nao vai alagar na Vila Prudente, mas algumas casas podem ser prejudicadas com muita agua";
      console.log("Nao vai alagar na Vila Prudente, mas algumas casas podem ser prejudicadas com muita agua");
    } else {
      resultado.innerHTML = "Não vai alagar na Vila Prudente";
      console.log("Não vai alagar na Vila Prudente");
    }
  } else if (CS === "op3") {
    if (PS > 20) {
      resultado.innerHTML = "Vai alagar no Tatuapé, Avenidas principais ficaram obstruidas.";
      console.log("Vai alagar no Tatuapé, Avenidas principais ficaram obstruidas.");
    } else if (PS > 10 && PS <= 20) {
      resultado.innerHTML = "Nao vai alagar no Tatuapé, mas algum lugares podem ter problemas com transito";
      console.log("Nao vai alagar no Tatuapé, mas algum lugares podem ter problemas com transito");
    } else {
      resultado.innerHTML = "Não vai alagar no Tatuapé";
      console.log("Não vai alagar no Tatuapé");
    }
  } else if (CS === "op4") {
    if (PS > 30) {
      resultado.innerHTML = "Vai alagar em Belenzinho, areas residenciais podem ser prejudicadas";
      console.log("Vai alagar em Belenzinho, areas residenciais podem ser prejudicadas");
    } else if (PS > 15 && PS <= 30) {
      resultado.innerHTML = "Nao vai alagar em Belenzinho, mas algumas casas podem enfrentar perda de energia."
      console.log("Nao vai alagar em Belenzinho, mas algumas casas podem enfrentar perda de energia.");
    } else {
      resultado.innerHTML = "Não vai alagar em Belenzinho";
      console.log("Não vai alagar em Belenzinho");
    }
  }
}