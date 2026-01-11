export class Modal {
  constructor(rootElement) {
    this.root = rootElement;
    this.isOpen = false;
    this.init();
  }

  init() {
    this.overlay = document.createElement('div');
    this.overlay.className = 'modal-overlay';
    this.overlay.setAttribute('role', 'dialog');
    this.overlay.setAttribute('aria-modal', 'true');

    this.overlay.innerHTML = `
      <div class="modal-content">
        <img class="modal-image" alt="" />
        <div class="modal-caption"></div>
      </div>
    `;

    this.imageEl = this.overlay.querySelector('.modal-image');
    this.captionEl = this.overlay.querySelector('.modal-caption');

    // Закрытие по клику на оверлей
    this.overlay.addEventListener('click', (e) => {
      if (e.target === this.overlay) this.close();
    });

    // Закрытие по Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen) this.close();
    });
  }

  open({ src, caption }) {
    if (this.isOpen) return;

    this.imageEl.src = src;
    this.imageEl.alt = caption;
    this.captionEl.textContent = caption;

    this.root.appendChild(this.overlay);
    document.body.style.overflow = 'hidden';

    // Задержка для анимации
    requestAnimationFrame(() => {
      this.overlay.classList.add('is-open');
    });

    this.isOpen = true;
  }

  close() {
    if (!this.isOpen) return;

    this.overlay.classList.remove('is-open');
    document.body.style.overflow = '';

    setTimeout(() => {
      if (this.overlay.parentNode === this.root) {
        this.root.removeChild(this.overlay);
      }
    }, 300);

    this.isOpen = false;
  }
}