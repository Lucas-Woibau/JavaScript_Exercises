const saida = document.getElementById('saida')

function Mostrar(){
    
    for(var i = 1; i <=10; i++){     
        if(i%2 != 0){
            saida.innerHTML += `<p><mark>${i}</mark></p>`
        }
    }
}