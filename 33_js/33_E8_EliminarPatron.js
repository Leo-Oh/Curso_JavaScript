const eliminarCaracteres = (texto = "", patron = "") =>
(!texto)
?console.warn("No ingresaste un texto")
:(!patron)
?console.warn("No ingresaste un patrón de caracteres")
:console.info(texto.replace(new RegExp(patron,"ig"),""));

eliminarCaracteres();
eliminarCaracteres("xyz1,xyz2,xyz3,xyz4,xyz5","xyz");