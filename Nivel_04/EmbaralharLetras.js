function EmbaralharPalavra (palavra){
    const letrasNaOrdem = palavra.split('');
    const letrasEmbaralhadas = [];

    while(letrasNaOrdem.length ){
        const sorteado = parseInt(Math.random() * letrasNaOrdem.length);
        const letraSelecionada = letrasNaOrdem.splice(sorteado, 1)[0];
    
        letrasEmbaralhadas.push(letraSelecionada);
    }

    return letrasEmbaralhadas.join(" ")
};

console.log(EmbaralharPalavra("Javascript"));
console.log(EmbaralharPalavra("html"));
console.log(EmbaralharPalavra("css"));

