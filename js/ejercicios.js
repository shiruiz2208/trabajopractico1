//Esto es un comentario de una sola linea //

/*Esto es 
un comentario 
de 
multples lineas*/


//Conceptos Basicos-inicializar variables//
let comision = "c74i";

//Mostrar mensaje //
console.log ( 7 + 8);
console.log( comision);
console.log( "comision" +" " + comision);

//muestra el memsaje en el documento html//
 document.write ("<h1 class= 'tituloPrincipal'> Hola world <br> soy Batman</h1>");

 //ventanas emergentes//
 alert ("esto es un alerta");//

 //solicitar un color al usuario//
 let color = prompt ("Ingrese su color favorito");

  console.log(color);
  //modificamos el contenido de la variable//
  color = "Rojo";
  console.log(color);

  let numeroSeleccionado =parseInt( prompt ("Ingrese un numero entre 1 y 50"));
  console.log (numeroSeleccionado+ 30);



//parseInt("30")
//parseFloat("30,4")

const url ="https://universe.rollingcodeschool";
console.log(url);


//TP NUM 1 : Ejercicio 1: Variables y Operaciones Matemáticas //
let number1 = 4;
let numer2 = 2;

console.log( "El resultado de la suma es" + " " + ( number1 + numer2));

console.log(number1 - numer2);

console.log (number1 *numer2);

console.log (number1 / numer2);

//Ejercicio 2: Concatenación de Cadenas//

let nombre = "Juan";
let apellido = "Perez";
let nombreCompleto = nombre + " " + apellido
;


console.log( nombre);
console.log (apellido);
console.log(nombreCompleto);



//Ejercicio 3: Conversión de Grados Celsius a Fahrenheit//
//// Declarar la variable gradosCelsius y asignarle un valor en grados Celsius
var gradosCelsius = 254;
var gradosFahrenheit = (gradosCelsius * 9/5) + 32;


console.log("Grados Celsius: " + gradosCelsius);
console.log("Grados Fahrenheit: " + gradosFahrenheit);


