//const $linkDOM= document.querySelector(".link-dom");

$linkDOM = document.querySelector('.link-dom');

//ES mas frecuente y nos proporciona todo
console.log($linkDOM.style); 

//Nos retorna solo la informacion de lo seleccionado
console.log($linkDOM.getAttribute("style"));

console.log($linkDOM.style.backgroundColor);

console.log($linkDOM.style.color);

//Nos devuelve los valores css que el navegador coloca por default
console.log(window.getComputedStyle($linkDOM));

//Seleccionamis unicamente el valor de una clase css
console.log(getComputedStyle($linkDOM).getPropertyValue("color"));

//asignamos una pripiedad css como en una hoja de estilos, sin calmeCase
$linkDOM.style.setProperty("text-decoration","none");
$linkDOM.style.setProperty("display","block");
//Asignamos con la notacion del punto
$linkDOM.style.width = "50%";
$linkDOM.style.textAlign = "center";
$linkDOM.style.marginLeft = "auto";
$linkDOM.style.marginRight = "auto";
$linkDOM.style.padding = "1rem";
$linkDOM.style.borderRadius = ".5rem";

console.log($linkDOM.getAttribute("style"));
console.log(getComputedStyle($linkDOM));


// ====== Variables CSS-Custom Properties CSS ======

$html = document.documentElement;//Representa el hml
$body = document.body;

varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"),
varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

console.log(varDarkColor,varYellowColor);

$body.style.backgroundColor = varDarkColor;
$body.style.color = varYellowColor;

// ---- CAMBIAR DE COLOR DE LA VARIABLE ROOT ---
$html.style.setProperty("--dark-color","#3232e6");
varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");

$body.style.setProperty("background-color",varDarkColor);

