function Calcular(){
    let num1 = Number(prompt("Digite o primeiro número: "))
    let num2 = Number(prompt("Digite o sedundo número: "))
    let saida = document.getElementById('saida')

    if(num1 > num2){
        saida.innerHTML = `<p>O numero ${num1} é  MAIOR do que ${num2}!`
    }
    else{
        saida.innerHTML = `<p>O numero ${num2} é  MAIOR do que ${num1}!`
    }
}