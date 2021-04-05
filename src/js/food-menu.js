import foodMenu from '../templates/menu.hbs';
import menuData from '../menu.json';

const streetFoodMenu = foodMenu(menuData);
const menuREf = document.querySelector('.js-menu');

menuREf.insertAdjacentHTML('beforeend',streetFoodMenu)