const botaoCriar = document.getElementById('criar-carta');
const paragrafo = document.getElementById('carta-gerada');
const input = document.getElementById('carta-texto');

function apagaSpan() {
  const numeroParagrafo = paragrafo.children.length;
  for (let i = 0; i < numeroParagrafo; i += 1) {
    paragrafo.removeChild(paragrafo.children[0]);
  }
}

function criarSpan() {
  const frase = input.value.split(' ');
  paragrafo.innerText = '';
  if (paragrafo.children.length > 0) {
    apagaSpan();
  } if (frase[0] === '') {
    paragrafo.innerText = 'Por favor, digite o conteúdo da carta.';
  }
  for (let i = 0; i < frase.length; i += 1) {
    const span = document.createElement('span');
    span.innerText = frase[i];
    paragrafo.appendChild(span);
  }
}

botaoCriar.addEventListener('click', criarSpan);
