function redirectOnToggle() {
    // Obtener el elemento que desencadena el evento de cambio
    let toggle = document.getElementById("language-toggle");

    // Verificar si se pudo encontrar el elemento toggle
    if (toggle) {
        // Agregar un event listener para detectar cambios en el elemento
        toggle.addEventListener("change", (event) => {
            // Verificar el estado del elemento (por ejemplo, si es un interruptor)
            if (event.target.checked) {
                // Redireccionar la página a otra URL cuando el estado del elemento es activado (checked)
                window.location.href = "index_copy_ingles.html";
                
            } else {
                window.location.href = "/index.html"
                // Otra acción o manejo si el estado del elemento es desactivado (unchecked)
            }
        });


    }
}

export default redirectOnToggle;