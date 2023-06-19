
//array para almacenar productos seleccionados
let carroDeCompras = [];

const productosElegidos = document.getElementById('miCarroCompras');

let bodyTable = document.getElementById("cuerpo");

let botonCarrito = document.getElementById('abrirCarrito');

const agregados = document.getElementById('itemAgregado')

const precioTotal = document.getElementById('precioTotal');

completarTabla(productos);

function completarTabla(prod){
  bodyTable.innerHTML='';

  for(const producto of prod){
    let div = document.createElement("div");
    div.className="card";
    div.innerHTML=`<img src=${producto.img} class='card-img-top'> <div class='card-body'>
    <h5 class='card-title'>${producto.nombre} </h5> <p class='card-text'>$ ${producto.precio}</p>
    <p class='card-text'>Stock: ${producto.stock}</p>
    <button type="button" class="btn btn-primary" class="producto" id="producto_${producto.id}">Agregar al Carrito
    </button></div>`
    bodyTable.appendChild(div);

    
    let botonAgregar = document.getElementById(`producto_${producto.id}`)
    botonAgregar.addEventListener('click', ()=> {
      console.log(producto.nombre);
      Toastify({
        text: `${producto.nombre} agregado a tu carrito con éxito`,
          duration: 1000,
          destination: "https://github.com/apvarun/toastify-js",
          newWindow: true,
          close: true,
          gravity: "bottom", 
          position: "right", 
          stopOnFocus: true, 
          style: {
            background: "linear-gradient(to left,#6dadfa  , #2ac070 )",
          },
          onClick: function(){}
      }).showToast();

      agregarProducto(producto.id)
    })
  }
}


function agregarProducto (id){

  let agregar = carroDeCompras.find(item => item.id == id)

  if (agregar){
    agregar.cantidad = agregar.cantidad+1
    agregar.stock = agregar.stock-1
    console.log(agregar.cantidad)
    console.log(agregar.stock)
    console.log(document.getElementById(`cantidad${agregar.id}`))
    document.getElementById(`cantidad${agregar.id}`).innerHTML = `<p id=cantidad${agregar.id}> Cantidad : ${agregar.cantidad}</p>`
  
  
    actualizarCarrito()

  }else{
    let agregarProducto = productos.find(elem => elem.id == id)

    carroDeCompras.push(agregarProducto)

    actualizarCarrito()
    console.log(carroDeCompras)

    let div = document.createElement('div')
    div.className = 'compra'

    div.innerHTML=`<div class="contenedorProductos card">
    <img src="${agregarProducto.img}" alt="" class="card-img-top">
    <div class="textoPaquete card-body">
    <h5 class="card-title">${agregarProducto.nombre}</h5>
        cantidad: <span class="card-text" id=cantidad${agregarProducto.id}>${agregarProducto.cantidad}</span>
    </div>
    <p class="precio card-text">precio: ${agregarProducto.precio}</p>
    <button id="eliminar${agregarProducto.id}" class="btn-eliminar btn btn-warning">eliminar</button>
    <br>
</div>`

productosElegidos.appendChild(div)

let borrar = document.getElementById(`eliminar${agregarProducto.id}`)

borrar.addEventListener('click', ()=> {
  console.log(agregarProducto.nombre + 'Producto eliminado');
  Toastify({
    text: ` ${agregarProducto.nombre} Eliminado de tu carrito`,
                        duration: 1200,
                        destination: "https://github.com/apvarun/toastify-js",
                        newWindow: true,
                        close: true,
                        gravity: "top", 
                        position: "right", 
                        stopOnFocus: true, 
                        style: {
                          background: "linear-gradient(to left,#6dadfa  , #2ac070)",
                          borderRadius:"20px",
                        },
                        onClick: function(){} 
  }).showToast();
  borrar.parentElement.remove()

  carroDeCompras=carroDeCompras.filter(elem=>elem.id != agregarProducto.id)

  actualizarCarrito()

  localStorage.setItem('carrito',JSON.stringify(carroDeCompras))
})

  }

  localStorage.setItem('compraProducto', JSON.stringify(carroDeCompras))
}

function actualizarCarrito(){
  // porfa reduce los agregados a un solo valor
  agregados.innerHTML = carroDeCompras.reduce((acc,el) => acc + el.cantidad, 0)
  precioTotal.innerText = carroDeCompras.reduce((acc,el)=> acc + (el.precio * el.cantidad), 0)
  }

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
    let botonAgregar = document.getElementById(`producto_${producto.id}`)
    botonAgregar.addEventListener('click', () => {
      console.log(producto.nombre);
      Toastify({
        text: `${producto.nombre} agregado a tu carrito con éxito`,
        duration: 1000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "bottom", 
        position: "right", 
        stopOnFocus: true, 
        style: {
          background: "linear-gradient(to left,#6dadfa  , #2ac070 )",
        },
        onClick: function(){}
      }).showToast();
    })
    agregarProducto(producto.id)
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

