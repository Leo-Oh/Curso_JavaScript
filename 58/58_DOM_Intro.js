console.log("********** ELEMENTOS DEL DOCUMENTO **********");
console.log(window.document);
console.log(document);//Devuelve todo el documento incluyendo el doctype
console.log(document.head);
console.log(document.body);
console.log(document.documentElement);//solo el html sin el doctype
console.log(document.doctype);
console.log(document.charset);
console.log(document.title);
console.log(document.links);
console.log(document.images);
console.log(document.forms);
console.log(document.styleSheets);
console.log(document.scripts);

setTimeout(()=>{
    console.log(document.getSelection().toString());
},3000);

document.write("<h2>Hola mundo</h2>");