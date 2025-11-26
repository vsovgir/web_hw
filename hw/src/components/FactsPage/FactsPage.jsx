import { useRef, useState, useEffect } from 'react';
import styles from './FactsPage.module.css';
import { getRandomCat, createQuestion } from '../../api/questionsApi';

export default function FactsPage() {
  const formRef = useRef(null);

  const [cat, setCat] = useState(null);
  const [questionsCount, setQuestionsCount] = useState(0);

  const [loadingCat, setLoadingCat] = useState(false);
  const [errorCat, setErrorCat] = useState(null);

  useEffect(() => {
    async function loadData() {
      try {
        setLoadingCat(true);
        setErrorCat(null);

        const catFromApi = await getRandomCat();
        setCat(catFromApi);
        localStorage.setItem('cat', JSON.stringify(catFromApi));
      } catch (err) {
        console.error(err);
        setErrorCat('Не удалось загрузить котика с сервера.');

        const savedCat = localStorage.getItem('cat');
        if (savedCat) {
          try {
            setCat(JSON.parse(savedCat));
          } catch {
            setCat(null);
          }
        }
      } finally {
        setLoadingCat(false);
      }

      const savedQuestions = localStorage.getItem('questions');
      if (savedQuestions) {
        try {
          const parsed = JSON.parse(savedQuestions);
          setQuestionsCount(parsed.length || 0);
        } catch {
          setQuestionsCount(0);
        }
      }
    }

    loadData();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formRef.current) return;

    const formData = new FormData(formRef.current);

    const newQuestion = {
      name: formData.get('name'),
      contact: formData.get('contact'),
      question: formData.get('question'),
    };

    if (!newQuestion.question || !newQuestion.question.trim()) {
      alert('Пожалуйста, напишите свой вопрос');
      return;
    }

    try {
      const createdFromServer = await createQuestion(newQuestion);
      console.log('POST response:', createdFromServer);

      const savedRaw = localStorage.getItem('questions');
      const saved = savedRaw ? JSON.parse(savedRaw) : [];

      const questionToAdd = {
        ...newQuestion,
        id:
          typeof crypto !== 'undefined' && crypto.randomUUID
            ? crypto.randomUUID()
            : `user-${Date.now()}-${Math.random()}`,
      };

      const updated = [questionToAdd, ...saved];
      localStorage.setItem('questions', JSON.stringify(updated));

      setQuestionsCount(updated.length);

      alert('Спасибо! Ваш вопрос отправлен сотрудникам лавки');
      formRef.current.reset();
    } catch (err) {
      console.error(err);
      alert('Не удалось отправить вопрос. Попробуйте ещё раз позже.');
    }
  };

  const handleReset = () => {
    if (formRef.current) {
      formRef.current.reset();
    }
  };

  let catImageUrl = null;
  if (cat) {
    if (cat.url) {
      catImageUrl = cat.url.startsWith('http')
        ? cat.url
        : `https://cataas.com${cat.url}`;
    } else if (cat._id) {
      catImageUrl = `https://cataas.com/cat/${cat._id}`;
    }
  }

  return (
    <section className={styles.page}>
      <header className="sectionTitle">
        <h1 className={styles.pageTitle}>
          Чуть больше деталей о том, как устроена лавка и почему сюда вообще стоит заглянуть
        </h1>
      </header>

      <section className={styles.cardsRow}>
        <article className={styles.card}>
          <h2>Что такое Mystery Shack</h2>
          <p>
            Mystery Shack – туристическая лавка и музей всего странного, которым управляет Стэнли Пайнс.
            Формально это семейный бизнес, а неформально – самая подозрительная достопримечательность
            всего Гравити Фолз.
          </p>
          <p>
            Внутри можно найти искусственно состаренные артефакты, чучела существ сомнительного
            происхождения и пару по-настоящему аномальных вещей, о которых лучше никому не рассказывать.
          </p>
        </article>

        <article className={styles.card}>
          <h2>Расположение и режим работы</h2>
          <p>
            Лавка прячется в лесу неподалёку от города. Официального адреса нет: ориентир – выцветший
            щит с довольным лицом Стэна и стрелкой.
          </p>
          <p>
            Режим работы: «с тех пор, как Стэн проснулся, и до тех пор, пока есть хотя бы один турист,
            готовый купить магнитик». Аномалии и пропажа сотрудников могут временно скорректировать график.
          </p>
        </article>

        <article className={styles.card}>
          <h2>Правила для выживших посетителей</h2>
          <ul className={styles.list}>
            <li>Не трогать экспонаты без разрешения Зуса (особенно тех, кто шевелится)</li>
            <li>Не принимать всерьёз обещания дяди Стэна о «скидке для особых клиентов»</li>
            <li>Не соглашаться на сомнительные эксперименты Мэйбл, даже если там блёстки</li>
            <li>Всегда читать мелкий шрифт на табличках. Если он есть – это уже подозрительно</li>
          </ul>
        </article>
      </section>

      <section className={styles.formSection}>
        <h2 className={styles.formTitle}>Есть вопрос к сотрудникам лавки?</h2>
        <p className={styles.formLead}>
          Оставьте свои контакты и вопрос – кто-нибудь из команды Mystery Shack обязательно ответит.
        </p>

        <form className={styles.form} onSubmit={handleSubmit} ref={formRef}>
          <div className={styles.field}>
            <label htmlFor="name">Имя</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Как к вам обращаться"
              required
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="contact">Контакт</label>
            <input
              id="contact"
              name="contact"
              type="text"
              placeholder="Почта, телефон или любой удобный способ связи"
              required
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="question">Вопрос</label>
            <textarea
              id="question"
              name="question"
              rows="4"
              placeholder="Что бы вы хотели узнать о Mystery Shack?"
              required
            />
          </div>

          <div className={styles.buttons}>
            <button className={styles.submit} type="submit">
              Отправить вопрос
            </button>
            <button
              className={`${styles.submit} ${styles.secondaryButton}`}
              type="button"
              onClick={handleReset}
            >
              Очистить форму
            </button>
          </div>
        </form>

        <section className={styles.questionsSection}>
          <h3 className={styles.questionsTitle}>Статистика вопросов</h3>
          <p className={styles.counterText}>
            Через эту форму было задано:{' '}
            <span className={styles.counterNumber}>{questionsCount}</span> вопросов
          </p>
        </section>

        <section className={styles.catSection}>
          <p className={styles.catText}>
            Пока ты ждёшь ответ на свой вопрос, мы предлагаем посмотреть на котика
          </p>

          {errorCat && <p className={styles.error}>{errorCat}</p>}
          {loadingCat && <p className={styles.loading}>Загружаем котика...</p>}

          {!loadingCat && !errorCat && catImageUrl && (
            <img
              src={catImageUrl}
              alt="Котик из CATAAS"
              className={styles.catImage}
              loading="lazy"
            />
          )}
        </section>
      </section>
    </section>
  );
}
