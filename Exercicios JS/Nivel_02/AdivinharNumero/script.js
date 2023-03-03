const randomNum = Math.floor(Math.random() * 101)
let saida = document.getElementById('saida')

function Clicou(){
    let palpite = prompt("Digite seu palpite: ")

    if(palpite > randomNum){
        saida.innerHTML += `<p>O numero que eu escolhi é <strong>MENOR</strong>.</p>`
    }
    else if(palpite < randomNum){
        saida.innerHTML += `<p>O numero que eu escolhi é <strong>MAIOR</strong>.</p>`
    }
    else if(palpite == randomNum){
        saida.innerHTML += `<p>O numero que eu escolhi é <strong>${randomNum}</strong>.</p>`
    }
}
