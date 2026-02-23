
const imagens = document.querySelectorAll('.carrossel img');
const botaoAnterior = document.getElementById('anterior');
const botaoProximo = document.getElementById('proximo');

let indiceAtual = 0;

function mostrarImagem(index) {
  imagens.forEach(img => img.classList.remove('ativa'));
  imagens[index].classList.add('ativa');
}

mostrarImagem(indiceAtual);

botaoProximo.addEventListener('click', () => {
  indiceAtual = (indiceAtual + 1) % imagens.length;
  mostrarImagem(indiceAtual);
});

botaoAnterior.addEventListener('click', () => {
  indiceAtual = (indiceAtual - 1 + imagens.length) % imagens.length; 
  mostrarImagem(indiceAtual);
});
