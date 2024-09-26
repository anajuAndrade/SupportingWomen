//form app
document.querySelector("#btAPP").addEventListener("click", (e) => {
    let nome = document.cadastro.nome.value;
    let telefone = document.cadastro.tel.value;
    let email = document.cadastro.email.value;
    let confEmail = document.cadastro.confirmEmail.value;
    let senha = document.cadastro.senha.value;
    let confSenha = document.cadastro.confSenha.value;
    //declara o option

    if (nome.length < 3) {
        document.cadastro.nome.classList.add("erroFormulario");
        document.cadastro.nome.focus();
        document.querySelector("#validaNome").classList.add("exibido");
        e.preventDefault();
        return;
    } else {
        document.cadastro.nome.classList.remove("erroFormulario");
        document.querySelector("#validaNome").classList.remove("exibido");
    }

    if (telefone.length < 9) {
        document.cadastro.tel.classList.add("erroFormulario");
        document.cadastro.tel.focus();
        document.querySelector("#validaTel").classList.add("exibido");
        e.preventDefault();
        return;
    } else {
        document.cadastro.tel.classList.remove("erroFormulario");
        document.querySelector("#validaTel").classList.remove("exibido");
    }

    if (email.length < 10) {
        document.cadastro.email.classList.add("erroFormulario");
        document.cadastro.email.focus();
        document.querySelector("#validaEmail").classList.add("exibido");
        e.preventDefault();
        return;

    } else {
        document.cadastro.email.classList.remove("erroFormulario");
        document.querySelector("#validaEmail").classList.remove("exibido");
    }

    if (confEmail.length < 10) {
        document.cadastro.confirmEmail.classList.add("erroFormulario");
        document.cadastro.confirmEmail.focus();
        document.querySelector("#validaConfirmEmail").classList.add("exibido");
        e.preventDefault();
        return;
    } else {
        document.cadastro.confirmEmail.classList.remove("erroFormulario");
        document.querySelector("#validaConfirmEmail").classList.remove("exibido");
    }

    if (confEmail != email) {
        document.cadastro.confirmEmail.classList.add("erroFormulario");
        document.cadastro.email.classList.add("erroFormulario");
        document.cadastro.confirmEmail.focus();
        document.cadastro.email.focus();
        document.querySelector("#confirmacaoEmail1").classList.add("exibido");
        document.querySelector("#confirmacaoEmail2").classList.add("exibido");
        e.preventDefault();
        return;
    } else {
        document.cadastro.email.classList.remove("erroFormulario");
        document.cadastro.confirmEmail.classList.remove("erroFormulario");
        document.querySelector("#confirmacaoEmail1").classList.remove("exibido");
        document.querySelector("#confirmacaoEmail2").classList.remove("exibido");
    }


    if (senha.length < 6) {
        document.cadastro.senha.classList.add("erroFormulario");
        document.cadastro.senha.focus();
        document.querySelector("#validaSenha").classList.add("exibido");
        e.preventDefault();
        return;
    } else {
        document.cadastro.senha.classList.remove("erroFormulario");
        document.querySelector("#validaSenha").classList.remove("exibido");
    }


    if (confSenha.length < 6) {
        document.cadastro.confSenha.classList.add("erroFormulario");
        document.cadastro.confSenha.focus();
        document.querySelector("#validaCSenha").classList.add("exibido");
        e.preventDefault();
        return;
    } else {
        document.cadastro.confSenha.classList.remove("erroFormulario");
        document.querySelector("#validaConfirmSenha").classList.remove("exibido");
    }


    if (senha != confSenha) {
        document.cadastro.senha.classList.add("erroFormulario");
        document.cadastro.confSenha.classList.add("erroFormulario");
        document.cadastro.senha.focus();
        document.cadastro.confSenha.focus();
        document.querySelector("#confirmacaoSenha1").classList.add("exibido");
        document.querySelector("#confirmacaoSenha2").classList.add("exibido");
        e.preventDefault();
        return;
    } else {
        document.cadastro.senha.classList.remove("erroFormulario");
        document.cadastro.confSenha.classList.remove("erroFormulario");
        document.querySelector("#confirmacaoSenha1").classList.remove("exibido");
        document.querySelector("#confirmacaoSenha2").classList.remove("exibido");
    }


//     let checkbox1 = document.getElementById('Cemail');
//     let checkbox2 = document.getElementById('sms');
//     let checkbox3 = document.getElementById('vw');

// // Verifica se o checkbox está marcado
// if (checkbox1.checked & checkbox2.checked & checkbox3.checked){
//     console.log('O checkbox está marcado!');

// } else {
//     console.log('O checkbox não está marcado!');
// }
// 
});