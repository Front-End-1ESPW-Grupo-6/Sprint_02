if (usuario.emailUser === emailInput && usuario.senhaUser === senhaInput){
    const checkLog = true
    localStorage.setItem("logged_in", true);
    localStorage.setItem("usuarioLogado", usuario)
    if (checkLog){
      console.log("logado com sucesso")
    }
  }else{
    console.log("erro")
  }window.location.href = "../index.html";


  //Cadastro
cadastroClick.addEventListener("click", (cadastro)=>{
    let emailInput = document.querySelector("#email").value;
    let senhaInput = document.querySelector("#senha").value;
    if(emailInput !== '' && senhaInput !== ''){ //alterar para melhor tratamento e adicionar nome
      const newUser = {
        emailUser: emailInput,
        senhaUser: senhaInput    //alterar para melhor tratamento
      }
      userList.push(newUser);
    }
  })
  
  