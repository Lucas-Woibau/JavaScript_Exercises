let saida = document.getElementById('saida')

function Clicou(){
    let mes = prompt("Digite o nome do mes: ").toUpperCase()

    if(mes == "SETEMBRO" || mes == "OUTUBRO" | mes == "NOVEMBRO"){
        saida.innerHTML = `<p>Estamos no mês ${mes} e é PRIMAVERA.</p>`
    }

    if(mes == "DEZEMBRO" || mes == "JANEIRO" | mes == "FEVEREIRO"){
        saida.innerHTML = `<p>Estamos no mês ${mes} e é VERÃO.</p>`
    }

    if(mes == "MARÇO" || mes == "ABRIL" | mes == "MAIO"){
        saida.innerHTML = `<p>Estamos no mês ${mes} e é OUTONO.</p>`
    }

    if(mes == "JUNHO" || mes == "JULHO" | mes == "AGOSTO"){
        saida.innerHTML = `<p>Estamos no mês ${mes} e é INVERNO.</p>`
    }
}