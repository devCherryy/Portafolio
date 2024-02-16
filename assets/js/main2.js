import redirectOnToggle from "./helpers/spanish-english.js";
import parallax from "./components/parallax.js";
import activeMenu from "./components/selected_menu.js";
import resetToHome from "./helpers/reload_page.js";
import updateCopyrightYear from "./helpers/date_updater.js"
import sendEmail from "./helpers/send_form.js";
redirectOnToggle();
parallax();
activeMenu();
resetToHome()
updateCopyrightYear()
sendEmail()