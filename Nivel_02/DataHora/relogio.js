
const meses = ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez']

const dias = ['Dom','Seg','Ter','Qua','Qui','Sex','Sáb']

function Analisar(){
    let saida = document.getElementById('saida')
    let dataAtual = new Date()
    let dia = dataAtual.getDate()

    let mes = dataAtual.getMonth()
    let nomeMes = meses[mes]

    let ano = dataAtual.getFullYear()
    let diaSemana = dataAtual.getDay()
    let nomeDiaSem = dias[diaSemana]

    let hora = dataAtual.getHours()
    let minuto = dataAtual.getMinutes()
    let segundo = dataAtual.getSeconds()

    saida.innerHTML = `<p>Dia: ${dia}<br>
    Mês: ${nomeMes}<br>
    Ano: ${ano}<br>
    Dia da semana: ${nomeDiaSem}<br>
    Hora: ${hora}<br>
    Minutos: ${minuto}<br>
    Segundos: ${segundo}</p>`
}

