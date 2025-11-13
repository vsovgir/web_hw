export function initModals() {
  const modal = document.createElement('div');
  modal.classList.add('modal');
  modal.setAttribute('role', 'dialog');
  modal.setAttribute('aria-modal', 'true');

  const overlay = document.createElement('div');
  overlay.classList.add('modal-overlay');

  const content = document.createElement('div');
  content.classList.add('modal-content');

  const closeBtn = document.createElement('button');
  closeBtn.classList.add('modal-close');
  closeBtn.textContent = 'Закрыть';
  closeBtn.setAttribute('aria-label', 'Закрыть модальное окно');

  content.append(closeBtn);
  modal.append(overlay, content);
  document.body.appendChild(modal);

  function openModal() {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  closeBtn.addEventListener('click', closeModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  const employees = {
    'Диппер Пайнс': 'Любит расследования и ищет тайны в каждом углу.',
    'Мэйбл Пайнс': 'Оптимистка, мастер вязания и фанат блёсток.',
    'Стэнли Пайнс': 'Хозяин лавки и любитель лёгкой наживы.',
    'Вэнди Кордрой': 'Работает в лавке, обожает приключения.',
    'Зус Рамирез': 'Надёжный механик и лучший друг близнецов.',
    'Пухля': 'Любимая свинка Мэйбл, талисман лавки.'
  };

  const employeeSection = document.getElementById('employees');

  if (employeeSection) {
    employeeSection.querySelectorAll('figure').forEach((fig) => {
      fig.addEventListener('click', () => {
        const name = fig.querySelector('figcaption').textContent;

        renderModal(`
          <h2>${name}</h2>
          <p>${employees[name] || 'Нет данных о сотруднике.'}</p>
        `);

        openModal();
      });
    });
  }

  document.querySelectorAll('.cards-group button').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();

      const productName = btn.previousElementSibling.textContent;

      renderModal(`
        <p>Узнать про экспонат «${productName}» можно только за деньги, ха-ха!</p>
      `);

      openModal();
    });
  });

  function renderModal(html) {
    content.innerHTML = html;
    content.appendChild(closeBtn);
  }
}
