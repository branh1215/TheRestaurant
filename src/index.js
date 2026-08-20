import {loadHomeContent} from './modules/home.js';
import {loadMenuContent} from './modules/menu.js';
import {loadContactContent} from './modules/contact.js';

document.addEventListener('DOMContentLoaded', () => {
    loadHomeContent();

    document.getElementById('homeBtn').addEventListener('click', () => {
        loadView('home');
    });

    document.getElementById('menuBtn').addEventListener('click', () => {
        loadView('menu');
    });

    document.getElementById('contactBtn').addEventListener('click', () => {
        loadView('contact');
    });
});

function loadView(view) {
    const content = document.getElementById("content");
    content.innerHTML = "";

    if (view === "home") {
        loadHomeContent();
    } else if (view === "menu") {
        loadMenuContent();
    } else if (view === "contact") {
        loadContactContent();
    }
}