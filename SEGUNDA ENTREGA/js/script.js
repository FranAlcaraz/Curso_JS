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
        if (inicio === "productos" || inicio === "PRODUCTOS" || inicio === "producto" || inicio === "PRODUCTO"){
            var idP = prompt("ingrese el ID");
            var nombreP = prompt("ingrese el nombre");
            var precioP = prompt("ingrese el precio");
            var detalleP = prompt("ingrese detalle (opcional)");
            var marcaP = prompt("ingrese la marca");
            var cantidadP = prompt("ingrse una cantidad");
            var categoriaP = prompt("ingrese una categoria valida");
            productos.push(new producto(idP,nombreP, precioP, detalleP, marcaP,cantidadP, categoriaP));

        }else{
            if (inicio === "" || inicio === " "|| inicio ==="nada"){
                break;
            }
        }
    }
} while (inicio != "");