export function loadMenuContent() {
    const menuMsg = document.createElement("p");
    menuMsg.textContent = "Take a look at our menu!";
    document.getElementById("content").appendChild(menuMsg);
}