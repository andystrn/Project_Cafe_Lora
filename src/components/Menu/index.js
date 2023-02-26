import './style.css';
import { Drink } from './components/Drink';

export const Menu = (props = {}) => {
    const {drinks} = props;
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

    if (drinks === undefined) {
        fetch('https://cafelora.kodim.app/api/me/drinks', {
            method: 'GET',
            headers: {
                'Authorization': 'Email andrea.strnadlova@gnj.cz',
            },
            })
            .then((response) => response.json())
            .then((data) => {
                element.replaceWith(Menu({ drinks: data.results }));
            });
    } else {
        element.querySelector('.drinks-list').prepend(
            ...drinks.map((drink) => Drink(drink))
        );
    }
    
    return element;
}