function verificar(){

    if(document.getElementById('txt-entrada').value === ""){
        window.alert('[ERRO] Preencha os valores da matriz! ')
    }
    else{
        var entrada = document.getElementById('txt-entrada').value
        verificarEntrada(entrada)
        gerarMatriz(entrada)
    }
}

function gerarMatriz(entrada){
    var colunas, linhas = []

    for(var i = 0; i < entrada.length; i++){
        if(entrada[i] != '\n'){
            console.log('true')
        }
        else{
            console.log('false')
        }
    }
    /*
    for(var i = 0; i < entrada.length; i++){
        while(entrada[i] != '\n'){
            if(!isNaN(entrada[i])){
                linhas.push(entrada[i])
            }
        }
        colunas.push(linhas)
    }
    console.log(colunas)
    */
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

//Limpa os valores da caixa de texto
function limpar(){
    document.getElementById('txt-entrada').value = ""
}