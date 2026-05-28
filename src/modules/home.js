import { HomeContent as home } from "./content.js";

const renderHome = () => {
    const homeElem = document.createElement("div");
    homeElem.classList.add("section-home");
    homeElem.innerHTML = `
        <p>${home.firstPTexte}</p>
        <h1>${home.mainH1Text}</h1>
        <p>${home.secondPText}</p>
        <p>${home.mainPhrase}</p>
    `;
    document.querySelector("#content").replaceChildren(homeElem);
}

export default renderHome;