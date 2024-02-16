function dark_mode(){
    const toggle = document.getElementById("darkmode-toggle")
    const skills = document.getElementById("skills")
    toggle.addEventListener("change", (event)=>{
    
        toggle.addEventListener("change", (event) => {
            // Accede al cuerpo del documento
            let body = document.body;
        
            // Verifica si el interruptor está marcado (checked)
            if (event.target.checked == true) {
                // Agrega la clase 'dark' al cuerpo del documento
                body.classList.add("dark");
            } else {
                // Remueve la clase 'dark' del cuerpo del documento si el interruptor no está marcado
                body.classList.remove("dark");
            }
            });
            // event es el objeto del evento(que contiene toda la informacion del evento), y target hace referencia al elemento que ha provocado el evento
            // Estás accediendo a la propiedad checked del elemento que desencadenó el evento. En el dom los elementos html son objetos
    })


}

export default dark_mode