function sortear () {
  const totalResultados = Number(document.querySelector('#style-number-2').value)

  const primeiroValor = Number(document.querySelector('#primeiro-valor-input').value)

  const segundoValor = Number(document.querySelector('#segundo-valor-input').value)

   //Limpar resultados antigos
   const elementoHTMLResultValues = document.querySelector('.results-value')
   elementoHTMLResultValues.innerHTML = ''

  for (let i = 0; i < totalResultados; i++) {
 
  const resultado = Math.floor(Math.random() * (segundoValor - primeiroValor + 1)) + primeiroValor
  console.log(resultado)

  // Gerar um elemento HTML para o resultado
  const resultElement = document.createElement('div')
  resultElement.classList.add('results-value')
  resultElement.innerText = resultado

  // Adicionar o elemento criado dentro do HTML existente
  elementoHTMLResultValues.append(resultElement)

  }
}
