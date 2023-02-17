import './style.css';
import { Drink } from './components/Drink';

export const Menu = () => {
    const element = document.createElement('section');
    element.classList.add('menu');
    element.setAttribute('id', 'menu');

    element.innerHTML = `
        <section class="menu">
            <div class="container">
                <h2>Naše nabídka</h2>
                <p class="menu-intro">
                    Vyberte si z našeho interaktivního menu a nemusíte čekat na obsluhu
                </p>
                <div class="drinks-list">
                    <div class="order-detail">
                        <a href="/objednavka">Detail objednávky</a>
                    </div>
                </div>
            </div>
        </section>
    `
    element.querySelector('.drinks-list').prepend(Drink({name: 'espresso', image: 'https://apps.kodim.cz/daweb/cafelora/assets/cups/romano.png', order: 'false'}));
    
    return element;
}