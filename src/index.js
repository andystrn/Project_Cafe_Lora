import './style.css'
import { HomePage } from './pages/HomePage';

console.log('funguju!');

const { pathname } = window.location;

if(pathname === '/') {
    document.querySelector('#app').append(HomePage());
}
