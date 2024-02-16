import parallax from "./components/parallax.js";
import activeMenu from "./components/selected_menu.js";
import resetToHome from "./helpers/reload_page.js";
import updateCopyrightYear from "./helpers/date_updater.js"
import sendEmail from "./helpers/send_form.js";
import dark_mode from "./helpers/dark-mode.js";
import redirectOnToggle from "./helpers/spanish-english.js";
parallax()

activeMenu()



// Lógica para llamar a la función resetToHome cuando sea necesario
// Por ejemplo, si deseas redirigir al cargar la página:
window.addEventListener('DOMContentLoaded', () => {
    resetToHome();
});


updateCopyrightYear()

sendEmail()

dark_mode()

redirectOnToggle()