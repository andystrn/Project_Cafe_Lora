import './style.css'
import { OrderItem } from '../OrderItem';

export const Order = ( {items} ) => {
    const element = document.createElement('div');
    element.classList.add('order');
    element.innerHTML = `
    <div class="order__content container">
      <h1>Vaše objedávnka</h1>
      <p class="empty-order empty-order--hide">Zatím nemáte nic objednáno</p>
      <div class="order__items"></div>
    </div>
  `;

    if (items === undefined) {
        fetch('https://cafelora.kodim.app/api/me/drinks', {
            method: 'GET',
            headers: {
                'Authorization': 'Email andrea.strnadlova@gnj.cz',
            },
            })
            .then((response) => response.json())
            .then((data) => {
                const filterData = data.results.filter((dat) => dat.ordered);
                element.replaceWith(Order({ items: filterData }));
            });
    } else if (items.length === 0) {
        element.querySelector('.empty-order').classList.remove('empty-order--hide');
    } else {
        element.querySelector('.order-items').prepend(
            ...items.map((item) => OrderItem(item))
        );
    }
    
    return element;
}