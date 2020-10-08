var res = document.getElementById("res")
var k = 0
var a
var b

function verificar(){
    if(document.getElementById('txt-entradaA').value === "" ||
       document.getElementById('txt-entradaB').value === ""){
        window.alert('[ERRO] Preencha todos os campos! ')
    }
    else{
        res.innerHTML = ""
        var entradaA = document.getElementById('txt-entradaA').value
        var entradaB = document.getElementById('txt-entradaB').value
        //verificarEntrada(entradaA)
        //verificarEntrada(entradaB)
        a = gerarMatriz(entradaA)
        b = gerarMatriz(entradaB)
        exibirMatriz(a, b)
        metodoGauss(a, b)
    }
}

function metodoGauss(a, b){
    var auxA = a
    var auxB = b
    var multA
    var multB
    for(var i = 0; i < auxA[0][0].length - 1; i++){
        multA = parseInt(auxA[0][i + 1][0]) / parseInt(auxA[0][0][0])
        multB = parseInt(auxB[0][0][i + 1]) / parseInt(auxB[0][0][0])
        for(var j = 0; j < auxA[0][0].length; j++){
            a[0][i + 1][j] = parseInt(a[0][i + 1][j]) - (multA) * parseInt(a[0][0][j])
        }
        b[0][0][i + 1] = parseInt(b[0][0][i + 1]) - (multA) * parseInt(b[0][0][0])
    }
    exibirMatriz(a, b)
}

//Adiciona os valores de entrada nas variaveis
function gerarMatriz(entrada){
    var arrayEntrada = []
    var colunas = []
    var linhas = []
    var tamanho = tamanhoMatriz(entrada)
    var auxNumero = ""

    for(var i = 0; i <= entrada.length; i++){
        if(!isNaN(parseInt(entrada[i])) || entrada[i] === "-"){
            auxNumero += entrada[i]
        }
        else if(i === entrada.length - 1){
            auxNumero += entrada[i]
            arrayEntrada.push(parseInt(auxNumero))
            auxNumero = ""
        }
        else{
            arrayEntrada.push(parseInt(auxNumero))
            auxNumero = ""
        }        
    }

    for(var i = 0; i < arrayEntrada.length; i++){
        auxLinhas = []
        for(var j = 0; j < tamanho; j++){
            auxLinhas.push(arrayEntrada[i])
            i++
        }
        linhas.push(auxLinhas)
        auxLinhas = []
        i--
    }
    
    colunas.push(linhas)
    return colunas
}

//Exibe os valores da matriz na tela
function exibirMatriz(a, b){
    res.innerHTML += '<br>' + 'K = ' + (k)
    res.innerHTML += '<br>'
    for(var i = 0; i < a[0][0].length; i++){
        for(var j = 0; j < a[0][i].length; j++){
            res.innerHTML += a[0][i][j] + ' '
        }
        res.innerHTML += ' | ' + b[0][0][i] + '<br>'
    }
    k++
}

//Verifica se os valores de entrada são apenas números
function verificarEntrada(entrada){
    var auxEntrada = entrada.replace(" ", "")
    for(var i = 0; i < auxEntrada.length; i++){
        if(isNaN(auxEntrada[i])){
            window.alert("Digite apenas números!")
            limpar()
            break
        }
    }
}

//Verifica o tamanho da matriz
function tamanhoMatriz(entrada){
    var count = 0
    for(var i = 0; i < entrada.length; i++){
        if(entrada[i] === '\n'){
            count++
        }
    }
    return count + 1
}

//Limpa os valores das caixas de texto
function limpar(){
    document.getElementById('txt-entradaA').value = "";
    document.getElementById('txt-entradaB').value = "";
    res.innerHTML = ""
}