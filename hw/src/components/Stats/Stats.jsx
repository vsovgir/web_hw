import styles from './Stats.module.css';

export default function Stats({ onMoreFacts, hideIntro = false, compact = false }) {
  const data = [
    {
      value: '1982',
      caption:
        'Год, когда Стэн выкупил здание и открыл Mystery Shack. До этого здесь был туристический домик его брата.',
    },
    {
      value: '$6.66',
      caption:
        'Средняя цена «самых честных сувениров» — традиция дяди Стэна, чтобы «держать клиентов в тонусе».',
    },
    {
      value: '38',
      caption:
        'Именно столько ловушек и фальшивых экспонатов спрятано внутри магазина, чтобы посетители не скучали.',
    },
    {
      value: '“No Refunds”',
      caption:
        'Главный лозунг лавки, висящий над кассой с первых дней работы. Стэн никогда его не снимал.',
    },
    {
      value: '#1 Employee',
      caption:
        'Зус получил этот титул неофициально — просто потому, что больше никто не остался работать.',
    },
  ];

  return (
    <section className={styles.stats}>
      {!hideIntro && (
        <aside className={styles.statsLeft}>
          <p>
            Если вы когда-нибудь будете на северо-западном побережье, вы, вероятно, увидите на
            машинах наклейки с названием «Гравити Фолз». Этого городка нет на картах, и мало кто
            о нем слышал, кто-то считает, что это миф. Но если вам любопытно, не ждите, поезжайте
            туда, найдите его! Он где-то там, среди лесов, ждет вас…
          </p>
        </aside>
      )}

      <div className={styles.statsRight}>
        {data.map((item, index) => (
          <article key={index} className={styles.statRow}>
            <div className={compact ? styles.statValueSmall : styles.statValue}>
              {item.value}
            </div>
            <p className={compact ? styles.statCaptionSmall : styles.statCaption}>
              {item.caption}
            </p>
            {index < data.length - 1 && <hr className="rule" />}
          </article>
        ))}

        {onMoreFacts && (
          <button className={styles.button} type="button" onClick={onMoreFacts}>
            Узнать больше о лавке
          </button>
        )}
      </div>
    </section>
  );
}



