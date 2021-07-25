export const PI = Math.PI;

export let usuario = "leonardo";
export let password = "123";

//exportar una funcion por defecto

export default function saludar(){
    console.log("Hola mundo");
}

/*
    no se puede tener dos funciones por default importadas 
    
    export default function saludar2(){
        console.log("Hola mundo x2");
    }
*/


//Exportar constantes con default o variables declaradas

//let password2 = "qwerty";
//export default password2;
