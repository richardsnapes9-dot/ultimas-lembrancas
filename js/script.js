const botao = document.getElementById("entrar");
const musica = document.getElementById("musica");

botao.addEventListener("click", () => {

    musica.play();

    document.getElementById("inicio").style.display = "none";

    alert("Nossa história começa agora... ❤️");

});
