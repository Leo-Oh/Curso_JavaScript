console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute("lang"));
console.log(document.querySelector(".link-dom").href);
console.log(document.querySelector(".link-dom").getAttribute("href"));






/*
console.log(document.documentElement.lang);// Obtener el valor de los atributos html
console.log(document.documentElement.getAttribute("lang"));

//console.log(document.querySelector(".link-dom").href);
console.log(document.querySelector(".link-dom").getAtribute("href"));
*/
/**
 * Cambiar los atribibutos
 */
document.documentElement.lang = "en";
console.log(document.documentElement.lang);

document.documentElement.setAttribute("lang","es-MX");
console.log(document.documentElement.lang);

/**
 * Se recomienda usar el $ en las variables donde hacemos uso del DOM
 * y usar const par
 */
const $linkDOM = document.querySelector(".link-dom");

$linkDOM.setAttribute("target","_blank");
/**
 * Cualquier enelance con un tarje _blank o siempre que abrimos
 *  una pestaña con programacion, evitamos que sea insegura con:
 */
$linkDOM.setAttribute("rel","noopener");

$linkDOM.setAttribute("href","http:google.com")

console.log($linkDOM.hasAttribute("rel"));
$linkDOM.removeAttribute("rel");
console.log($linkDOM.hasAttribute("rel"));


//Data-Attributes
console.log($linkDOM.getAttribute("data-description"));
console.log($linkDOM.dataset);
console.log($linkDOM.dataset.description);
$linkDOM.setAttribute("data-description","Modelo de Objeto del Documento");
console.log($linkDOM.dataset.description);
$linkDOM.dataset.description = "Suscribete a mi canal y comparte";
console.log($linkDOM.dataset.description);
console.log($linkDOM.hasAttribute("data-id"));
console.log($linkDOM.removeAttribute("data-id"));