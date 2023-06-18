'use strict'

let categoriaSeleccionada = "";

const TraerProductos = async() => {
    try {
        const response = await fetch("./product.json");
        array = await response.json();
        //sucess
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Data properly fetched!',
            showConfirmButton: false,
            timer: 1500
          })


          eventos();
    }catch (error){
    //alerta de error
    Swal.fire({
      icon: 'error',
      title: 'Error...',
      text: 'No se encuentra la informacion solicitada',
      footer: '<a href="mailto: contacto@franciscoalcaraz.com">contacto</a>'
    })
  }
}