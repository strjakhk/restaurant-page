const createHeader = () =>{
    const menuElem = document.createElement("div");
    menuElem.classList.add("header");
    menuElem.innerHTML = `
        <div class="logo-text">
            <h1>Coffee bar strack</h1>
        </div>
        <div class="menu">
            <nav>
                <ul>
                    <li><button data-section="home">Home</button></li>
                    <li><button data-section="menu">Menu</button></li>
                    <li><button data-section="contact">Contact</button></li>
                </ul>
            </nav>
        </div>
        <div class="contact">
            <p>+54 11 91223344</p>
        </div>
    `;
    return menuElem;
}

export default createHeader;