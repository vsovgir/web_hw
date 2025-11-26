
const RANDOM_CAT_URL = 'https://cataas.com/cat?json=true';

const QUESTIONS_API_URL = 'https://jsonplaceholder.typicode.com/comments';

export async function getRandomCat() {
  console.log('GET: загружаем случайного котика...');

  const response = await fetch(RANDOM_CAT_URL);

  console.log('GET cat status:', response.status);

  if (!response.ok) {
    throw new Error('Failed to load cat');
  }

  const data = await response.json();
  console.log('GET cat data:', data);

  return data;
}

export async function createQuestion(question) {
  console.log('POST: отправляем вопрос:', question);

  const response = await fetch(QUESTIONS_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(question),
  });

  console.log('POST status:', response.status);

  if (!response.ok) {
    throw new Error('Failed to send question');
  }

  const data = await response.json();
  console.log('POST response:', data);

  return data;
}
