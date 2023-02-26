import './style.css';
import { Layer } from '../Layer';

export const Drink = ( {id, name, image, layers, ordered} ) => {
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
            <div class= "drink__controls">
                    <button class= "order-btn ${ordered ? 'order-btn--ordered' : null}">
                    ${ordered ? 'Zrušit' : 'Objednat'}
                    </button>
            </div>
    `
    element.querySelector('.layers').append(...layers.map((item) => Layer(item)));

    element.querySelector('.order-btn').addEventListener('click', () => {
        fetch(`https://cafelora.kodim.app/api/me/drinks/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Email andrea.strnadlova@gnj.cz',
            },
            body: JSON.stringify({ordered: !ordered})
        })
        .then((response) => response.json())
        .then((data) => element.replaceWith(Drink(data.results)))
    }  
    );

    return element;
}