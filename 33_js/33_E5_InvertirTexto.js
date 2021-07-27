const invertir = (text="") => (text === "" || text === undefined) ? console.warn("No ingresaste ninguna cadena"):text.split('').reverse().join('');
console.log(invertir("hola  mundo"));