import './style.css'
import { Banner } from './components/Banner';
import { Contact } from './components/Contact';
import { Gallery } from './components/Gallery';
import { Menu } from './components/Menu';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

export const HomePage = () => {
    const main = document.createElement('main');
    main.append(Banner(), Menu(), Gallery(), Contact());

    const pageElement = document.createElement('div');
    pageElement.classList.add('page');

    pageElement.append(Header(), main,Footer());
    
    return pageElement;
}
