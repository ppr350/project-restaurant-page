import './style.css';
import homeImage from './home-image.jpg'

(function () {
    const body = document.getElementsByTagName('body')[0]
    const contentContainer = document.querySelector('#content');
    const topMenu = document.createElement('ul');
    topMenu.classList.add('top-menu');
    contentContainer.appendChild(topMenu);
    createHomeSections();
    setDisplayContainer();
    displayHomeContent();
})();

function setDisplayContainer() {
    const contentContainer = document.querySelector('#content');
    const contentBox = document.createElement('div');
    contentBox.classList.add('content-box');
    contentContainer.appendChild(contentBox);
};

function displayHomeContent() {

    
    const contentBox = document.querySelector('.content-box');
    const homeBox = document.createElement('div');
    homeBox.classList.add('home-box');
    homeBox.classList.remove('active');
    homeBox.style.display = 'none';

    contentBox.appendChild(homeBox)

    const homeTitle = document.createElement('h1');
    homeTitle.classList.add('selected-content');
    homeTitle.innerText = `KOBE'S KITCH`;
    homeBox.appendChild(homeTitle);

    const homePic = new Image();
    homePic.src = homeImage;
    homePic.classList.add('images');
    homeBox.appendChild(homePic);

    const homeMessage = document.createElement('h1');
    homeMessage.classList.add('catch-phrase');
    homeMessage.innerText = 'We love what we are doing';
    homeBox.appendChild(homeMessage);

    return homeBox;
}

function createHomeSections() {
    const menuArray = ['home', 'menu', 'about'];
    const topMenu = document.querySelector('.top-menu');
    for (let i = 0; i < 3; i++) {
        const topMenuOptions = document.createElement('li');
        topMenuOptions.classList.add(menuArray[i]);
        topMenuOptions.classList.add('tabbed-options');
        topMenuOptions.innerText = menuArray[i].toUpperCase();
        topMenu.appendChild(topMenuOptions);
        getClicks();
    }
};

function getClicks() {
    const topMenuOptions = document.querySelectorAll('.tabbed-options');
    topMenuOptions.forEach(option => {
        option.addEventListener('click', displayContent)
    })
};

function displayContent(e) {
    console.log(e.target.innerText);
    const selectedOption = e.target.innerText;
    console.log(selectedOption)
}
