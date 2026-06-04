const createHome = () => {
    const homeElem = document.createElement("div");
    homeElem.classList.add("section-home");
    homeElem.innerHTML = `
        <p>A cup of coffee, a great moment of peace</p>
        <h1>Coffee bar strack</h1>
        <p>Coffee bar, here and out</p>
        <p>We offer the best coffee you can get, a small cup, a great moment in your life. A brief moment in here became a lovely memory forever.</p>
    `;
    return homeElem;
}

export default createHome;