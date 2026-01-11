<<<<<<< HEAD
export class Tabs {
  constructor(tabButtons, onTabChange) {
    this.buttons = tabButtons;
    this.onTabChange = onTabChange;
    this.currentSeason = 'all';
    this.init();
  }

  init() {
    this.buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        this.setActive(btn.dataset.season);
        this.onTabChange(this.currentSeason);
      });
    });
  }

  setActive(season) {
    this.buttons.forEach(btn => btn.classList.remove('active'));
    const activeBtn = Array.from(this.buttons).find(b => b.dataset.season === season);
    if (activeBtn) activeBtn.classList.add('active');
    this.currentSeason = season;
  }
=======
export class Tabs {
  constructor(tabButtons, onTabChange) {
    this.buttons = tabButtons;
    this.onTabChange = onTabChange;
    this.currentSeason = 'all';
    this.init();
  }

  init() {
    this.buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        this.setActive(btn.dataset.season);
        this.onTabChange(this.currentSeason);
      });
    });
  }

  setActive(season) {
    this.buttons.forEach(btn => btn.classList.remove('active'));
    const activeBtn = Array.from(this.buttons).find(b => b.dataset.season === season);
    if (activeBtn) activeBtn.classList.add('active');
    this.currentSeason = season;
  }
>>>>>>> d20eb05c8fc5567c74df9d547190aaf4f898cb42
}