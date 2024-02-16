function redirectOnToggle() {
    // Obtener el elemento que desencadena el evento de cambio
    let toggle = document.getElementById("language-toggle");
  
    // Verificar si se pudo encontrar el elemento toggle
    if (toggle) {
      // Agregar un event listener para detectar cambios en el elemento
      toggle.addEventListener("change", (event) => {
        // Verificar el estado del elemento (por ejemplo, si es un interruptor)
        if (!event.target.checked) {
          // Redireccionar a la primera pagina en español
          window.location.href = "/index.html";
        } else {
          // Otra acción o manejo si el estado del elemento es activado (checked)
        }
      });
    }
  }
  
  export default redirectOnToggle;
  
