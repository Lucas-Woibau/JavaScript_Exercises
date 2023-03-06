const Moldura = (row, collumn) => {
    var line = "+";
    var middleLine = "-"

    if(row > 0 && collumn > 0){
        for(var i = 0; i < row; i++){
            line += "-";
            middleLine += " ";
        }

        line += "+";
        middleLine += "-";

        console.log(line);
        for(var i = 0; i < collumn; i++){
            console.log(middleLine);
        }
        console.log(line);
    }
};

Moldura(3, 5);