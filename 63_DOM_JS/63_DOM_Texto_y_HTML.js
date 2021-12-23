$whatIsDOM = document.getElementById("que-es");

text=`
    <p>
        El Modelo de Objetos del Documento(<b><i>DOM-Document Object Model</i></b>)Es una API para 
     para documentos HTML y XML
    </p>

    <p>
        Éste proveé una representación estructural del documento, permitiendo modificar su contenido y
        presentaciòn visula mediante còdigo JS.
    </p>
        <mark> El DOM no es parte de las especificaciòn de JavaScript, es una API para los navegadores.</mark>
    </p> 
`;

/**
 * innerText -> No forma parte del estandar
 * Fue desarrollado para internet explorer
 * No interpreta las etiquetas HTML
 */
//$whatIsDOM.innerText = text; //Muestra el texto tal cual
$whatIsDOM.textContent =text; //Muestra el texto corrido 

 //Permite la insecciòn de codigo html sobre el elemento del DOM al que apunta
$whatIsDOM.innerHTML =text;
//Remplaza el elemento del DOM al que apunta e inserta el nuevo
$whatIsDOM.outerHTML =text;
