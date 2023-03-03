import './style.css';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';


export const OrderPage = () => {
    const element = document.createElement('div');
    element.append(Header({showMenu: false}), Footer());

    return element;
}