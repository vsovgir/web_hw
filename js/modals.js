export function initModals() {
  const modal = document.createElement('div');
  modal.classList.add('modal');
  document.body.appendChild(modal);

  modal.style.cssText = `
    position: fixed;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background: rgba(0,0,0,0.6);
    display: none;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  `;

  const content = document.createElement('div');
  content.style.cssText = `
    background: #fff;
    padding: 30px;
    border-radius: 12px;
    max-width: 400px;
    text-align: center;
  `;
  modal.appendChild(content);

  const closeBtn = document.createElement('button');
  closeBtn.textContent = 'Закрыть';
  closeBtn.style.marginTop = '15px';
  closeBtn.addEventListener('click', () => modal.style.display = 'none');
  content.appendChild(closeBtn);

  const employees = {
    'Диппер Пайнс': 'Любит расследования и ищет тайны в каждом углу.',
    'Мэйбл Пайнс': 'Оптимистка, мастер вязания и фанат блёсток.',
    'Стэнли Пайнс': 'Хозяин лавки и любитель лёгкой наживы.',
    'Вэнди Кордрой': 'Работает в лавке, обожает приключения.',
    'Зус Рамирез': 'Надёжный механик и лучший друг близнецов.',
    'Пухля': 'Любимая свинка Мэйбл, талисман лавки.'
  };

  document.querySelectorAll('.cards:last-of-type figure').forEach(fig => {
    fig.addEventListener('click', () => {
      const name = fig.querySelector('figcaption').textContent;
      content.innerHTML = `
        <h2>${name}</h2>
        <p>${employees[name] || 'Нет данных о сотруднике.'}</p>
      `;
      content.appendChild(closeBtn);
      modal.style.display = 'flex';
    });
  });

  document.querySelectorAll('.cards-group button').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const productName = btn.previousElementSibling.textContent;
      content.innerHTML = `
        <h2>Товар добавлен в корзину</h2>
        <p>${productName} успешно добавлен!</p>
      `;
      content.appendChild(closeBtn);
      modal.style.display = 'flex';
    });
  });
}
