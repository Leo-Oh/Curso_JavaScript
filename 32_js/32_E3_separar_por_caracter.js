import { longitud } from "./32_E1_Funciones.js";

function separar(text, caracter) {
    try {
        const new_array = new Array();
        let newString = ``;
        if (longitud(text) > 0) {
            for (const key in text) {
                newString += text[key];
                if (text[key] == caracter) {
                    new_array.push(newString.replace(caracter,""));
                    newString = ``;
                }
            }
            new_array.push(newString.replace(caracter,""));
            newString = ``;
            return new_array;
        } else {
            console.error("Datos erroneos,verifique");
        }
        return newString;
    } catch (error) {
        console.log(`Ocurrio un error al intentar separar la cadena: ${error}`);
    }
}

//console.log(separar("1-2-3-4-5-6-7-8-9", "-"));