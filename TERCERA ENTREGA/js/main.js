'use strict'

class producto {
    constructor(id, nombre, precio, detalle, marca, cantidad, categoria){
        this.id = id;
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.detalle =  detalle;
        this.marca = marca;
        this.cantidad = parseInt(cantidad);
        this.categoria = categoria;
    }


    sumarIva(){
        return this.precio * 1.21;
    }

    visualizar() {
        return(this.nombre + " "+this.precio);
    }


}

class categoria{
    constructor (id, nombre, marca){
        this.id = id;
        this.nombre = nombre;
        this.marca = marca;
    }
}

let idP = 0;

function autoID(){
    idP++;
}


let productos =[];
let categorias =[];

let carrito =[];



let formulario = document.getElementById("formProductos");

formulario.addEventListener("submit", (e) =>{
    e.preventDefault();


    let nombre = document.getElementById("nombre").value;
    let precio = document.getElementById("precio").value;
    let detalle = document.getElementById("detalle").value;
    let marca = document.getElementById("marca").value;
    let cantidad = document.getElementById("cantidad").value;
    let categoria = document.getElementById("categoria").value;

    
    let productop = new producto(autoID(), nombre, precio, detalle, marca, cantidad, categoria); 
    productos.push(productop);
    console.log(productos);

    formulario.reset();


});

let contenedor = document.getElementById("contenedor");


function listarProductos(){

}
