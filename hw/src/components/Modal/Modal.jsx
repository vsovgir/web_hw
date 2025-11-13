import { useEffect } from 'react';
import styles from './Modal.module.css';
import { exhibitsInfo, employeesInfo } from '../data/modalsData.js';


export default function Modal({ content, onClose }) {
  const isExhibit = !employeesInfo[content.name];

  const handlePay = () => {
    alert('💰 Спасибо за интерес к нашим экспонатам! Оплата будет обработана позже.');
  };

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={styles.overlay} onClick={handleOverlayClick} role="dialog" aria-modal="true">
      <div className={styles.modal}>
        <button className={styles.closeIcon} onClick={onClose} aria-label="Закрыть модалку">
          ×
        </button>

        <h2 className={styles.modalTitle}>{content.name}</h2>


        <p className={styles.modalText}>
          {employeesInfo[content.name] || content.text}
        </p>

        {isExhibit && (
          <button onClick={handlePay}>
            💸 Заплатить
          </button>
        )}
      </div>
    </div>
  );
}



