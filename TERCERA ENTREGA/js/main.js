'use strict'
class producto {
    constructor(id, nombre, precio, img, marca, cantidad, categoria){
        this.id = id;
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.img =  img;
        this.marca = marca;
        this.cantidad = parseInt(cantidad);
        this.categoria = categoria;
    }


    sumarIva(){
        return this.precio * 1.21;
    }

}

let idP = 0;
let productos =[];
let carrito =[];

function autoID(){
    idP++;
}

function guardarLista(){

    //localStorage.clear();   
    //localStorage.setItem("listaProductos",JSON.stringify(productos));
    console.log("La lista se ha guardado con " + productos.length + " productos:");
    for(let i of productos){
        localStorage.setItem(i.id, JSON.stringify(i));
        console.log(i.toString());
        

    }
} 

guardarLista();

let bodyTable = document.getElementById("cuerpo");

function completarTabla() {

  productos.forEach((producto) => {
    let div = document.createElement("div");
    div.className="card";
    div.id="prod"
    div.innerHTML =`<img src=${producto.img} class='card-img-top'> 
    <div class='card-body'><h5 class='card-title'>${producto.nombre} 
    </h5> <p class='card-text'>$ ${producto.precio}</p>
    <p class='card-text'>Stock: ${producto.cantidad}</p></div>`
    bodyTable.appendChild(div);
  });
}   

completarTabla();


let formulario = document.getElementById("formProductos");

formulario.addEventListener("submit", (e) =>{
    e.preventDefault();


    let nombre = document.getElementById("nombre").value;
    let precio = document.getElementById("precio").value;
    let img = document.getElementById("img").value;
    let marca = document.getElementById("marca").value;
    let cantidad = document.getElementById("cantidad").value;
    let categoria = document.getElementById("categoria").value;
    autoID();
    
    let productop = new producto(idP, nombre, precio, img, marca, cantidad, categoria); 
    productos.push(productop);
    console.log(productos);

    formulario.reset();
    completarTabla();
    guardarLista();


});

let contenedor = document.getElementById("contenedor");

completarTabla();





