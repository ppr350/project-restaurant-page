// import _ from 'lodash';
import './style.css';
import getClicks from './click-event';

(function () {
    const body = document.getElementsByTagName('body')[0]
    const contentContainer = document.querySelector('#content');
    const topMenu = document.createElement('ul');
    topMenu.classList.add('top-menu');
    contentContainer.appendChild(topMenu);

    createHomeSections();
    setDisplayContainer();
})()

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

function setDisplayContainer() {
    const contentContainer = document.querySelector('#content');
    const contentBox = document.createElement('div');
    contentBox.classList.add('content-box');
    contentContainer.appendChild(contentBox);
}

function displayHome() {
    console.log('display home')
}
