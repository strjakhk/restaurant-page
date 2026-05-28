const renderMenu = () => {
    const menuElem = document.createElement("div");
    menuElem.classList.add("section-menu");
    menuElem.innerHTML = `
        <p>menu</p>
    `;
    document.querySelector("#content").replaceChildren(menuElem);
}

export default renderMenu;