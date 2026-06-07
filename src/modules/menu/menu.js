const createMenu = () => {
    const menuElem = document.createElement("div");
    menuElem.classList.add("section-menu");
    menuElem.innerHTML = `
        <p>menu</p>
    `;
    return menuElem;
}

export default createMenu;