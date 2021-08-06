const  validate_name = (nombre = "") => {
    if (!nombre) return console.warn("No ingresaste una cadena de texto");

    if (typeof nombre !== "string") return console.error(`El valor "${nombre}" ingresado,No es una cadena de texto`);

    let expReg = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜ\s]+$/g.test(nombre);
    return(expReg)
    ?console.info(`"${nombre}",es un nombre valido`)
    :console.warn(`"${nombre}",No es un nombre valido`);
}

validate_name();
validate_name(3);
validate_name("Leonardo Martinez");
validate_name("Leonardo Martinez 2o");