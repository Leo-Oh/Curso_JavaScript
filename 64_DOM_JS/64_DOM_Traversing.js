const $cards = document.querySelector(".cards");

console.log($cards);
console.log($cards.children);//Acceder a los hijos (elementos)
console.log($cards.children[2]); //Acceder a uno en particular
console.log($cards.parentElement); //Acceder al padre de la etiqueta
console.log($cards.firstChild); //Acceder al primer hijo  (Es de tipo text por el tabulador entre las etiquetas)
console.log($cards.lastChild); //Acceder al ultimo hijo
console.log($cards.previousElementSibling); //Acceder al hijo anterior
console.log($cards.nextElementSibling); //Acceder al hijo siguiente

/***
 * Closest busca a al ancestro mas cercano (padre)
 */
console.log($cards.closest("div"));
console.log($cards.closest("body"));
console.log($cards.children[3].closest("secction"));
