import { HeaderContent as header } from "./content.js";

const renderHeader = () =>{
    const menuElem = document.createElement("div");
    menuElem.classList.add("header");
    menuElem.innerHTML = `
        <div class="logo-text">
            <h1>${header.logoText}</h1>
        </div>
        <div class="menu">
            <nav>
                <ul>
                    <li><button data-section="home">${header.menuItem1}</button></li>
                    <li><button data-section="menu">${header.menuItem2}</button></li>
                    <li><button data-section="about">${header.menuItem3}</button></li>
                </ul>
            </nav>
        </div>
        <div class="contact">
            <p>${header.contact}</p>
        </div>
    `;
    document.querySelector("#menu-nav").replaceChildren(menuElem);
}

export default renderHeader;