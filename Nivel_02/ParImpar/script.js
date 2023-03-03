function Calcular(){
    let saida = document.getElementById('saida')
    let numero = Number(prompt("Digite um numero: "))

    if(numero%2 === 0){
        saida.innerHTML = `<p>O número ${numero} é par!`
    }
    else{
        saida.innerHTML = `<p>O número ${numero} é ímpar!`
    }
}