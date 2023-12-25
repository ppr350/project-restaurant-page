import menuImage from './menu-image.jpg'

function displayMenuContent() {
    
    // Create and add menu section container to the main container //
    const tabContent = document.querySelector('.tab-content');
    const menuTab = document.createElement('div');
    menuTab.setAttribute('id','menu-tab');
    menuTab.classList.add('inside-tab-content');
    menuTab.style.display = 'none';

    tabContent.appendChild(menuTab)

    // The rest of these codes inside this function are to create the content title, image and message //
    const menuTitle = document.createElement('h1');
    menuTitle.classList.add('menu-title');
    menuTitle.innerText = `MENU`;
    menuTab.appendChild(menuTitle);

    const menuPic = new Image();
    menuPic.src = menuImage;
    menuPic.classList.add('images');
    menuTab.appendChild(menuPic);

    const menuMessage = document.createElement('h1');
    menuMessage.classList.add('message');
    menuMessage.innerText = 'Contact us for our menu!';
    menuTab.appendChild(menuMessage);

    return menuTab;
}

export { displayMenuContent };