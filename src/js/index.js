const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
const cartoes = document.querySelectorAll(".cartao");
let cartaoAtual = 0;
let cartaoSelecionado = null;

function mostrarCartao() {
  cartoes[cartaoAtual].classList.add("selecionado");
  cartaoSelecionado = cartoes[cartaoAtual];
}

function esconderCartaoSelecionado() {
  if (cartaoSelecionado) {
    cartaoSelecionado.classList.remove("selecionado");
  }
}

function trocarCartao(novoCartao) {
  esconderCartaoSelecionado();
  cartaoAtual = novoCartao;
  mostrarCartao();
}

btnAvancar.addEventListener("click", function () {
  if (cartaoAtual === cartoes.length - 1) {
    trocarCartao(0);
  } else {
    trocarCartao(cartaoAtual + 1);
  }
});

btnVoltar.addEventListener("click", function () {
  if (cartaoAtual === 0) {
    trocarCartao(cartoes.length - 1);
  } else {
    trocarCartao(cartaoAtual - 1);
  }
});

mostrarCartao();
