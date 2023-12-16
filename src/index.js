import _ from 'lodash';
import homeImage from './home-image.jpg'

function hello() {
    const element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'Restaurant Page'], ' ');

    // testing image display using webpack :
    // const myHomeImage = new Image();
    // myHomeImage.src = homeImage;
    // element.appendChild(myHomeImage);

    return element;
}

document.body.appendChild(hello());

