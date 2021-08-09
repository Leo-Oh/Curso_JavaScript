const numero_alto_y_bajo=(coleccionArray = [])=>{
    if (!coleccionArray || coleccionArray.length === 0) return console.warn("No ingresaste una arreglo");

    if (!(coleccionArray instanceof Array)) return console.error(`El valor "${coleccionArray}" ingresado,No es un array valido`);
    
    let aux=[],max,min;
    
    for (const key in coleccionArray) {
        if (typeof coleccionArray[key] !== "number") {
            console.error("Se encontró un tipo de dato diferente a un numero");
            continue;
        }else{
            max = Math.max.apply(null,coleccionArray),
            min = Math.min.apply(null,coleccionArray);
        }  
    }
    aux[0]=max,aux[1]=min;
   return  console.log(aux);
}

numero_alto_y_bajo([3,-24,6,75,24]);