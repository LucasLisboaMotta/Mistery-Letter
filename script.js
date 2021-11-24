const botaoCriar = document.getElementById('criar-carta');
const paragrado = document.getElementById('carta-gerada');
const input = document.getElementById('carta-texto');

function criarSpan() {
  const span = document.createElement('span');
  span.innerText = input.value;
  paragrado.appendChild(span);
}

botaoCriar.addEventListener('click', criarSpan);
