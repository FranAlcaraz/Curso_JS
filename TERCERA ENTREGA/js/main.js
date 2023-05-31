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



let productos =[];
let categorias =[];

let carrito =[];

