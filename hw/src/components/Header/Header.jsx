import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.head}>
      <div className={styles.headContainer}>
        <div className={styles.group}>
          <img className={styles.logoCol} src="https://i.pinimg.com/originals/84/1a/48/841a48aa8197e724e273de8789671b09.gif" />
          <img className={styles.logoCol} src="https://i.pinimg.com/originals/a4/58/51/a45851c1c69d53c593ebcdc6baaf771d.gif" />
          <img className={styles.logoCol} src="https://i.pinimg.com/originals/e5/eb/ab/e5ebabc135fe4e187eed730c98134a39.gif" />
          <img className={styles.logoCol} src="https://i.pinimg.com/originals/c3/35/dd/c335ddf2789aa939f617b5354f2293a0.gif" />
          <img className={styles.logoCol} src="https://i.pinimg.com/originals/ec/67/25/ec6725327e6d97fab41fe0d79e0be9f3.gif" />
        </div>
      </div>
    </header>
  );
}



