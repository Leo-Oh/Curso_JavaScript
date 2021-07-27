function contarPalabra(text="",wordToFind=""){
    if(text === "" || wordToFind === ""){
        console.warn("No se ingreso una cadena valida");
    }else{
        let count=0,cw=0;
        for (const key in text) {
        try{ 
           if(wordToFind == text.substring(cw,cw+wordToFind.length)){
             count+=1;
           }
           cw+=1; 
        }catch (error){
            console.error(`Ocurrio un error: ${error}`)
        }
        }
        return count;
    }
}

console.log(contarPalabra("Pluton es un mundo, muy pequeño,para ser un mundo","mundo"));