'use strict'
function eventos(){
    //escucha el evento del select
        let selector = document.querySelectorAll('input[type="radio"]');

        console.log(selector);
  
        selector.forEach((check) => console.log(check));
        
         
        selector.forEach((check) =>
          check.addEventListener("change", handleChange),
        );


        function handleChange() {
    
            bodyTable.innerHTML = "";
          
            
            const checkeds = Array.from(selector).filter(
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
            } else if (checkedValue == "remera") {
              
              ArrayFilter = productos.filter(
                (producto) => producto.categoria == "remera",
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
          

    
      }