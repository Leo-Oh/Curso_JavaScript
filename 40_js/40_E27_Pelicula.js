class Pelicula{

    constructor({id,titulo,director,estreno,pais,generos,calificacion}){
        this.id = id;
        this.titulo = titulo;
        this.director = director;
        this.estreno = estreno;
        this.pais = pais;
        this.generos = generos;
        this.calificacion = calificacion;


        this.validarIMDB(id);
        this.validarTitulo(titulo);
        this.validarDirector(director);
        this.validarEstreno(estreno);
        this.validarPais(pais);
        this.validarGeneros(generos);
        this.validarCalificacion(calificacion);
    }

    //Atributo estatico
    static get listaGeneros(){
        return ["Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Documentary" ,"Drama", "Family",
            "Fantasy", "Film Noir", "Game-Show", "History", "Horror", "Musical", "Music", "Mystery", "News", "Reality-TV", "Romance", "Sci-Fi",
            "Short", "Sport", "Talk-Show", "Thriller", "War", "Western"];
    }

    //Metodo estatico
    static generosAceptados(){
        return console.info(`Los generos aceptados son: ${Pelicula.listaGeneros.join(",")}`);
    }

    validarCadena(propiedad,valor){

        if(!valor) return console.warn(`${propiedad} "${valor}" ingresado,NO es una cadena de texto`);
        
        if(typeof valor !== "string") return console.error(`${propiedad} "${valor}" ingresado,No es una cadena de texto`);
    
        return true;
    }

    validarLongitudCadena(propiedad,valor,longitud){
        if (valor.length > longitud) return console.error(`${propiedad} "${valor}" excede el numero de caracteres permitidos (${longitud}).`)
        
        return true; 
    }

    validarNumero(propiedad,valor){
        if (!valor) return console.warn(`${propiedad} "${valor}" esta vacio`);

        if(typeof valor !== "number") return console.error(`${propiedad} "${valor}" ingresado,NO es un número`);

        return true;
    }

    validarArreglo(propiedad,valor){
        if (!valor) return console.warn(`${propiedad} "${valor}" esta vacio`);

        if (!(valor instanceof Array)) return console.error(`${propiedad} "${valor}" ingresado, NO es un arreglo`);

        if (valor.length === 0)return console.error(`${propiedad} "${valor}" no tiene datos`);

        for(let cadena of valor){
            if (typeof cadena !== "string") return console.error(`El valor "${cadena}" ingresado, NO es una cadena de textos`)
        }
        return true;
    }

    validarIMDB(id){
        if(this.validarCadena("IMDB id",id)){
            //Validamos que no tenga nada antes, de "a" a la "z" con un total de 2 digitos m y numeros del "0-9" y puede aceptar hasta 7
           //los dos primeros letras y los 7 ultimos numeros
            if(!(/^([a-z]{2}[0-9]{7})$/.test(id))) {
                return console.error(`IMDB id "${id}"  no es válido debe tener 9 caracteres, los 2 primeros letras minúsculas, los 7 restantes números.`);
            }
        }
    }

    validarTitulo(titulo){
        if (this.validarCadena("Titulo",titulo)){
            this.validarLongitudCadena("Titulo",titulo,100);
        }
    }

    validarDirector(director){
        if (this.validarCadena("Director",director)){
            this.validarLongitudCadena("Director",director,50);
        }
    }

    validarEstreno(estreno){
        if (this.validarNumero("Año de Estreno", estreno)){
            if(!(/^([0-9]{4})$/.test(estreno))) {
                return console.error(`Año de Estreno "${estreno}"  no es válido debe ser un numero de 4 digitoss.`);
            }
        }
    }

    validarPais(pais){
        this.validarArreglo("Pais",pais);
    }

    validarGeneros(generos){
       if(this.validarArreglo("Géneros",generos)){
            for(let genero of generos){
                //console.log(genero,Pelicula.listaGeneros.includes(genero));
                if (!Pelicula.listaGeneros.includes(genero)) {
                    console.error(`Gneros(s) incorrectos "${generos.join(",")}"`);
                    Pelicula.generosAceptados();
                }
            }
       }
    }


    validarCalificacion(calificacion){
        if (this.validarNumero("Calificacion", calificacion)){
            return (calificacion < 0 || calificacion > 10)
                ? console.error(`La calificacion tiene que estar en un rango entre 0 y 10`)
                : this.calificacion = calificacion.toFixed(1);
        }
    }

    fichaTecnica(){
        console.info(`Ficha tecnica: \nTitulo: "${this.titulo}" \nDirector:"${this.director}"\nAño:"${this.estreno}"\nCalificacion:"${this.calificacion}"\nIMDB Id: "${this.id}"`);
    }

}

Pelicula.generosAceptados();
const peli = new Pelicula({
    id : "tt1234567",
    titulo: "titulo de la pelicula",
    director: "director de la pelicula",
    estreno: 2021,
    pais: ["Mexico","EE.UU"],
    generos: ["Action"],
    calificacion: 5.6
});

peli.fichaTecnica();
