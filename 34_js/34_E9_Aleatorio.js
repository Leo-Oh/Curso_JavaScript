const aleatorio =()=>{
    let random,band=false;
    do {
        random=Math.random()*1000;
        if(random > 500 && random<600){
            return random;
            band=true;
        }
    } while (band === false);  
};

console.log(aleatorio());
