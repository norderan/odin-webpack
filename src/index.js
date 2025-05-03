import "./styles.css";
import loadHomeContent from './home';
import loadMenuContent from './menu';
import loadContactContent from './contact'; 


document.getElementById('home-button').addEventListener('click', () => {
    loadHomeContent();
});

document.getElementById('menu-button').addEventListener('click', () => {
    loadMenuContent();
});

document.getElementById('contact-button').addEventListener('click', () => {
    loadContactContent();
});