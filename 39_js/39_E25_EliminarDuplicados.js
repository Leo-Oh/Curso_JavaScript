const eliminarDuplocado=(arr = undefined)=>{

    if (arr === undefined) return console.warn("No ingresaste un arreglo de números");

    if(!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo");

    if(arr.length === 0) return console.error("El arreglo esta vacio");

    if(arr.length === 1) return console.error("El arreglo debe tener minimo dos elementos");

   return console.info({
        original : arr,
        sinDuplicados : arr.filter((value,index,self) => self.indexOf(value) === index)
    });

    /*
        =============================
            Forma más optimizada
        =============================
        return console.info(original: arr,sin duplicados[... new Set(arr)]);
    */

}

eliminarDuplocado();
eliminarDuplocado([]);
eliminarDuplocado(2);
eliminarDuplocado({});
eliminarDuplocado([12,"a",10,12,"10","b",true,false,true]);