export function loadHomeContent() {
    const welcomeMsg = document.createElement("p");
    welcomeMsg.textContent = "Welcome to The Restaurant!";
    document.getElementById("content").appendChild(welcomeMsg);
}