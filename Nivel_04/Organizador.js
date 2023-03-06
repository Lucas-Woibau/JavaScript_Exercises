let pessoas = [
    {souEu: true, admin: true, nome: "Lucas"},
    {souEu: false, admin: false, nome: "Sthefany"},
    {souEu: false, admin: true, nome: "João"}
];

const Organizador = (listaPessoas) =>{
    //Se eu retornar um valor menor do que 0, o a vem primeiro do que o b
    listaPessoas.sort((a, b) => {
        if(a.souEu === true && b.souEu === false){
            return -1;
        }
    });

    console.log(listaPessoas);

    listaPessoas.sort((a, b) => {
        if(a.admin === true && b.admin === false){
            return -1;
        }
    });

    console.log(listaPessoas);
};

Organizador(pessoas);