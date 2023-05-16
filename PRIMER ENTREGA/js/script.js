'use strict'

function calcularPromedio (primerNota, segundaNota, terceraNota){

    let promedio = (primerNota + segundaNota + terceraNota)/3;
    alert("su promedio es de "+promedio);  
    console.log("su promedio es de "+promedio);    

}

function solicitarNombre(nombre){
    let nom = nombre;
    console.log("hola "+ nom);
}

let nombre;

do{

nombre = prompt("ingrese nombre");
if (nombre != 0){

    let primerNota = parseInt(prompt("Ingrese la primer nota"));

    let segundaNota = parseInt(prompt("Ingrese la segunda nota"));

    let terceraNota = parseInt(prompt("Ingrese la tercera nota"));
    solicitarNombre(nombre);
    calcularPromedio(primerNota,segundaNota,terceraNota);
    

    
}else{
    console.log("no hay mas alumnos");
    break;
}

} while (nombre != 0);