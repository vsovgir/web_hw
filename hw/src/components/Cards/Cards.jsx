import styles from './Cards.module.css';
import { exhibitsInfo, employeesInfo } from '../data/modalsData.js';

export default function Cards({ title, type, onOpenModal, onMoreExhibits }) {
  const exhibits = [
    { name: 'Камень, похожий на лицо', img: 'https://i.pinimg.com/736x/5a/b1/e4/5ab1e42369b619569d41b643382c0beb.jpg' },
    { name: 'Снежный человек', img: 'https://i.pinimg.com/736x/03/ec/63/03ec63c177e5d7394b15df2c66f73e3c.jpg' },
    { name: 'Гризлирог', img: 'https://i.pinimg.com/1200x/38/31/8e/38318e2f1a0d6199d8e13cc4be57ec5b.jpg' },
    { name: 'Летающие тарелки', img: 'https://i.pinimg.com/originals/79/ac/f8/79acf8d3edaf02a7e25cb167564e8c19.jpg' },
    { name: 'Птица Додо', img: 'https://i.pinimg.com/originals/b5/d7/1e/b5d71e41813fe571341cc8bf4b1e3f2c.jpg' },
    { name: 'Джеколоп', img: 'https://i.pinimg.com/originals/5f/bb/4d/5fbb4d31812b0638d090fb2edbe99039.jpg' }
  ];

  const employees = [
    { name: 'Диппер Пайнс', img: 'https://i.pinimg.com/736x/0c/6d/2c/0c6d2c2122c00dbeb20417c40e902ff7.jpg' },
    { name: 'Мэйбл Пайнс', img: 'https://i.pinimg.com/736x/1e/bc/1c/1ebc1c78f492f3257aa6d591c22aaab8.jpg' },
    { name: 'Стэнли Пайнс', img: 'https://i.pinimg.com/1200x/f8/b8/27/f8b82715cb8c945118e06c5eeaade660.jpg' },
    { name: 'Вэнди Кордрой', img: 'https://i.pinimg.com/736x/86/a9/47/86a9479b15944b2a8b4568d78f81d2b0.jpg' },
    { name: 'Зус Рамирез', img: 'https://i.pinimg.com/1200x/67/40/3c/67403ce6a66e51f1abc3f079df1bc90f.jpg' },
    { name: 'Пухля', img: 'https://i.pinimg.com/736x/69/93/64/69936487481381e7b673a0acc93f8387.jpg' },
  ];

  const items = type === 'exhibits' ? exhibits : employees;

  return (
    <section className={styles.cards}>
      <div className="sectionTitle">
        <h2>{title}</h2>
      </div>

      <div className={styles.cardsGroup}>
        {items.map((item, i) => (
          <figure
            key={i}
            className={styles.figure}
            onClick={() =>
              onOpenModal({
                name: item.name,
                text:
                  type === 'exhibits'
                    ? exhibitsInfo(item.name)
                    : employeesInfo[item.name],
              })
            }
          >
            <img src={item.img} alt={item.name} />
            <figcaption>{item.name}</figcaption>
          </figure>
        ))}
      </div>

      {type === 'exhibits' && onMoreExhibits && (
        <button
          className={styles.button}
          type="button"
          onClick={onMoreExhibits}
        >
          Ещё экспонаты
        </button>
      )}
    </section>
  );
}

