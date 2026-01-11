export class Gallery {
  constructor(container) {
    this.container = container;
  }

  render(items) {
    this.container.innerHTML = '';
    if (items.length === 0) {
      this.container.innerHTML = '<p class="no-results">Ничего не найдено. Попробуйте другой фильтр.</p>';
      return;
    }
    items.forEach(item => {
      const figure = document.createElement('figure');
      figure.className = 'gallery-item';
      figure.setAttribute('tabindex', '0');
      figure.setAttribute('role', 'button');
      figure.setAttribute('aria-label', `Открыть: ${item.caption}`);

      const img = document.createElement('img');
      img.className = 'gallery-img';
      img.src = item.src;
      img.alt = item.caption;
      img.loading = 'lazy';

      const figcaption = document.createElement('figcaption');
      figcaption.textContent = item.title;
      figcaption.className = 'gallery-title';

      figure.appendChild(img);
      figure.appendChild(figcaption);

      figure.addEventListener('click', () => this.onClick(item));
      figure.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') this.onClick(item);
      });

      this.container.appendChild(figure);
    });
  }

  onClick(item) {
    const event = new CustomEvent('gallery:select', { detail: item });
    document.dispatchEvent(event);
  }
}