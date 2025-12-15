export function initScroll() {
  const buttons = {
    facts: document.querySelector('.button-one'),
    products: document.querySelector('.button-two'),
    employees: document.querySelector('.button-three')
  };

  const sections = {
    facts: document.querySelector('.stats'),
    products: document.querySelectorAll('.cards')[0],
    employees: document.querySelectorAll('.cards')[1]
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
}