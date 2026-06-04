const createContact = () => {
    const contactElem = document.createElement("div");
    contactElem.classList.add("section-contact");
    contactElem.innerHTML = `
        <p>Contact</p>
    `;
    return contactElem;
}

export default createContact;