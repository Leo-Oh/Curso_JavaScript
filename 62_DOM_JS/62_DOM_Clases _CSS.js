$card = document.querySelector(".card");

console.log($card);
console.log($card.className); //Muestra en plain text las clases del elemento seleccionado
console.log($card.classList);//Muestra en forma de lista las clases del elemento seleccionado
console.log("Contiene rotate-45",$card.classList.contains("rotate-45"));//Verifica si contiene la clase y devuelve un valor true o false
$card.classList.add("rotate-45");
console.log($card.className);
console.log($card.classList);
console.log("Contiene rotate-45",$card.classList.contains("rotate-45"));
$card.classList.remove("rotate-45");
console.log("Contiene rotate-45",$card.classList.contains("rotate-45"));
//Sirve para verificar si no continene la clase 
//y si no la tiene la agrega
$card.classList.toggle("rotate-45");
console.log("Contiene rotate-45",$card.classList.contains("rotate-45"));
//remplazamos rotate 45 por 75
$card.classList.replace("rotate-45", "rotate-135");

$card.classList.add("opacity-80","sepia");
console.log("Contiene opacity-80 y sepia",$card.classList.contains("opacity-80","sepia"));
$card.classList.remove("opacity-80","sepia");
console.log("Contiene opacity-80 y sepia",$card.classList.contains("opacity-80","sepia"));
$card.classList.toggle("opacity-80","sepia");
console.log("Contiene opacity-80 y sepia",$card.classList.contains("opacity-80","sepia"));