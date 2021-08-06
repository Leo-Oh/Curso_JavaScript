const  validate_email = (email = "") => {
    if (!email) return console.warn("No ingresaste una email correcto");

    if (typeof email !== "string") return console.error(`El valor "${email}" ingresado,No es un email valido`);

    let expReg =  /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(email);
    return(expReg)
    ?console.info(`"${email}",es un email valido`) 
    :console.warn(`"${email}",No es un email valido`); 
}

validate_email();
validate_email(342);
validate_email("leonardo,m,2246@gmail");
validate_email("leonardo.m234569@gmail.com");
