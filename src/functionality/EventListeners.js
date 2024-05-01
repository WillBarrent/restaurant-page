import '../style.css';

function HomePageListener(content, page) {
    page.innerHTML = ``;
    page.insertAdjacentHTML('afterbegin', content);
}
function AboutPageListener(content, page) {
    page.innerHTML = ``;
    page.insertAdjacentHTML('afterbegin', content);
}
function MenuPageListener(content, page) {
    page.innerHTML = ``;
    page.insertAdjacentHTML('afterbegin', content);
}

export { HomePageListener, AboutPageListener, MenuPageListener };