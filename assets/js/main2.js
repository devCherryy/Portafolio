import redirectOnToggle from "./helpers/spanish-english.js";
import parallax from "./components/parallax.js";
import activeMenu from "./components/selected_menu.js";
import resetToHome from "./helpers/reload_page.js";
redirectOnToggle();
parallax();
activeMenu();
resetToHome()