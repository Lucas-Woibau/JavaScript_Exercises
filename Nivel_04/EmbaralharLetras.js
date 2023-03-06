const palavra = "javascript";
const letrasNaOrdem = palavra.split('');
const letrasEmbaralhadas = [];

while(letrasNaOrdem.length ){
    const sorteado = parseInt(Math.random() * letrasNaOrdem.length)
    const letraSelecionada = letrasNaOrdem.splice(sorteado, 1)[0]

    letrasEmbaralhadas.push(letraSelecionada)
}

console.log(letrasEmbaralhadas.join(" "))

