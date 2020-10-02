function $(target) {
  return document.getElementById(target).value
}

function binomio() {
  let binomio = {}

  binomio.x = $('valorX')

  function insertTable() {
    element = this.intervalo

    retorno = document.createElement('tr')
    
    Xn = document.createElement('td')
    Xn.innerText = this.x
    retorno.appendChild(Xn)

    Fx = document.createElement('td')
    FxResultado = calcularbinomio(this.x)
    Fx.innerText = FxResultado
    retorno.appendChild(Fx)

    Flx = document.createElement('td')
    FlxResultado = calcularDerivada(this.x)
    Flx.innerText = FlxResultado
    retorno.appendChild(Flx)

    resultado = document.createElement('td')
    this.x = CalcularTeste(this.x , FxResultado, FlxResultado)
    resultado.innerText = this.x
    retorno.appendChild(resultado)


    atual = document.getElementById('resultado').getElementsByTagName('tbody')[0]
    atual.appendChild(retorno)

   
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

  function calcularDerivada(x){
    total = 0
    binomio.valores.map(e = (element, index) => {
      if (!element.trim())
        return

      total += (parseInt(element) * index) * (Math.pow(x, index - 1))
    })

    return (total)
  }

  function CalcularTeste(x, Fx,Flx ){
    return (x) - ( Fx / Flx)
  }

  binomio.calcularbinomio = calcularbinomio
  binomio.calcularDerivada = calcularDerivada
  binomio.insertTable = insertTable

  binomio.valores = setValores()

  return binomio
}

var a = binomio()


function newBinomioNewton(event) {
  event.preventDefault()
  a = binomio()
  a.insertTable()
  for (i = 0; i < 7 ;  i++){ 
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