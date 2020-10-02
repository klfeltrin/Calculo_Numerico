function verificar(){
    let N = document.getElementById('txt-n')
    let X = document.getElementById('txt-x')
    let res = document.getElementById('res')

    if(N.value.length == 0 || X.value.length == 0){
        window.alert('[ERRO] Preencha todos os campos corretamente! ')
    }
    else{
        let n = Number(N.value)
        let x = Number(X.value)
        let t = 4
        let a = x
        let base = -1
        let basePos = 0
        let soma = 0
        let valor1 = 10000

        // Realiza o ajuste das casas decimais 
        while(valor1 >= 1){
            valor1 = valor1 * Math.pow(10, base)
            a = a * Math.pow(10, base)
            basePos += 1
        }

        // Realiza as somas, corrigindo o valor da mantissa
        soma = valor1
        for(let i = 1; i <= n; i += 1){
            soma -= a
            soma = parseFloat(soma.toFixed(t)) 
        }
        soma = soma.toFixed(t)
        
        // Exibe o resultado na tela 
        res.innerHTML += `<br> S = ${valor1} x 10<sup>${basePos}</sup>`
    }
}