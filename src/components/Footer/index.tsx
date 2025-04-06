import { ExternalLink } from '../ExternalLink';
import styles from './styles.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <a href=''>How the Pomodoro technique works</a>
      <a>
        Pomodoro &copy;{new Date().getFullYear()} - Made with S2 by {''}
        <ExternalLink
          className={styles.portfolio}
          href='https://www.magiero.com.br/'
        >
          João Magiero
        </ExternalLink>
      </a>
    </footer>
  );
}
