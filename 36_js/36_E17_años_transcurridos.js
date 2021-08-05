const calculate_year=(fecha = undefined)=>{
    if(fecha === undefined) return console.warn("No ingresaste la fecha");
    if(!(fecha instanceof Date)) return console.error("El valor que ingresó no es una fecha valida");

    /*
        1000 ms = 1s
        1s*60 = 1 min
        1min*60 = 1hr
        1hr*24 = 1D
    */

    let hoyMenosFecha = new Date().getTime()-fecha.getTime(),
    yearsEnMs = 1000 *60*60*24*365,
    yearHuman = Math.floor(hoyMenosFecha / yearsEnMs);

    return (Math.sign(yearHuman) === -1)?console.info(`faltan ${Math.abs(yearHuman)} años para el ${fecha.getFullYear()}.`):(Math.sign(yearHuman) === 1)? console.info(`Han pasado ${yearHuman} años, desde ${fecha.getFullYear()}.`):console.info(`Estamos en el año actual ${fecha.getFullYear()}`);

}

calculate_year();
calculate_year({});
calculate_year(false);
calculate_year(new Date);
calculate_year(new Date(1984,4,23));
calculate_year(new Date(1884,4,23));
calculate_year(new Date(2084,4,23));