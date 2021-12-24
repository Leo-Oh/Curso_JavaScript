/**
 * CREAMOS UNA ETIQUETA NUEVA
 */

// 1- Creamos los nodos
const $figure = document.createElement('figure'),
$img = document.createElement('img'),
$figcaption = document.createElement('figcaption'),
$figcaptionText = document.createTextNode('Animals'), 
$cards = document.querySelector('.cards');

const $figure2 = document.createElement('figure');

// 2.- Configuramos sus propiedades
$img.setAttribute("src","https://placeimg.com/200/200/animals");
$img.setAttribute("alt","Animals");
$figure.classList.add("card");

// 3.- Agremos de forma ascendente
$figcaption.appendChild($figcaptionText);
$figure.appendChild($img);
$figure.appendChild($figcaption);

$cards.appendChild($figure);

// Tambien se puede ahorrar codigo de la siguiente manera
$figure2.innerHTML=`
    <img src="https://placeimg.com/200/200/people" alt="People">
    <figcaption>People</figcaption>
`;
$figure2.classList.add("card");
$cards.appendChild($figure2);

const estaciones = ["Primavera","Verano", "Otoño","Invierno"],
$ul = document.createElement("ul");


// Generar nodos de varios elementos, dinamicamente 
document.write("<h3>Estaciones del año</h3>");
document.body.appendChild($ul);

estaciones.forEach((element) => {
    const $li = document.createElement('li');
    $li.textContent = element;
    $ul.appendChild($li);
})

const continentes = ["Africa", "America", "Asia", "Europa", "Oceania"],
$ul2 = document.createElement('ul');

document.write("<h3>Continentes del mundo </h3>");
document.body.appendChild($ul2);
$ul2.innerHTML="";//importante inicializarlo

continentes.forEach((element) => {$ul2.innerHTML += `<li> ${element} </li>`;});


/**
 * INSERCCIÓN CON FRAGMENTOS
 * 
 * -- las insercciones al DOM son de lo que mas recursos consume --
 * hacer muchas insecciones al DOM disminuye el rendimiento
 * 
 */

const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
];

$ul3 = document.createElement('ul');
$fragment = document.createDocumentFragment();

meses.forEach(element => {
    const $li = document.createElement('li');
    $li.textContent = element;
    // Agregamos al nodo fragmento un appendChild
    $fragment.appendChild($li);
});

document.write("<h3>Meses del año </h3>");
$ul3.appendChild($fragment);
document.body.appendChild($ul3);