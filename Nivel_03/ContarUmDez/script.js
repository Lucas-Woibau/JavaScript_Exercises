const saida = document.getElementById('saida')

function Contar(){
    for(var i = 1; i <= 10; i++){
        saida.innerHTML += `👉${i}`
    }
}