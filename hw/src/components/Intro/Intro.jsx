import styles from "./Intro.module.css";

export default function Intro({
  onScrollToFacts,
  onScrollToExhibits,
  onScrollToEmployees,
  onScrollToFeedback
}) {
  return (
    <section className={styles.intro}>
      <hr className="rule rule--divider" />
      <h1 className={styles.introTitle}>Mystery Shack Online</h1>

      <div className={styles.buttonGroup}>
        <button className="button" onClick={onScrollToFacts}>Факты</button>
        <button className="button" onClick={onScrollToExhibits}>Экспонаты</button>
        <button className="button" onClick={onScrollToEmployees}>Сотрудники</button>
        <button className="button" onClick={onScrollToFeedback}>Отзывы</button>
      </div>
      <hr className="rule rule--divider" />
    </section>
  );
}





