import { useState } from 'react';
import styles from './ExhibitsPage.module.css';
import cardsStyles from '../Cards/Cards.module.css';
import { exhibitsInfo } from '../data/modalsData';

const allExhibits = [
  {
    name: 'Камень, похожий на лицо',
    img: 'https://i.pinimg.com/736x/5a/b1/e4/5ab1e42369b619569d41b643382c0beb.jpg',
    category: 'artifact',
  },
  {
    name: 'Снежный человек',
    img: 'https://i.pinimg.com/736x/03/ec/63/03ec63c177e5d7394b15df2c66f73e3c.jpg',
    category: 'creature',
  },
  {
    name: 'Гризлирог',
    img: 'https://i.pinimg.com/1200x/38/31/8e/38318e2f1a0d6199d8e13cc4be57ec5b.jpg',
    category: 'creature',
  },
  {
    name: 'Летающие тарелки',
    img: 'https://i.pinimg.com/originals/79/ac/f8/79acf8d3edaf02a7e25cb167564e8c19.jpg',
    category: 'artifact',
  },
  {
    name: 'Птица Додо',
    img: 'https://i.pinimg.com/originals/b5/d7/1e/b5d71e41813fe571341cc8bf4b1e3f2c.jpg',
    category: 'creature',
  },
  {
    name: 'Джеколоп',
    img: 'https://i.pinimg.com/originals/5f/bb/4d/5fbb4d31812b0638d090fb2edbe99039.jpg',
    category: 'creature',
  },
  {
    name: 'Бобророг',
    img: 'https://i.pinimg.com/originals/35/ba/04/35ba0429bbf9dcc2b91ff437c2d9222d.jpg',
    category: 'creature',
  },
  {
    name: 'Птерозавр',
    img: 'https://i.pinimg.com/originals/41/6f/66/416f66157fb1e2b19445973c7f6848ea.jpg',
    category: 'creature',
  },
  {
    name: 'Качок-лопа',
    img: 'https://i.pinimg.com/originals/e4/d0/a1/e4d0a1f757758d8975e6dd71436db89e.jpg',
    category: 'creature',
  },
  {
    name: 'Грифон',
    img: 'https://i.pinimg.com/736x/b1/c1/50/b1c1501402ecdc434ec626eaf9c1818e.jpg',
    category: 'creature',
  },
  {
    name: 'Календарь ацтеков',
    img: 'https://i.pinimg.com/736x/4c/78/c6/4c78c65d8aeac4c94bc665e4514b5620.jpg',
    category: 'artifact',
  },
  {
    name: 'Тсантса',
    img: 'https://i.pinimg.com/736x/ea/c9/94/eac9948acce471a83d29a5a0aa07d73e.jpg',
    category: 'artifact',
  }  
];

export default function ExhibitsPage({ onOpenModal }) {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');

  const filtered = allExhibits.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === 'all' || item.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className={styles.page}>
      <header className="sectionTitle">
        <h1 className={styles.pageTitle}>Все экспонаты Mystery Shack</h1>
      </header>

      <div className={styles.controls}>
        <input
          type="search"
          placeholder="Поиск по названию"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={styles.search}
        />

        <div className={styles.filters}>
          <button
            type="button"
            className={`${styles.filterButton} ${
              category === 'all' ? styles.filterButtonActive : ''
            }`}
            onClick={() => setCategory('all')}
          >
            Все
          </button>
          <button
            type="button"
            className={`${styles.filterButton} ${
              category === 'creature' ? styles.filterButtonActive : ''
            }`}
            onClick={() => setCategory('creature')}
          >
            Существа
          </button>
          <button
            type="button"
            className={`${styles.filterButton} ${
              category === 'artifact' ? styles.filterButtonActive : ''
            }`}
            onClick={() => setCategory('artifact')}
          >
            Артефакты
          </button>
        </div>
      </div>

      <div className={cardsStyles.cardsGroup}>
        {filtered.length === 0 && (
          <p className={styles.empty}>Подходящих экспонатов не найдено.</p>
        )}

        {filtered.map((item) => (
          <figure
            key={item.name}
            className={cardsStyles.figure}
            onClick={() =>
              onOpenModal({
                name: item.name,
                text: exhibitsInfo(item.name),
              })
            }
          >
            <img src={item.img} alt={item.name} />
            <figcaption>{item.name}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
