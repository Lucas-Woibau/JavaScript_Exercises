const saida = document.getElementById('saida')

function Mostrar(){
    
    for(var i = 10; i >=1; i--){    
        saida.innerHTML += `<p>${i}</p>`
    }
}