import { useContext } from 'react';
import { Link } from 'react-router-dom';

import classes from './MainNavigation.module.css';
import FavoritesContext from '../../store/favorites-context';

function MainNavigation() {
  const favoritesCtx = useContext(FavoritesContext);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Lista imprez</div>
      <nav>
        <ul>
          <li>
            <Link to='/'>Wszystkie imprezy</Link>
          </li>
          <li>
            <Link to='/new-meetup'>Dodaj nową imprezę</Link>
          </li>
          <li>
            <Link to='/favorites'>
              Ulubione
              <span className={classes.badge}>
                {favoritesCtx.totalFavorites}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
