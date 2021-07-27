import { estavacia, longitud } from "./32_E1_Funciones.js";

function recortar(text, amountToCut) {
    try {
        let newString = ``;
        if (longitud(text) > 0 && longitud(text) <= amountToCut) {
            for (const key in text) {
                if (key <= amountToCut) {
                    newString += text[key];
                }
            }
        } else {
            console.error("Datos erroneos,verifique");
        }
        return newString;
    } catch (error) {
        console.log(`Ocurrio un error al intentar recortar la cadena: ${error}`);
    }
}

//console.log(recortar("Hola mundo", 4));