const vocales_consonantantes = (text = "") => {
    if (!text) return console.warn("No ingresaste una cadena de texto");

    if (typeof text !== "string") return console.error(`El valor "${text}" ingresado,No es una cadena de texto`);

    let vocales = 0, consonantes = 0;

    for (let letra of text) {
        if (/[AEIOUÁÉÍÓÚaeiouáéíóúÜ]/.test(letra)) vocales++;

        if (/[BCDFGHJKLMNÑPQRSTVXZWYbcdfghjklmnñpqrstvxzwy]/) consonantes++;
    }

    return console.info({
        text,
        vocales,
        consonantes 
    })
}

vocales_consonantantes();
vocales_consonantantes(345);
vocales_consonantantes("Hola mundo ");