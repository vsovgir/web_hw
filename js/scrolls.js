export function initScroll() {
  const buttons = {
    facts: document.querySelector('.button-facts'),
    products: document.querySelector('.button-exhibits'),
    employees: document.querySelector('.button-employees'),
    reviews: document.querySelector('.button-reviews')
  };

  const sections = {
    facts: document.querySelector('.stats'),
    products: document.querySelectorAll('.cards')[0],
    employees: document.querySelectorAll('.cards')[1],
    reviews: document.querySelector('.feedback')
  };

  buttons.facts.addEventListener('click', () => {
    sections.facts.scrollIntoView({ behavior: 'smooth' });
  });
  buttons.products.addEventListener('click', () => {
    sections.products.scrollIntoView({ behavior: 'smooth' });
  });
  buttons.employees.addEventListener('click', () => {
    sections.employees.scrollIntoView({ behavior: 'smooth' });
  });
  buttons.reviews.addEventListener('click', () => {
    sections.reviews.scrollIntoView({ behavior: 'smooth' });
  });
}