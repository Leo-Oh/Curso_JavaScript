const celsius_fahrenheit=(temperatura=undefined,unidadM="" )=>{
    if (temperatura === undefined) return console.warn("No ingresaste la temperatura");

    if (typeof temperatura !== "number") return console.warn("El valor ingresado no es una temperatura");

    if (unidadM === "" || unidadM === undefined)return  console.warn("No ingresaste ninguna unidad de medida");


    if(unidadM === "c" || unidadM.toLowerCase === "celsius") return console.log(`${temperatura}°C es igual a ${Math.round((temperatura*0.556)+32)}°F`);

    if(unidadM === "f" || unidadM.toLowerCase === "fahrenheit") return console.log(`${temperatura}°F es igual a ${Math.round((temperatura-32)* 0.556)}°C`);


}

celsius_fahrenheit();
celsius_fahrenheit(0,"");
celsius_fahrenheit("","c");
celsius_fahrenheit(32,0);
celsius_fahrenheit(500,"f");
celsius_fahrenheit(30,"c");