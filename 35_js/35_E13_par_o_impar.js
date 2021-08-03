const par_o_impar =(numero = undefined )=>{
    if (numero === undefined) return console.warn("No ingresaste un numero");

    if (typeof numero !== "number") return console.warn("El valor ingresado no es un numero");

    if(numero === 0) return console.error("El numero no puede ser 0");

    if (Math.sign(numero) === -1) return console.console.error("El numero no puede ser negativo");

    return ((numero%2) ===0)?console.log("Par"): console.log("Impar");
}

par_o_impar("Hola mundo");
par_o_impar();
par_o_impar(9);
par_o_impar(8);