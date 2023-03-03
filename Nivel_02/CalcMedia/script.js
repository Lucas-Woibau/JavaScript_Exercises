let saida = document.getElementById('saida')

function Calcular(){
    let nota1 = Number(prompt("Digite a nota 1: "))
    let nota2 = Number(prompt("Digite a nota 2: ")) 
    let nota3 = Number(prompt("Digite a nota 3: "))

    let media = (nota1+nota2+nota3)/3;

    saida.innerHTML = `<p>Nota 1: ${nota1}.<br>
    Nota 2: ${nota2}.<br>
    Nota 3: ${nota3}.<br>
    Média do aluno: ${media.toFixed(2)}.`

    if(media <= 6){
        saida.innerHTML += `<p>REPROVADO!`
    }
    else{
        saida.innerHTML += `<p>APROVADO!`
    }
}