function getClicks() {
    const topMenuOptions = document.querySelectorAll('.tabbed-options');
    topMenuOptions.forEach(option => option.addEventListener('click', (e) =>
    console.log(option.innerText)));
}

export default getClicks;