// Import's JS

// Menu
import ScrollSuave from "./modules/scroll-suave.js";
const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

// Animais
import TabNav from "./modules/tabnav.js";
const tabNav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section');
tabNav.init();

// FAQ
import Accordion from "./modules/accordion.js";
const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

// Scroll Geral
import ScrollAnima from "./modules/scroll-anima.js";
const scrollAnima = new ScrollAnima('[data-anime="scroll"]');
scrollAnima.init();

// Modal
import Modal from "./modules/modal.js";
const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]');
modal.init();

// Tooltip
import Tooltip from "./modules/tooltip.js";
const tooltip = new Tooltip('[data-tooltip]');
tooltip.init();

// Dropdown Menu
import DropdownMenu from "./modules/dropdown-menu.js";
const dropdownMenu = new DropdownMenu('[data-dropdown]');
dropdownMenu.init();

// Menu Mobile
import MenuMobile from "./modules/menu-mobile.js";
const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menuMobile.init();

// Funcionamento (Horas)
import Funcionamento from "./modules/funcionamento.js";
const funcionamento = new Funcionamento('[data-semana', 'aberto');
funcionamento.init();

// Fecth Animais
import fetchAnimais from "./modules/fetch-animais.js";
fetchAnimais('../../animaisapi.json', '.numeros-grid');

// Fecth Bitcoin
import fetchBitcoin from "./modules/fetch-bitcoin.js";
fetchBitcoin('https://blockchain.info/ticker', '.btc-preco');

// Slide
import SlideNav from "./modules/slide.js";
const slide = new SlideNav('.slide', '.slide-wrapper');
slide.init();
slide.addControl('.custom-constrols');
