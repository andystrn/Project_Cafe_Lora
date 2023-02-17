import './style.css'

export const Header = () => {
    const element = document.createElement('header');
    element. innerHTML = `
            <div class="header__content container">
            <div class="site-logo"></div>

            <div class="navigation">
                <button class="nav-btn"></button>
                <nav class="rollout-nav nav-closed">
                <a href="#home">domů</a>
                <a href="#menu">menu</a>
                <a href="#gallery">galerie</a>
                <a href="#contact">kontakt</a>
                </nav>
            </div>

            </div>
    `
    const showHideNav = () => {
        element.querySelector('.rollout-nav').classList.toggle("nav-closed");
    };

    element.querySelector('.nav-btn').addEventListener('click', showHideNav);
    element.querySelector('.rollout-nav').addEventListener('click', showHideNav);

    return element;
}