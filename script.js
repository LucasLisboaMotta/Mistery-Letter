const botaoCriar = document.getElementById('criar-carta');
const paragrafo = document.getElementById('carta-gerada');
const input = document.getElementById('carta-texto');
const gEstilo = ['newspaper', 'magazine1', 'magazine2'];
const gTamanho = ['medium', 'big', 'reallybig'];
const gRotacao = ['rotateleft', 'rotateright'];
const gInclinacao = ['skewleft', 'skewright'];
const op = ['1100', '1010', '1001', '0101', '0110', '0011', '1110', '1101', '1011', '0111', '1111'];
const contador = document.getElementById('carta-contador');

function apagaSpan() {
  const numeroParagrafo = paragrafo.children.length;
  for (let i = 0; i < numeroParagrafo; i += 1) {
    paragrafo.removeChild(paragrafo.children[0]);
  }
}

function criarClasse() {
  const opcao = op[Math.floor(Math.random() * 11)];
  const classe = [];
  if (opcao[0] === '1') {
    classe.push(gEstilo[Math.floor(Math.random() * 3)]);
  } if (opcao[1] === '1') {
    classe.push(gTamanho[Math.floor(Math.random() * 3)]);
  } if (opcao[2] === '1') {
    classe.push(gRotacao[Math.floor(Math.random() * 2)]);
  } if (opcao[3] === '1') {
    classe.push(gInclinacao[Math.floor(Math.random() * 2)]);
  } return classe.join(' ');
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
