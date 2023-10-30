// Practicas con Variables //
/* Ejercicio 1 :
document.write("**ejercicio 1");alert("un mensaje"); */

/*alert("Hello world");

//ejercicio 2 - Escribe un programa de una sola línea que escriba en la pantalla un texto que diga «Hello World» (document.write).


/*document.write("Hello world");

//ejercicio 3: Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.

/*document.write("<br>3+5=" + (3 + 5));

//ejercicio 4  Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga «Hola nombreUsuario»,Ejemplo: 
//input: Coder// 
//Output: Hola Coder//


/*let nombre = prompt("ingrese su nombre");
document.write("<br>hola " + nombre);

//ejercicio 5 5.- Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.
//Nota: Tener en cuenta la siguiente función: parseInt
//https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/parseInt//


/*let num1 = parseInt(prompt("ejercicio 5/ingrese numero"));
let num2 = parseInt(prompt("ejercicio 5/ingrese otro numero"));
document.write("<br>resultado: " + (num1 + num2));

//ejercicio 6 Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
//Ejemplo: 
//input: 15 , 3//
//Output: El 15 es el número más grande//


/*let num3 = parseInt(prompt("ejercicio 6/ingrese numero"));
let num4 = parseInt(prompt("ejercicio 6/ingrese otro numero"));

if (num3 > num4) {
    document.write("<br>el mayor es: " + (num3));
} else {
    document.write("<br>el mayor es: " + (num4));
}

//ejercicio 7 Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
//Ejemplo:// 
//input: 15 , 3, 9//
//Output: El 15 es el número más grande//

/*document.write("<br><br>**ejercicio 7<br>");

let num5 = parseInt(prompt("ejercicio 7/ingrese numero"));
let num6 = parseInt(prompt("ejercicio 7/ingrese otro numero"));
let num7 = parseInt(prompt("ejercicio 7/ingrese otro numero"));

if (num5 >= num6 && num5 >= num7) {
    document.write("<br>el mayor es: " + (num5));
}

if (num6 >= num5 && num6 >= num7) {
    document.write("<br>el mayor es: " + (num6));
}

if (num7 >= num5 && num7 >= num6) {
    document.write("<br>el mayor es: " + (num7));
}

//*ejercicio 8 : 8.- Escribe un programa que pida un número y diga si es divisible por 2
//Ejemplo: 

//input: 10
//input: 15
//Output: El 10 es divisible por 2.
//Output: El 15 no es divisible por 2.//


/*document.write("<br><br>**ejercicio 8<br>");

let num8 = parseInt(prompt("ingresa un numero:"));

if (num8 % 2 === 0) {
    document.write("<br>" + num8 + " es divisible por 2");
} else {
    document.write("<br>" + num8 + " no es divisible por 2");
}

/*ejercicio 9 9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
//Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)
//Ejemplo://
//input: Hola mundo
//Output: oauo */

//Hola mundo,tengo que recorrer letra por letras la frase hasta encontrar una vocal// 
// palabra.length = cantidad de caracteres//
//palabra.charAt(0)

let frase = prompt("Ingrese una frase");
console.log(frase.charAt(0));

if (frase.charAt(0) === "a" || frase.charAt(0) === "e" || frase.charAt(0) === "i" || frase.charAt(0) === "o" || frase.charAt(0) === "u") {
    document.write(frase.charAt(0))
};

if (frase.charAt(1) === "a" || frase.charAt(1) === "e" || frase.charAt(1) === "i" || frase.charAt(1) === "o" || frase.charAt(1) === "u") {
    document.write(frase.charAt(1))
};

if (frase.charAt(2) === "a" || frase.charAt(2) === "e" || frase.charAt(2) === "i" || frase.charAt(2) === "o" || frase.charAt(2) === "u") {
    document.write(frase.charAt(2))
};

if (frase.charAt(3) === "a" || frase.charAt(3) === "e" || frase.charAt(3) === "i" || frase.charAt(3) === "o" || frase.charAt(3) === "u") {
    document.write(frase.charAt(3))
};
if (frase.charAt(4) === "a" || frase.charAt(4) === "e" || frase.charAt(4) === "i" || frase.charAt(4) === "o" || frase.charAt(4) === "u") {
    document.write(frase.charAt(4))
} else {
    alert("Ingrese una frase de hasta 5 caracteres")
};

/*document.write("<br><br>**ejercicio 9<br>");

let cadena = prompt("ejercicio 9/Escribir texto");

let cantCaracteres = parseInt(cadena.length);
let cont = 0;

document.write("<br>Vocales del texto ingresado: <br>");
while(cont<cantCaracteres){
    if(cadena.charAt(cont)=="a" ||
    cadena.charAt(cont)=="e" ||
    cadena.charAt(cont)=="i" || 
    cadena.charAt(cont)=="o" || 
    cadena.charAt(cont)=="u"){
        document.write(cadena.charAt(cont));
    }
    cont++
}
//otra forma de resolver el 9//



/*ejercicio 10 Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)
Ejemplo: 
input: 20
Output: El 20 es divisible por 2.*/
let numero = parseInt(prompt("Ingrese un numero"));
let respuesta = "El" + numero + "es divisible por ";

if (numero % 2 === 0){
    respuesta += "2";
}

if(numero % 3 === 0){
    if (respuesta !== "El" + numero + "es divisible por ") {respuesta += "y por 3"};
} else {respuesta += "3"}


if(numero % 5 === 0){
    if (respuesta !== "El" + numero + "es divisible por ") {respuesta += "y por 5"};
} else {respuesta += "5"}

if(numero % 7 === 0){
    if (respuesta !== "El" + numero + "es divisible por ") {respuesta += "y por 7"};
} else {respuesta += "7"}

document.write(respuesta + " ");
