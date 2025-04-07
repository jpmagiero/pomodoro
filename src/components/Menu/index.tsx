import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './styles.module.css';
import { useState, useEffect } from 'react';

type AvailableThemes = 'dark' | 'light';

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>('dark');

  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    event.preventDefault(); //does not redirect to the link

    setTheme(prevTheme => {
      {
        const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
        return nextTheme;
      }
    });
  }

  useEffect(() => {
    console.log('Theme Changed', theme);
    document.documentElement.setAttribute('data-theme', theme); //sets the theme in the html tag

    return () => {
      console.log('This field will be updated');
      document.documentElement.removeAttribute('data-theme'); //removes the theme in the html tag
    };
  }, [theme]); //Executes when the theme changes

  return (
    <nav className={styles.menu}>
      <h1>{theme}</h1>
      <a className={styles.menuLink} href='#' aria-label='Home' title='Home'>
        <HouseIcon />
      </a>
      <a
        className={styles.menuLink}
        href='#'
        aria-label='History'
        title='History'
      >
        <HistoryIcon />
      </a>
      <a
        className={styles.menuLink}
        href='#'
        aria-label='Settings'
        title='Settings'
      >
        <SettingsIcon />
      </a>
      <a
        className={styles.menuLink}
        href='#'
        aria-label='Theme'
        title='Theme'
        onClick={handleThemeChange}
      >
        <SunIcon />
      </a>
    </nav>
  );
}
