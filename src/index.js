import './style.css'
import { HomePage } from './pages/HomePage';
import { OrderPage } from './pages/OrderPage';

console.log('funguju!');

const { pathname } = window.location;

if(pathname === '/') {
    document.querySelector('#app').append(HomePage());
} else if (pathname === '/objednavka') {
    document.querySelector('#app').append(OrderPage())
}
