const descuento = (cantidad_total=undefined,descuento=undefined)=>{

    if (cantidad_total === undefined || descuento === undefined) return console.warn("No ingresaste un numero");

    if (typeof cantidad_total !== "number" ||typeof descuento !== "number" ) return console.warn("El valor ingresadp no es un numero");

    if(cantidad_total === 0) return console.error("La cantidad todal no puede ser 0");

    if(descuento > 100) return console.error("El descuento no puede ser mayor al 100%");

    if (Math.sign(cantidad_total) === -1 || Math.sign(descuento) === -1) return console.console.error("La cantidad total o el descuento no puede ser negativo");

    return ((100-descuento)*0.01)*cantidad_total;
}

console.log(descuento(1000,20));