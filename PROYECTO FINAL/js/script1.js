//constructor de clase Producto 
class producto {
    constructor(id, nombre, categoria, precio, stock, img) {
      this.id = id;
      this.nombre = nombre;
      this.precio = parseFloat(precio);
      this.disponible = true;
      this.stock = stock;
      this.categoria = categoria;
      this.img = img;
    }
  
    visualizar() {
      return this.nombre + " " + this.precio;
    }
  
    sumarIva() {
      this.precio = this.precio * 1.21;
    }
  
    vender() {
      this.disponible = false;
    }
  }
//array para almacenar productos seleccionados
let carroDeCompras = [];
    
const productosElegidos = document.getElementById('mi-carrito');

let botonCarrito = document.getElementById('openCarro');

const agregados = document.getElementById('agregados')

const precioTotal = document.getElementById('precioTotal');



  //obtengo el cuerpo donde se muestran los productos del JS productos
  let bodyTable = document.getElementById("cuerpo");
  //muestro todos los productos
  function completarTabla() {
    productos.forEach((producto) => {
      let div = document.createElement("div");
      div.className="card";
      div.innerHTML =`<img src=${producto.img} class='card-img-top'> <div class='card-body'>
      <h5 class='card-title'>${producto.nombre} </h5> <p class='card-text'>$ ${producto.precio}</p>
      <p class='card-text'>Stock: ${producto.stock}</p>
      <button type="button" class="btn btn-primary" class="producto" id="producto_${producto.id}">Agregar al Carrito
      </button></div>`
      bodyTable.appendChild(div);

    });
  }
  
  completarTabla();

  //funcion para filtrar los prodcutos por categoria
  function filtrarTabla(array) {
    array.forEach((producto) => {
        let div = document.createElement("div");
        div.className="card card-personalizada";
      div.innerHTML =`<img src=${producto.img} class='card-img-top'> <div class='card-body'>
      <h5 class='card-title'>${producto.nombre}</h5> <p class='card-text'>$ ${producto.precio}</p>
      <p class='card-text'>Stock: ${producto.stock}</p>
      <button type="button" class="btn btn-primary" class="producto" id="producto_${producto.id}">Agregar al Carrito
      </button></div>`
    bodyTable.appendChild(div);
    });
  }
  
  
  let elegirPorqueFiltrar = document.querySelectorAll('input[type="radio"]');
  
  console.log(elegirPorqueFiltrar);
  
  elegirPorqueFiltrar.forEach((check) => console.log(check));
  
  
  elegirPorqueFiltrar.forEach((check) =>
    check.addEventListener("change", handleChange),
  );
  
  
  
  function handleChange() {
    
    bodyTable.innerHTML = "";
  
    
    const checkeds = Array.from(elegirPorqueFiltrar).filter(
      (checkbox) => checkbox.checked,
    );
  
    
    const checkedValue = checkeds.map((checkbox) => checkbox.value);
  
    
    let ArrayFilter = [];
  
  
    if (checkedValue == "all") {
      
      ArrayFilter = productos;
    } else if (checkedValue == "pantalon") {
      
      ArrayFilter = productos.filter(
        (producto) => producto.categoria == "pantalon",
      );
    } else if (checkedValue == "blusa") {
      
      ArrayFilter = productos.filter(
        (producto) => producto.categoria == "blusa",
      );
    } else if (checkedValue == "entero") {
      
      ArrayFilter = productos.filter(
        (producto) => producto.categoria == "entero",
      );
    } else if (checkedValue == "top") {
      
      ArrayFilter = productos.filter((producto) => producto.categoria == "top");
    } else if (checkedValue == "vestido") {
      
      ArrayFilter = productos.filter(
        (producto) => producto.categoria == "vestido",
      );
    }
  
  
  
    filtrarTabla(ArrayFilter);
  }

