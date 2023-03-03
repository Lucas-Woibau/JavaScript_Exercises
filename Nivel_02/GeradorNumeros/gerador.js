let saida = document.getElementById('saida')

function Gerar(){
    let randomNum = Math.floor(Math.random() * 101)
    saida.innerHTML += `<p> Número: <mark>${randomNum}</mark>.</p>`
}