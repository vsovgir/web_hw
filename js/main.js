import { initScroll } from './scroll.js';
import { initModals } from './modals.js';
import { initFeedback } from './feedback.js';

document.addEventListener('DOMContentLoaded', () => {
  initScroll();
  initModals();
  initFeedback()
});
