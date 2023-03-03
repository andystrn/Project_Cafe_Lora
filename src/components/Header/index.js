import './style.css'

export const Header = ( {showMenu = true} ) => {
    const element = document.createElement('header');
    if (showMenu) {
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
    } else {
        element.innerHTML = `
        <div class="header__content container">
          <div class="site-logo"></div>

          <nav class="inline-nav">
            <a href="/">Hlavní stránka</a>
          </nav>

        </div>
        `
    }
    

    return element;
}