import "./css/style.css";

import header from './modules/header.js';
import contact from './modules/contact.js';
import home from './modules/home.js';
import menu from './modules/menu.js';

function loadPage(page){
    const contentElem = document.querySelector('#content');
    contentElem.innerHTML = '';
    contentElem.appendChild(page);
}

// render header and home page

document.querySelector("#menu-nav")
.appendChild(header());

loadPage(home());

// set event listeners

const pages = { contact, home, menu, };

document.querySelector('.menu').addEventListener("click", e => {
    const btn = e.target.closest('button');
    if (!btn) return;

    const section = btn.dataset.section;
    if (!Object.keys(pages).includes(section)) return;

    loadPage(pages[section]());
});