import {estavacia,longitud} from "./32_E1_Funciones.js";

function repetir(text,amount){
    try {
        let newString = ``;
        if (longitud(text) > 0 && amount > 0) {
            for (let i = 0; i <= amount; i++) {
               newString+=text;
            }
        } else {
              console.error("Datos erroneos,verifique");
        }
        return newString;
    } catch (error) {
        console.log(`Ocurrio un error al intentar multiplicar la cadena: ${error}`);
    }
}

console.log(repetir("XD",2));