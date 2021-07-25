/* 
1. Importacion de modulos
2. declaracion de variables
3. declaracion de funciones
4. ejecuccion de codigo
*/

/*
Importamos el archivo
{} es como si mandaramos a llamar todas las funciones que estan exportadas en el archivo
from que hace referencia a la url del archvivo que vamos a ocupar 
(el ./ indica que apartir de la carpeta de donde nos encontramos, para subir un nivel de carpeta es con ../)
*/
import {PI} from "./31_Constantes.js";
//import {sumar,restar} from "./31_Aritmetica.js";
import {aritmetica} from "./31_Aritmetica.js";
import saludar from "./31_Constantes.js";
//Darle un alias a la importacion
//import {aritmetica as calculo} from "./31_Aritmetica.js";

console.log("Archivo js");

console.log(PI);

//console.log(sumar(3,7));
//console.log(restar(10,2));

console.log(aritmetica.sumar(8,7));
console.log(aritmetica.restar(20,4));
saludar();