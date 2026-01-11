import { Gallery } from './modules/Gallery.js';
import { Modal } from './modules/Modal.js';
import { Tabs } from './modules/Tabs.js';
import { Filters } from './modules/Filters.js';

// Данные
const galleryData = [
  {
    src: 'images/sakura.jpg',
    title: 'Сакура в Киото',
    caption: 'Цветение сакуры в Киото — символ мимолётной красоты',
    season: 'spring',
    type: 'sakura',
    location: 'Киото'
  },
  {
    src: 'images/fuji.jpg',
    title: 'Гора Фудзи',
    caption: 'Гора Фудзи в утреннем тумане — священный символ Японии',
    season: 'all',
    type: 'mountain',
    location: 'Префектура Яманаси'
  },
  {
    src: 'images/bamboo.jpg',
    title: 'Бамбук в Арасияма',
    caption: 'Бамбуковая роща в Арасияма — шёпот природы',
    season: 'summer',
    type: 'forest',
    location: 'Киото'
  },
  {
    src: 'images/zen-garden.jpg',
    title: 'Дзен-сад Рёандзи',
    caption: 'Дзен-сад в храме Рёандзи — медитация в камне и песке',
    season: 'all',
    type: 'garden',
    location: 'Киото'
  },
  {
    src: 'images/lake.jpg',
    title: 'Озеро Кавагути',
    caption: 'Озеро Кавагути — отражение Фудзи в зеркале воды',
    season: 'autumn',
    type: 'water',
    location: 'Префектура Яманаси'
  },
  {
    src: 'images/autumn-forest.jpg',
    title: 'Осенний лес в Никко',
    caption: 'Осенний лес в Никко — пламя красок среди тишины',
    season: 'autumn',
    type: 'forest',
    location: 'Тотиги'
  },
  {
    src: 'images/winter-fuji.jpg',
    title: 'Зимняя Фудзи',
    caption: 'Заснеженная гора Фудзи — величие зимней Японии',
    season: 'winter',
    type: 'mountain',
    location: 'Хаконэ'
  }
];

// Инициализация после загрузки DOM
document.addEventListener('DOMContentLoaded', () => {
  const galleryEl = document.getElementById('gallery');
  const modalRoot = document.getElementById('modal-root');

  // Создаём экземпляры
  const gallery = new Gallery(galleryEl);
  const modal = new Modal(modalRoot);

  // Функция фильтрации (теперь внутри области видимости!)
  function filterGallery(season, type) {
    const filtered = galleryData.filter(item => {
      const seasonMatch = season === 'all' || item.season === season || item.season === 'all';
      const typeMatch = type === 'all' || item.type === type;
      return seasonMatch && typeMatch;
    });
    gallery.render(filtered);
  }

  // Инициализация вкладок
  const tabButtons = document.querySelectorAll('.tab-button');
  const tabs = new Tabs(tabButtons, (season) => {
    const activeFilter = document.querySelector('.filter-btn.active').dataset.type;
    filterGallery(season, activeFilter);
  });

  // Инициализация фильтров
  const filterButtons = document.querySelectorAll('.filter-btn');
  const filters = new Filters(filterButtons, (type) => {
    const activeSeason = document.querySelector('.tab-button.active').dataset.season;
    filterGallery(activeSeason, type);
  });

  // Первичный рендер
  filterGallery('all', 'all');

  // Обработка открытия модального окна
  document.addEventListener('gallery:select', (e) => {
    modal.open(e.detail);
  });
});