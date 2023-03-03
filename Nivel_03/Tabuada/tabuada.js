function Contar(){
    let saida = document.getElementById('saida')
    let num = parseInt(document.getElementById('fnum').value)

    if (num < 0) {
        alert("Por favor, digite um número positivo.");
        return;
      }

    for(var i = 1; i <= 10; i++){
        saida.innerHTML += `<p>${i} x ${num} = <mark>${i * num}</mark></p>`
    }

}