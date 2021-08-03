const factorial = (numero = undefined) => {
    if (numero === undefined) return console.warn("No ingresaste un numero");

    if (typeof numero !== "number") return console.warn("El valor ingresadp no es un numero");

    if (Math.sign(numero) === -1) return console.console.error("El numero no puede ser negativo");

    if (numero === 0) {
        return console.log(`El factorial de 0 es 1`);
        
    } else {
        let factorial = 1;

        for (let i = numero; i > 1; i--) {
            factorial = factorial * i;
        }

        return console.info(`El factorial de ${numero} es ${factorial}`);
    }
}
factorial();
factorial("5");
factorial(1, 2, 3);
factorial(0);
factorial(8);