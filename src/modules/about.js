const renderAbout = () => {
    const aboutElem = document.createElement("div");
    aboutElem.classList.add("section-about");
    aboutElem.innerHTML = `
        <p>about</p>
    `;
    document.querySelector("#content").replaceChildren(aboutElem);
}

export default renderAbout;