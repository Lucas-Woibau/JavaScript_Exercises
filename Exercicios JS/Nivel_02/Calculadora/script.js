let saida = document.getElementById('saida')

function Calcular() {
    let num1 = Number(prompt("Digite o primeiro valor:"))
    let num2 = Number(prompt("Digite o segundo valor:"))

    let tipoCalculo = Number(prompt("Digite a operação a ser feita\n[1] Somar\n[2] Dividir\n[3] Multiplicar\n[4] Subtrair"))
    
    switch (tipoCalculo) {
        case 1:
            saida.innerHTML = `<p>${num1} + ${num2} = ${num1+num2}.</p>`
            break;
        case 2:
            saida.innerHTML = `<p>${num1} / ${num2} = ${num1/num2}.</p>`
            break;
        case 3:
            saida.innerHTML = `<p>${num1} x ${num2} = ${num1*num2}.</p>`
            break;
        case 4:
            saida.innerHTML = `<p>${num1} - ${num2} = ${num1-num2}.</p>`
            break;
    
        default:
            break;
    }
}