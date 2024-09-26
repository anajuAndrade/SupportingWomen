//form principal
document.querySelector("#btIndex").addEventListener("click", (g) =>{
    let emailL = document.login.logEmail.value;
    let senhaL = document.login.logSenha.value;

    if (emailL.length < 10) {
        document.login.logEmail.classList.add("erroFormulario");
        document.login.logEmail.focus();
        document.querySelector("#ValidaEmailLog").classList.add("exibido");
        g.preventDefault();
        return;

    } else {
        document.login.logEmail.classList.remove("erroFormulario");
        document.querySelector("#ValidaEmailLog").classList.remove("exibido");
    }
    
    if (senhaL.length < 6) {
        document.login.logSenha.classList.add("erroFormulario");
        document.login.logSenha.focus();
        document.querySelector("#ValidaSenhaLog").classList.add("exibido");
        g.preventDefault();
        return;
    } else {
        document.login.logSenha.classList.remove("erroFormulario");
        document.querySelector("#ValidaSenhaLog").classList.remove("exibido");
    }
});