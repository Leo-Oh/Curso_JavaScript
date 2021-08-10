const promedio=(arr = undefined)=>{

    if (arr === undefined) return console.warn("No ingresaste un arreglo de números");

    if(!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo");

    if(arr.length === 0) return console.error("El arreglo esta vacio");

    for(let num of arr){
        if(typeof num !== "number") return console.error(`El valor "${num}" ingresado,no es un número`);
    }
    /* 
    total = acumulador
    num = el elemento que se esta recorriendo
    index = posicion
    arr = arreglo como tal
    */
    return console.info(
        arr.reduce((total, num,index,arr) => {
            total+=num;
            if(index === arr.length-1){
                return `El promedio de ${arr.join(" + ")} es ${total / arr.length}`;
            }else{
                return total;
            }
        })
    );
}

promedio();
promedio({});
promedio([1,"b"]);
promedio([1,2,3,4,5,6,7,8,9,10]);
