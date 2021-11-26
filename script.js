const botaoCriar = document.getElementById('criar-carta');
const paragrafo = document.getElementById('carta-gerada');
const input = document.getElementById('carta-texto');
const gEstilo = ['newspaper', 'magazine1', 'magazine2'];
const gTamanho = ['medium', 'big', 'reallybig'];
const gRotacao = ['rotateleft', 'rotateright'];
const gInclinacao = ['skewleft', 'skewright'];
const contador = document.getElementById('carta-contador');

function apagaSpan() {
  const numeroParagrafo = paragrafo.children.length;
  for (let i = 0; i < numeroParagrafo; i += 1) {
    paragrafo.removeChild(paragrafo.children[0]);
  }
}

function criarClasse() {
  const classe = [];
  classe.push(gEstilo[Math.floor(Math.random() * 3)]);
  classe.push(gTamanho[Math.floor(Math.random() * 3)]);
  classe.push(gRotacao[Math.floor(Math.random() * 2)]);
  classe.push(gInclinacao[Math.floor(Math.random() * 2)]);
  return classe.join(' ');
}

function mudarClasse(alvo) {
  const span = alvo.target;
  span.className = criarClasse();
}

function criarEvento() {
  for (let i = 0; i < paragrafo.children.length; i += 1) {
    paragrafo.children[i].addEventListener('click', mudarClasse);
  }
}

function criarContador() {
  const contagem = paragrafo.children.length;
  contador.innerText = contagem;
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
    span.className = criarClasse();
    paragrafo.appendChild(span);
  } criarEvento();
  criarContador();
}

botaoCriar.addEventListener('click', criarSpan);
