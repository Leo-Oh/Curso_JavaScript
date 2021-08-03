const numeroPrimo = (numero = undefined ) =>{
    if (numero === undefined) return console.warn("No ingresaste un numero");

    if (typeof numero !== "number") return console.warn("El valor ingresadp no es un numero");

    if(numero === 0) return console.error("El numero no puede ser 0");

    if(numero === 1) return console.error("El numero no puede ser 1");

    if (Math.sign(numero) === -1) return console.console.error("El numero no puede ser negativo");

    let divisible = false;

    for (let i = 2; i < numero; i++) {
        if((numero%1) ===0){
            divisible = true;
            break;
        }
    }

    return (divisible) ? console.log(`EL numero ${numero} NO es primo`): console.log(`El numero SI es primo`);

}


    

   