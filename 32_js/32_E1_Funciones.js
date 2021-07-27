export function longitud(cadena){
    try {
        if(estavacia(cadena) === false){
            return cadena.length;
        }
    } catch (error) {
        console.error(`No es una cadena`);
    }
    
}

export function estavacia(cadena){
    if(cadena.length == 0){
        console.error("La cadena está vacia");
        return true;
    }else{
        return false;
    }
}

//console.log(longitud("Hola mundo"));