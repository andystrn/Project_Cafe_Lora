import './style.css';
import { Layer } from '../Layer';

export const Drink = ( {name, image, layers, ordered} ) => {
    const element = document.createElement('div');
    element.classList.add('drink');
    element.innerHTML = `
            <div class="drink__product">
                <div class="drink__cup">
                    <img src=${image}>
                </div>
                <div class="drink__info">
                    <h3>${name}</h3>
                    <div class="layers"><div/>
                </div>
            </div>
            <div class="drink__controls">
                    <button class="order-btn">
                    Objednat
                    </button>
            </div>
    `
    element.querySelector('.layers').append(...layers.map((item) => Layer(item)));

    return element;
}