import styles from './styles.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <a href=''>How the Pomodoro technique works</a>
      <a>
        Pomodoro &copy;{new Date().getFullYear()} - Made with S2 by {''}
        <a className={styles.portfolio} href='https://www.magiero.com.br/'>
          João Magiero
        </a>
      </a>
    </footer>
  );
}
