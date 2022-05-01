// funciones declarativas
function saludar(nombre){
    console.log(`Hola ${nombre}`)
}
saludar("herwin")

//Expresión de funciones

var funcion = function(nombre){
    console.log(`Hola ${nombre}`)
}

funcion("Alexandra");

//scope depende donde se escribe la variable 
//Scope Global
//Scope Local

var miNombre = "Diego";
function nombre(){
    var miApellido = "De Granda";
    console.log(miNombre + " " + miApellido)
}

nombre();
console.log(miNombre)