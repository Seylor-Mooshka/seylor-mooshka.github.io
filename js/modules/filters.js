<<<<<<< HEAD
export class Filters {
  constructor(filterButtons, onFilterChange) {
    this.buttons = filterButtons;
    this.onFilterChange = onFilterChange;
    this.currentType = 'all';
    this.init();
  }

  init() {
    this.buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        this.setActive(btn.dataset.type);
        this.onFilterChange(this.currentType);
      });
    });
  }

  setActive(type) {
    this.buttons.forEach(btn => btn.classList.remove('active'));
    const activeBtn = Array.from(this.buttons).find(b => b.dataset.type === type);
    if (activeBtn) activeBtn.classList.add('active');
    this.currentType = type;
  }
=======
export class Filters {
  constructor(filterButtons, onFilterChange) {
    this.buttons = filterButtons;
    this.onFilterChange = onFilterChange;
    this.currentType = 'all';
    this.init();
  }

  init() {
    this.buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        this.setActive(btn.dataset.type);
        this.onFilterChange(this.currentType);
      });
    });
  }

  setActive(type) {
    this.buttons.forEach(btn => btn.classList.remove('active'));
    const activeBtn = Array.from(this.buttons).find(b => b.dataset.type === type);
    if (activeBtn) activeBtn.classList.add('active');
    this.currentType = type;
  }
>>>>>>> d20eb05c8fc5567c74df9d547190aaf4f898cb42
}