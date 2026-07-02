const formulario = document.querySelector(".formulario");
const nome = document.getElementById("nome");
const mensagem = document.getElementById("mensagem");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const nomeDigitado = nome.value;

    if (nomeDigitado == "") {
        mensagem.textContent = "Digite seu nome!";
    } else {
        mensagem.textContent = nomeDigitado + ", SUA MENSAGEM FOI ENVIADA!";
    }

    formulario.reset();
});