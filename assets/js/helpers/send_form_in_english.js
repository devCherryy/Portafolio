const sendEmail = () => {
    const btn = document.getElementById('btn_open_modal');

    document.getElementById('form').addEventListener('submit', function(event) {
        event.preventDefault();

        btn.textContent = 'Send...';

        const serviceID = 'default_service';
        const templateID = 'template_jp0v9hq';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.textContent = 'Send';
                document.getElementById('modal').open = true; // Abre el modal cuando se envía con éxito
            })
            .catch((err) => {
                btn.textContent = 'Send';
                alert(JSON.stringify(err));
            });
    });

    document.getElementById('btn_close_modal').addEventListener('click', function() {
        document.getElementById('modal').open = false; // Cierra el modal cuando se hace clic en el botón de cerrar
    });
};

export default sendEmail;
