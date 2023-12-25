import './style.css';
import homeImage from './home-image.jpg'
import { displayMenuContent } from './displayMenuContent';
import { displayAboutContent } from './displayAboutContent';

// IIFE to load the page with content //
(function () {

    const contentContainer = document.querySelector('#content');
    const topMenu = document.createElement('ul');
    topMenu.classList.add('top-menu');
    contentContainer.appendChild(topMenu);

    createTopMenu();
    setContentContainer();
    displayHomeContent();
    displayMenuContent();
    displayAboutContent();

    startUp();

})();

// function to set up the main div that all elements live in //
function setContentContainer() {

    const contentContainer = document.querySelector('#content');
    const tabContent = document.createElement('div');
    tabContent.classList.add('tab-content');
    contentContainer.appendChild(tabContent);
};

function displayHomeContent() {
    
    // Create and home section container to the main container //
    const tabContent = document.querySelector('.tab-content');
    const homeTab = document.createElement('div');
    homeTab.setAttribute('id','home-tab');
    homeTab.classList.add('inside-tab-content');
    homeTab.style.display = 'none';

    tabContent.appendChild(homeTab)

    // The rest of these codes inside this function are to create the content title, image and message //
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
};

function createTopMenu() {

    // A for loop runs through the following array and add the values inside into the unordered list as their class names //
    const menuArray = ['home', 'menu', 'about'];
    const topMenu = document.querySelector('.top-menu');

    for (let i = 0; i < menuArray.length; i++) {
        const topMenuOptions = document.createElement('li');
        topMenuOptions.classList.add(menuArray[i]);
        topMenuOptions.classList.add('top-menu-options');       
        topMenuOptions.innerText = menuArray[i].toUpperCase();
        topMenu.appendChild(topMenuOptions);

        getClicks();
    };
};

function getClicks() {

    // listen to user's click on the top menu //
    const topMenuOptions = document.querySelectorAll('.top-menu-options');
    topMenuOptions.forEach(option => {
        option.addEventListener('click', displayContent);
    })
};

// This function takes over and handles the user's click saves by getClick function //
function displayContent(e) {

    const selectedOption = e.target;
    const topMenuOptions = document.querySelectorAll('.top-menu-options');
    const getUserClick = e.target.classList[0] + '-tab'; // e.target.classList[0] is either 'home', 'menu' or 'about' //
    const getSelectedOption = document.getElementById(getUserClick);

    let insideTabContent = document.querySelectorAll('.inside-tab-content');
    for (let i = 0; i < insideTabContent.length; i++) {
        topMenuOptions[i].classList.remove('active');
        insideTabContent[i].style.display = 'none';
    }

    selectedOption.classList.add('active');
    getSelectedOption.style.display = 'block';
};

// Automated a click on 'home' when page loads //
function startUp() {
    document.querySelector('.home').click();
};
