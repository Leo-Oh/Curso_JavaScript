const objetos_pares_impares=(coleccionArray = [])=>{

    if (!coleccionArray || coleccionArray.length === 0) return console.warn("No ingresaste una arreglo");

    if (!(coleccionArray instanceof Array)) return console.error(`El valor "${coleccionArray}" ingresado,No es un array valido`);
    
    let datos={},par=[],impar=[],i=0,j=0;
    
    for (const key in coleccionArray) {
        if (typeof coleccionArray[key] !== "number") {
            console.error("Se encontró un tipo de dato diferente a un numero");
            continue;
        }else{
            if(coleccionArray[key] %2 ===0 ){
                par[i] = coleccionArray[key];
                i++;
            }else{
                impar[j] = coleccionArray[key];
                j++;
            }
        }  
    }
    datos={
        par,
        impar
    }
   return  console.log(datos);


}

objetos_pares_impares([1,2,3,4,5,6,7,8,9,10]);