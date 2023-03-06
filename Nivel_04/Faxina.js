const Limpar = (objetoOriginal) =>{
    if(objetoOriginal.nome === null){
        delete objetoOriginal.nome
    }else if(objetoOriginal.sobrenome === null){
        delete objetoOriginal.sobrenome
    }else if(objetoOriginal.idade === null){
        delete objetoOriginal.idade
    }else{
        console.log("Nada a deletar");
    }

    console.log(objetoOriginal);
}

Limpar({nome: null, sobrenome: "Woibau", idade: 22});