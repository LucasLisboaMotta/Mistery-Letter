const botaoCriar = document.getElementById('criar-carta');
const paragrado = document.getElementById('carta-gerada');
const input = document.getElementById('carta-texto');

function apagaSpan() {
  const numeroParagrafo = paragrado.children.length;
  for (let i = 0; i < numeroParagrafo; i += 1) {
    paragrado.removeChild(paragrado.children[0]);
  }
}

function criarSpan() {
  const frase = input.value.split(' ');
  if (paragrado.children.length > 0) {
    apagaSpan();
  }
  for (let i = 0; i < frase.length; i += 1) {
    const span = document.createElement('span');
    span.innerText = frase[i];
    paragrado.appendChild(span);
  }
}

botaoCriar.addEventListener('click', criarSpan);
