import {
  HistoryIcon,
  HouseIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon,
} from 'lucide-react';
import styles from './styles.module.css';
import { useState, useEffect } from 'react';

type AvailableThemes = 'dark' | 'light';

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>(() => {
    const storedTheme =
      (localStorage.getItem('theme') as AvailableThemes) || 'light';
    return storedTheme;
  });

  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  };

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
    document.documentElement.setAttribute('data-theme', theme); //sets the theme in the html tag

    localStorage.setItem('theme', theme); //sets the theme in the local storage
  }, [theme]); //Executes when the theme changes

  return (
    <nav className={styles.menu}>
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
        {nextThemeIcon[theme]}
      </a>
    </nav>
  );
}
