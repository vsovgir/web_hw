export function initFeedback() {
  const form = document.getElementById('feedback-form');
  const input = document.getElementById('feedback-input');
  const list = document.getElementById('feedback-list');

  const feedbacks = [];

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
    }
  });
}

