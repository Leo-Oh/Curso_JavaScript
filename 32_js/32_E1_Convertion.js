/* 
    input: tipo de dato de entrada 
    output: tipo de dato de salida esperado
*/

export const convert =  {
    number_to_string,
    string_to_float,
    string_to_int,
    boolean_to_string,
    string_to_boolean
}

function number_to_string(value){
    try {
        return value.toString();
        return value;
    } catch (error) {
        console.error(`Error to convert number to string: ${error}`);
    }
}

function string_to_float(value){
    try {
        return parseFloat(value);
    } catch (error) {
        console.error(`Error to convert string to float: ${error}`);
    }
}

function string_to_int (value){
    try {
        return parseInt(value);
    } catch (error) {
        console.error(`Error to convert string to int: ${error}`);
    }
}

function  boolean_to_string(value){
    try {
        return value.toString();
    } catch (error) {
        console.error(`Error to convert boolean to string: ${error}`);
    }boolean
}
function string_to_boolean(value){
    try {
        return value == "true" ? true : false;
    } catch (error) {
        console.error(`Error to convert string to boolean: ${error}`);
    }
    
}