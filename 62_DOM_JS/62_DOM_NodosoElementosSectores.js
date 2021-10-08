//============= DEVUELVEN UNA COLECCION DE HTML =========

//Obtener coleccion html de las etieuqtas con nombre  ---
console.log(document.getElementsByTagName("li"));
//Obtener coleccion html de las etiquequtas con nombre de la clase  ....
console.log(document.getElementsByClassName("card"));
//Obtener unicamente la coleccion html de las etiquetas con el nombre...
console.log(document.getElementsByName("nombre"));
//Obtener unicamente la etiqueta con el identificador...
console.log(document.getElementById("menu"));

//============= DEVUELVEN UNA NODE LIST =========

/**
 * Lo anterior ah sido rempleazado con dos instrucciones
 * que toma un selector como lo hace css(en este caso es necesario
 * especificar el tipo de etiqueta que vamos a utlizar como en css)
 * 
 *
 */
console.log(document.querySelector("#menu"));
console.log(document.querySelector("a"));
// Nota: document.querySelector() recupera el primer elemento especificado

//------- Devolver todos los elementos especificados -------
console.log(document.querySelectorAll("a"));
document.querySelectorAll("a").forEach((el) => console.log(el));
console.log(document.querySelector(".card"));
console.log(document.querySelectorAll(".card"));
console.log(document.querySelectorAll(".card")[2]);//Al igual que los arreglos podemos ocupar por indice  
console.log(document.querySelector("#menu li")); //Selectores descendientes
console.log(document.querySelectorAll("#menu li"));