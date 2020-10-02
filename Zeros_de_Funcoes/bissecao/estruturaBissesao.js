function $(target) {
  return document.getElementById(target).value
}

function binomio() {
  let binomio = {}

  binomio.x = $('valorX')

  function insertTable() {
    element = this.intervalo

    retorno = document.createElement('tr')
    menor = document.createElement('td')
    menor.innerText = element[0].i
    retorno.appendChild(menor)
    maior = document.createElement('td')
    maior.innerText = element[1].i
    retorno.appendChild(maior)
    media = document.createElement('td')
    valormedia = (element[0].i + element[1].i) / 2
    media.innerText = valormedia
    retorno.appendChild(media)
    resultado = document.createElement('td')
    valorresultado = this.calcularbinomio(valormedia)
    resultado.innerText = valorresultado
    retorno.appendChild(resultado)

    novointervalo = { retorno: valorresultado, i: valormedia }

    atual = document.getElementById('resultado').getElementsByTagName('tbody')[0]
    atual.appendChild(retorno)

    if (this.intervalo[0].retorno < 0 && valorresultado < 0) {
      this.intervalo[0] = novointervalo

    } else {
      this.intervalo[1] = novointervalo
    }

    if (Math.abs(valorresultado) < (0.01)) {
      console.log(valorresultado, false)
      return false
    } else {
      console.log(valorresultado, true)
      return true
    }
  }

  function calcularintervalo() {
    valoresretornados = []

    for (var i = -10; i <= 10; i++) {
      retorno = this.calcularbinomio(i)

      valoresretornados.push({ retorno, i })
    }

    for (var i = 0; i < valoresretornados.length - 1; i++) {

      if ((valoresretornados[i].retorno < 0 &&
        valoresretornados[i + 1].retorno > 0) ||
        (valoresretornados[i].retorno > 0 &&
          valoresretornados[i + 1].retorno < 0)
      ) {
        this.intervalo = [valoresretornados[i], valoresretornados[i + 1]]
        return
      }
    }

  }
  function setValores() {
    return [
      $(`zero`),
      $(`primeiro`),
      $(`segundo`),
      $(`terceiro`),
      $(`quarto`),
      $(`quinto`),
    ]
  }

  function calcularbinomio(x) {
    total = 0
    binomio.valores.map(e = (element, index) => {
      if (!element.trim())
        return

      total += parseInt(element) * (Math.pow(x, index))
    })

    return (total)
  }

  binomio.calcularbinomio = calcularbinomio
  binomio.calcularintervalo = calcularintervalo
  binomio.insertTable = insertTable

  binomio.valores = setValores()

  return binomio
}

var a = binomio()


function newBinomio(event) {
  event.preventDefault()
  a = binomio()
  a.calcularintervalo()
  a.insertTable()
  while (true) {

    if (!a.insertTable()) { break }
  }

}

function limpartabela() {

  var new_tbody = document.createElement('tbody');
  var backup = document.getElementById('resultado').childNodes[1].childNodes[0]
  var old_tbody = document.getElementById('resultado').getElementsByTagName('tbody')[0]
  old_tbody.parentNode.replaceChild(new_tbody, old_tbody)

  new_tbody.appendChild(backup)


}