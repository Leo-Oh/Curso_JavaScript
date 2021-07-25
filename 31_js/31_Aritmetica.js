/*
export function sumar(a,b){
    return a+b;
}
export function restar(a,b){
    return a-b;
}
*/
function sumar(a,b){
    return a+b;
}
function restar(a,b){
    return a-b;
}

//Tambien podemos devolver todo en un solo objeto

export const aritmetica = {
    sumar,
    restar
};

