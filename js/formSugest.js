document.querySelector("#btSugestao").addEventListener("click", (e) => {
    let nomeSugestao = document.sugestao.nomeSugestao.value;
    let emailSugestao = document.sugestao.emailSugestao.value;
    let sugestao = document.sugestao.sugestao.value;

    if (nomeSugestao.length < 3) {
        document.sugestao.nomeSugestao.classList.add("erroFormulario");
        document.sugestao.nomeSugestao.focus();
        document.querySelector("#validaNomeSugestao").classList.add("exibido");
        e.preventDefault();
        return;
    } else {
        document.sugestao.nomeSugestao.classList.remove("erroFormulario");
        document.querySelector("#validaNomeSugestao").classList.remove("exibido");
    }

    if (emailSugestao.length < 10) {
        document.sugestao.emailSugestao.classList.add("erroFormulario");
        document.sugestao.emailSugestao.focus();
        document.querySelector("#validaEmailSugestao").classList.add("exibido");
        e.preventDefault();
        return;
    } else {
        document.sugestao.emailSugestao.classList.remove("erroFormulario");
        document.querySelector("#validaEmailSugestao").classList.remove("exibido");
    }

    if (sugestao.length < 10) {
        document.sugestao.sugestao.classList.add("erroFormulario");
        document.sugestao.sugestao.focus();
        document.querySelector("#validaSugestao").classList.add("exibido");
        e.preventDefault();
        return;
    } else {
        document.sugestao.sugestao.classList.remove("erroFormulario");
        document.querySelector("#validaSugestao").classList.remove("exibido");
    }

    alert("obrigada pela sugestão!");
});