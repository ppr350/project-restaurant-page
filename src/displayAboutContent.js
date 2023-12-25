import aboutImage from './about-image.jpg'

function displayAboutContent() {

    // Create and add about section container to the main container //
    const tabContent = document.querySelector('.tab-content');
    const aboutTab = document.createElement('div');
    aboutTab.setAttribute('id','about-tab');
    aboutTab.classList.add('inside-tab-content');
    aboutTab.style.display = 'none';

    tabContent.appendChild(aboutTab)

    // The rest of these codes inside this function are to create the content title, image and message //
    const aboutTitle = document.createElement('h1');
    aboutTitle.classList.add('about-title');
    aboutTitle.innerText = `ABOUT`;
    aboutTab.appendChild(aboutTitle);

    const aboutPic = new Image();
    aboutPic.src = aboutImage;
    aboutPic.classList.add('images');
    aboutTab.appendChild(aboutPic);

    const aboutMessage = document.createElement('h1');
    aboutMessage.classList.add('message');
    aboutMessage.innerText = 'kobe@kitch.ie';
    aboutTab.appendChild(aboutMessage);

    return aboutTab;
}

export { displayAboutContent };