import { useRef } from 'react';
import styles from './FactsPage.module.css';

export default function FactsPage() {
  const formRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Спасибо! Ваш вопрос отправлен сотрудникам лавки');

    if (formRef.current) {
      formRef.current.reset();
    }
  };

  const handleReset = () => {
    if (formRef.current) {
      formRef.current.reset();
    }
  };

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
            Mystery Shack - туристическая лавка и музей всего странного, которым управляет Стэнли Пайнс.
            Формально это семейный бизнес, а неформально - самая подозрительная достопримечательность
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
            Лавка прячется в лесу неподалёку от города. Официального адреса нет: ориентир - выцветший
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
            <li>Всегда читать мелкий шрифт на табличках. Если он есть - это уже подозрительно</li>
          </ul>
        </article>
      </section>

      <section className={styles.formSection}>
        <h2 className={styles.formTitle}>Есть вопрос к сотрудникам лавки?</h2>
        <p className={styles.formLead}>
          Оставьте свои контакты и вопрос - кто-нибудь из команды Mystery Shack обязательно ответит.
        </p>

        <form className={styles.form} onSubmit={handleSubmit} ref={formRef}>
          <div className={styles.field}>
            <label htmlFor="name">Имя</label>
            <input id="name" name="name" type="text" placeholder="Как к вам обращаться" required />
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
      </section>
    </section>
  );
}
