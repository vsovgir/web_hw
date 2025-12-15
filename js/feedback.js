export function initFeedback() {
  const form = document.getElementById('feedback-form');
  const input = document.getElementById('feedback-input');
  const list = document.getElementById('feedback-list');

  const storageAvailable = (() => {
    try {
      const test = '__storage_test__';
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
    } catch (e) {
      return false;
    }
  })();

  let feedbacks = [];

  if (storageAvailable) {
    const saved = localStorage.getItem('feedbacks');
    if (saved) {
      try {
        feedbacks = JSON.parse(saved);
        feedbacks.forEach(item => {
          const p = document.createElement('p');
          p.textContent = `🗨️ ${item.text}`;
          list.appendChild(p);
        });
      } catch (err) {
        console.error('Ошибка при чтении LocalStorage:', err);
      }
    }
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = input.value.trim();

    if (text) {
      const newFeedback = {
        id: Date.now(),
        text
      };
      feedbacks.push(newFeedback);

      const p = document.createElement('p');
      p.textContent = `🗨️ ${newFeedback.text}`;
      list.appendChild(p);

      input.value = '';

      if (storageAvailable) {
        try {
          localStorage.setItem('feedbacks', JSON.stringify(feedbacks));
        } catch (err) {
          console.error('Ошибка при сохранении в LocalStorage:', err);
        }
      } else {
        alert('Браузер не поддерживает сохранение отзывов');
      }
    }
  });
}


