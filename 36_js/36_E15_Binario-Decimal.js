const binario_decimal=(numero = undefined,base = undefined)=>{
    if(numero === undefined ) return console.warn("No ingresaste el numero a convertir");

    if(typeof numero !== "number")return console.console.error(`El valor ${numero} ingresado no es un numero`);

    if(base === undefined ) return console.warn("No ingresaste la base a convertir");

    if(typeof base !== "number")return console.error(`El valor ${base} ingresado no es un numero`);

    if(base === 2){
        return console.info(`${numero} base ${base} = ${parseInt(numero,2)} base 10`);
    }else if(base === 10){
        return console.info(`${numero} base ${base} = ${(numero.toString(2))} base 2`);
    }else{
        return console.error("El tipo de base a convertir no es valido");
    }
}


binario_decimal();
binario_decimal(100,"2");
binario_decimal(100,2);
binario_decimal(11101001,2);
binario_decimal(4,10);
binario_decimal(114,10);
binario_decimal(114,3);

