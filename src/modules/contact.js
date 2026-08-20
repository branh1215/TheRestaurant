export function loadContactContent() {
    const contactMsg = document.createElement("p");
    contactMsg.textContent = "Get in touch with us!";
    document.getElementById("content").appendChild(contactMsg);
}