function Clicado(){
    let saida = document.getElementById('saida')

    const date = Date.now()
    const today = new Date(date)

    saida.innerHTML = `<p>O que eu recebi do sistema foi ${today}</p>`
}