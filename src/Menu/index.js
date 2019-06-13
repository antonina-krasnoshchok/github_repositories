import React from 'react';
import { NavLink } from 'react-router-dom';

import Favorite from '@material-ui/icons/FavoriteOutlined';

import { LANGUAGES, FAVORITE_ROUTE } from '../config';

import styles from './Menu.module.css';

const Menu = () => {
    return (
        <div class={styles.menu}>
                {LANGUAGES.map((language) => 
                    <NavLink to = {`/${language}`} className = {styles.menuItem} activeClassName = {styles.activeMenuItem}>
                        {language}
                    </NavLink>
                )}
                <NavLink to = {`/${FAVORITE_ROUTE}`} className = {styles.favoriteMenuIcon}>
                    <Favorite color = "secondary" fontSize = "large"  />
                </NavLink>
        </div>
    );    
};

export default Menu;