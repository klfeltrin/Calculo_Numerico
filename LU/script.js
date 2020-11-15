var res = document.getElementById("res")
var k = 0
var a
var b

function verificar() {
    if (document.getElementById('txt-entradaA').value === "" ||
        document.getElementById('txt-entradaB').value === "") {
        window.alert('[ERRO] Preencha todos os campos! ')
    }
    else {
        res.innerHTML = ""
        var entradaA = document.getElementById('txt-entradaA').value
        var entradaB = document.getElementById('txt-entradaB').value
        verificarEntrada(entradaA)
        verificarEntrada(entradaB)
        a = gerarMatriz(entradaA)
        b = gerarMatriz(entradaB)
        exibirMatriz(a, b)
        metodoLU(a, b)
    }
}

function metodoLU(a, b) {
    var auxA = a
    var mult
    var solucao = []
    var arrMult = []
    var L = []
    var U = []

    for(var l = 0; l < auxA[0][0].length - 1; l++){
        for (var i = 0 + l; i < auxA[0][0].length - 1; i++) {
            mult = parseInt(auxA[0][i + 1][l]) / parseInt(auxA[0][l][l])
            arrMult.push(mult)
            for (var j = 0; j < auxA[0][0].length; j++) {
                a[0][i + 1][j] = parseInt(a[0][i + 1][j]) - mult * parseInt(a[0][l][j])
            }
            b[0][0][i + 1] = parseInt(b[0][0][i + 1]) - (mult) * parseInt(b[0][0][l])
        }
        exibirMatriz(a, b)
    }

    // Adiciona valores na matriz L
    count = -1
    res.innerHTML += '<br>' + 'Matriz L' + '<br>'
    for(var i = 0; i < a[0][0].length; i++){
        for(var j = 0; j < a[0][0].length; j++){
            if(i === j){
                L.push(1)
            }
            else if(j > i){
                L.push(0)
            }
            else{
                L.push(arrMult.shift())
            }
            res.innerHTML += L[count += 1] + ' '
        }
        res.innerHTML += '<br>'
    }

    // Adiciona valores na matriz U
    count = -1
    res.innerHTML += '<br>' + 'Matriz U' + '<br>'
    for(var i = 0; i < a[0][0].length; i++){
        for(var j = 0; j < a[0][0].length; j++){
            U.push(a[0][i][j])
            res.innerHTML += U[count += 1] + ' '
        }
        res.innerHTML += '<br>'
    }
    res.innerHTML += '<hr>'

    // Solução do Sistema
    res.innerHTML += '<br>' + 'Solução: ' + '<br>'

    var X = [];
    for(i = a[0][0].length - 1; i >= 0; i--){
        X[i] = b[0][0][i];
        for(j = i + 1; j < a[0][0].length; j++){
            X[i] = X[i] - X[j] * a[0][i][j];
        }
        X[i] = X[i] / a[0][i][i];
    }
    
    for(i = 0; i < X.length; i++){
        res.innerHTML += 'X' + i+ ' = ' + X[i] + '<br>'
    }
}

//Adiciona os valores de entrada nas variaveis
function gerarMatriz(entrada) {
    var arrayEntrada = []
    var colunas = []
    var linhas = []
    var tamanho = tamanhoMatriz(entrada)
    var auxNumero = ""

    for (var i = 0; i <= entrada.length; i++) {
        if (!isNaN(parseInt(entrada[i])) || entrada[i] === "-") {
            auxNumero += entrada[i]
        }
        else if (i === entrada.length - 1) {
            auxNumero += entrada[i]
            arrayEntrada.push(parseInt(auxNumero))
            auxNumero = ""
        }
        else {
            arrayEntrada.push(parseInt(auxNumero))
            auxNumero = ""
        }
    }

    for (var i = 0; i < arrayEntrada.length; i++) {
        auxLinhas = []
        for (var j = 0; j < tamanho; j++) {
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
function exibirMatriz(a, b) {
    res.innerHTML += '<br>' + 'K = ' + (k)
    res.innerHTML += '<br>'
    for (var i = 0; i < a[0][0].length; i++) {
        for (var j = 0; j < a[0][i].length; j++) {
            res.innerHTML += a[0][i][j] + ' '
        }
        res.innerHTML += ' | ' + b[0][0][i] + '<br>'
    }
    k++
    res.innerHTML += '<hr>'
}

//Verifica se os valores de entrada são apenas números
function verificarEntrada(entrada) {
    var auxEntrada = entrada.replace(" ", "")
    for (var i = 0; i < auxEntrada.length; i++) {
        if (isNaN(parseInt(auxEntrada[i]) || auxEntrada[i] === '\n')) {
            window.alert("Digite apenas números!")
            limpar()
            break
        }
    }
}

//Verifica o tamanho da matriz
function tamanhoMatriz(entrada) {
    var count = 0
    for (var i = 0; i < entrada.length; i++) {
        if (entrada[i] === '\n') {
            count++
        }
    }
    return count + 1
}

//Limpa os valores das caixas de texto
function limpar() {
    document.getElementById('txt-entradaA').value = "";
    document.getElementById('txt-entradaB').value = "";
    res.innerHTML = ""
}