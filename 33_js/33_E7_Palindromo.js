const palindromo= (text="")=>((text ==="") ? console.warn("No se ingreso una cadea"):(text.replace(" ","").toLowerCase() === text.split('').reverse().join('').toLowerCase() ? true:false));

console.log(palindromo("salas"));