const botao = document.getElementById("entrar");
const inicio = document.getElementById("inicio");
const galeria = document.getElementById("galeria");
const finalPagina = document.getElementById("final");
const ultimaMensagem = document.getElementById("ultimaMensagem");

const foto = document.getElementById("foto");
const texto = document.getElementById("texto");
const musica = document.getElementById("musica");

const pedido = document.getElementById("pedido");

const fotos = [
"foto1.jpg",
"foto2.jpg",
"foto3.jpg",
"foto4.jpg",
"foto5.jpg",
"foto6.jpg",
"foto7.jpg",
"foto8.jpg",
"foto9.jpg",
"foto10.jpg",
"foto11.jpg",
"foto12.jpg",
"foto13.jpg",
"foto14.jpg",
"foto15.jpg",
"foto16.jpg",
"foto17.jpg",
"foto18.jpg",
"foto19.jpg"
];

const frases = [

"Cada foto guarda um pedaço da nossa história.",

"Talvez o tempo passe... mas algumas lembranças nunca vão embora.",

"Obrigado por cada sorriso que você me deu.",

"Mesmo separados... essas lembranças sempre farão parte de mim.",

"Você foi uma das pessoas mais importantes da minha vida.",

"Eu faria muitas coisas diferentes se pudesse voltar no tempo.",

"Obrigado por existir."

];

let indice = 0;

botao.onclick = () => {

musica.play();

inicio.style.display = "none";

galeria.style.display = "flex";

mostrarFotos();

};

function mostrarFotos(){

foto.src = "fotos/" + fotos[indice];

texto.innerHTML = frases[indice % frases.length];

indice++;

if(indice < fotos.length){

setTimeout(mostrarFotos,5000);

}else{

setTimeout(()=>{

galeria.style.display="none";

finalPagina.style.display="flex";

},5000);

}

}

pedido.onclick = ()=>{

finalPagina.style.display="none";

ultimaMensagem.style.display="flex";

};
