const capicua= (numero=0)=>{
   if(!numero)return console.warn("No ingresaste un número");
   if(typeof numero !== "number")return console.error(`El valor "${numero}" ingresado,No es un número`);
   numero = numero.toString();
   let alReves = numero.split("").reverse().join("");

   return(numero === alReves)
   ?console.info(`Si es capicua ${numero},Número al revés ${alReves}`)
   :console.info(`No es capicua ${numero},Número al revés ${alReves}`)
}

console.log(capicua(121));