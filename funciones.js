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

//operadores 
var suma = 3 +2; //suma
var resta = 3 - 10; //resta
var multi = 3 * 10; //multiplicación
var divi = 10 / 2; //división

var concatenar = "nombre" + " " + "apellido"; //concatenación
var negacion = true
console.log(!negacion)