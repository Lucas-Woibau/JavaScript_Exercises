let dataAtual = new Date()
let anoAtual = dataAtual.getFullYear()

function Calcular(){
    let saida = document.getElementById('saida')
    let anoNasc = Number(prompt("Digite o ano em que voce nasceu:"))

    saida.innerHTML = `<p>Sua idade é de ${anoAtual-anoNasc} anos e vai fazer ${(anoAtual-anoNasc)+1} em ${anoAtual+1}!</p>`
}