import { useState, useEffect, useRef } from 'react';
import styles from './Feedback.module.css';

export default function Feedback({ title }) {
  const [feedbacks, setFeedbacks] = useState(() => {
    const saved = localStorage.getItem('feedbacks');
    return saved ? JSON.parse(saved) : [];
  });

  const [text, setText] = useState('');
  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
    }
  }, [text]);

  useEffect(() => {
    localStorage.setItem('feedbacks', JSON.stringify(feedbacks));
  }, [feedbacks]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    setFeedbacks([...feedbacks, { id: Date.now(), text }]);
    setText('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.ctrlKey) {
      e.preventDefault();
      handleSubmit(e);
    }

    if (e.key === 'Enter' && e.ctrlKey) {
      e.preventDefault();
      setText((prev) => prev + '\n');
    }
  };

  const deleteFeedback = (id) => {
    setFeedbacks((prev) => prev.filter((f) => f.id !== id));
  };

  return (
    <section className={styles.feedback}>
      <div className="sectionTitle">
        <h2>{title}</h2>
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <textarea
          ref={textareaRef}
          className={styles.input}
          placeholder="Напишите свой отзыв..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          rows={1}
        />
        <button type="submit" className={styles.send}>Отправить</button>
      </form>

      <div className={styles.list}>
        {feedbacks.map((f) => (
          <div key={f.id} className={styles.item}>
            <p>🗨️ {f.text}</p>
            <button
              className={styles.delete}
              onClick={() => deleteFeedback(f.id)}
            >
              ✖
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}



