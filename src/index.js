import './style.css';
import homeImage from './home-image.jpg'
import { displayMenuContent } from './displayMenuContent'

(function () {
    const body = document.getElementsByTagName('body')[0]
    const contentContainer = document.querySelector('#content');
    const topMenu = document.createElement('ul');
    topMenu.classList.add('top-menu');
    contentContainer.appendChild(topMenu);
    createHomeSections();
    setDisplayContainer();
    displayHomeContent();
    displayMenuContent();
})();

function setDisplayContainer() {
    const contentContainer = document.querySelector('#content');
    const tabContent = document.createElement('div');
    tabContent.classList.add('tab-content');
    contentContainer.appendChild(tabContent);
};

function displayHomeContent() {
    
    const tabContent = document.querySelector('.tab-content');
    const homeTab = document.createElement('div');
    homeTab.classList.add('home-tab');
    homeTab.classList.add('inside-tab-content');
    homeTab.style.display = 'none';

    tabContent.appendChild(homeTab)

    const homeTitle = document.createElement('h1');
    homeTitle.classList.add('home-title');
    homeTitle.innerText = `KOBE'S KITCH`;
    homeTab.appendChild(homeTitle);

    const homePic = new Image();
    homePic.src = homeImage;
    homePic.classList.add('images');
    homeTab.appendChild(homePic);

    const homeMessage = document.createElement('h1');
    homeMessage.classList.add('message');
    homeMessage.innerText = 'We love what we are doing';
    homeTab.appendChild(homeMessage);

    return homeTab;
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
    // const tabs = document.querySelector('.tabbed-options');
    const selectedOption = e.target;
    console.log(selectedOption.classList[0])
    const tabContents = document.querySelector('.inside-tab-content');
    // console.log(selectedOption[0])
    for (let i = 0; i < 3; i++) {
        selectedOption.classList.remove('active');
        tabContents.style.display = 'none';
    }
    selectedOption.classList.add('active');
    selectedOption + '-tab'.style.display = 'block';
}
