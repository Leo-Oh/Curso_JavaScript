const array_cuadrados = (coleccionArray = []) => {

    if (!coleccionArray || coleccionArray.length === 0) return console.warn("No ingresaste una arreglo");

    if (!(coleccionArray instanceof Array)) return console.error(`El valor "${coleccionArray}" ingresado,No es un array valido`);

    let newArray = [], i = 0;
    for (const key in coleccionArray) {
        if (typeof coleccionArray[key] !== "number") {
            console.error("Se encontró un tipo de dato diferente a un numero");
            continue;
        } else {
            newArray[i] = Math.pow(coleccionArray[key], 2);
            i++;
        }
    }
    return console.log(newArray);
}

array_cuadrados([1, 4, 5]);
array_cuadrados();
array_cuadrados({});
array_cuadrados("");
array_cuadrados(4);
array_cuadrados([1, "as", 5]);