import "./css/style.css";

import renderHeader from "./modules/header.js";


import home from "./modules/home.js";
import menu from "./modules/menu.js";
import about from "./modules/about.js";

const loadPage = { home, menu, about };

// render header & home
renderHeader();
loadPage.home();

// set event listeners for menu items

document.querySelector(".menu").addEventListener("click", e => {
    if (!e.target.closest("button")) return;

    loadPage[e.target.dataset.section]();
});