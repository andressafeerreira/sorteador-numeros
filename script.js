let naoRepetirNumero = false;

function podeRepetirNumero(input) {
  naoRepetirNumero = input.checked;
}

function sortear() {
  const totalResultados = Number(document.querySelector('#style-number-2').value);
  const primeiroValor   = Number(document.querySelector('#primeiro-valor-input').value);
  const segundoValor    = Number(document.querySelector('#segundo-valor-input').value);

   //Limpar resultados antigos
   const elementoHTMLResultValues = document.querySelector('.results');
   elementoHTMLResultValues.innerHTML = '';
 
   let listaNumeroSorteados = [];
   
  for (let i = 0; i < totalResultados; i++) {
    // Gerando um número aleatório
    let resultado = gerarNumero(primeiroValor, segundoValor);

    // Se a configuração podeRepetir for verdadeira, verifica se o número já existe na lista
    if (naoRepetirNumero && listaNumeroSorteados.includes(resultado)) {
      while (listaNumeroSorteados.includes(resultado)) {
        resultado = gerarNumero(primeiroValor, segundoValor);
      }
    }

    // Adiciona esse novo número gerado numa lista de números
    listaNumeroSorteados.push(resultado);

    // Gerar um elemento HTML para o resultado
    const resultElement = document.createElement('div');
    resultElement.classList.add('results-value');
    resultElement.innerText = resultado;

    // Adicionar o elemento criado dentro do HTML existente
    elementoHTMLResultValues.append(resultElement);
  }
}

function gerarNumero (primeiroValor, segundoValor) {
  const resultado = Math.floor(Math.random() * (segundoValor - primeiroValor + 1)) + primeiroValor
  return resultado
}