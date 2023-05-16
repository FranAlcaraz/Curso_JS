'use strict'

class producto {
    constructor(id, nombre, precio, detalle, marca, cantidad){
        this.id = id;
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.detalle =  detalle;
        this.marca = marca;
        this.cantidad = cantidad;
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

class marcas{
    constructor (id, nombre){
        this.id = id;
        this.nombre =nombre;
    }
}

var productos =[];
var categorias =[];

do {

    var inicio = prompt("Hola! que desea cargar?").toUpperCase();
    console.log(inicio);
    if (inicio === "categoria" || inicio === "CATEGORIA") {
        var idC = prompt("ingrese el ID");
        var nombreC = prompt("ingrese el Nombre");
        var marcaC = prompt ("ingrese la marca");
        categorias.push(new categoria(idC, nombreC, marcaC));
    }else{
        if (inicio === "productos" || inicio === "PRODUCTOS"){
            var idP

        }else{
            if (inicio === "" || inicio === " "|| inicio ==="nada"){
                break;
            }
        }
    }
} while (inicio != "");