const Contar = (letra,string) => {
    var cont = 0;
    for(var i in string){
        if(letra == string[i]){
            cont++;
        }
    }
    console.log(cont);
}

Contar("a", "uma frase qualquer");