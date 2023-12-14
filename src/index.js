import _ from 'lodash';

function hello() {
    const element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'Restaurant Page'], ' ');

    return element;
}

document.body.appendChild(hello());