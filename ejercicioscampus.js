// Practicas con Variables //
/* Ejercicio 1 :
document.write("**ejercicio 1");alert("un mensaje"); */

alert ("Hello world");

//ejercicio 2

document.write("Hello world");

//ejercicio 3

document.write("<br>3+5="+(3+5));

//ejercicio 4


let nombre = prompt("ingrese su nombre");
document.write("<br>hola "+ nombre);

//ejercicio 5

let num1 =  parseInt(prompt("ejercicio 5/ingrese numero"));
let num2 =  parseInt(prompt("ejercicio 5/ingrese otro numero"));
document.write("<br>resultado: "+(num1+num2));

//ejercicio 6

let num3 =  parseInt(prompt("ejercicio 6/ingrese numero"));
let num4 =  parseInt(prompt("ejercicio 6/ingrese otro numero"));

if(num3>num4){
    document.write("<br>el mayor es: "+(num3));
}else{
    document.write("<br>el mayor es: "+(num4));
}

//ejercicio 7

document.write("<br><br>**ejercicio 7<br>");

let num5 =  parseInt(prompt("ejercicio 7/ingrese numero"));
let num6 =  parseInt(prompt("ejercicio 7/ingrese otro numero"));
let num7 =  parseInt(prompt("ejercicio 7/ingrese otro numero"));

if(num5>=num6 && num5>=num7){
    document.write("<br>el mayor es: "+(num5));
}

if(num6>=num5 && num6>=num7){
    document.write("<br>el mayor es: "+(num6));
}

if(num7>=num5 && num7>=num6){
    document.write("<br>el mayor es: "+(num7));
}

//ejercicio 8

document.write("<br><br>**ejercicio 8<br>");

let num8 = parseInt(prompt("ingresa un numero:"));

if(num8%2===0){
    document.write("<br>"+num8+" es divisible por 2");
}else{
    document.write("<br>"+num8+" no es divisible por 2");
}

