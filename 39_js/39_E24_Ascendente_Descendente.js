const ascedente_descendente = ( arr = undefined) => {

    if (arr === undefined) return console.warn("No ingresaste un arreglo de números");

    if(!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo");

    if(arr.length === 0) return console.error("El arreglo esta vacio");

    for(let num of arr){
        if(typeof num !== "number") return console.error(`El valor "${num}" ingresado,no es un número`);
    }

    return console.info({
        arr,
        asc: arr.map(el => el).sort(),
        desc: arr.map(el => el).sort().reverse()});
}

ascedente_descendente();
ascedente_descendente("Hola");
ascedente_descendente([]);
ascedente_descendente([7,4,6,2,7,24,2,35]);
