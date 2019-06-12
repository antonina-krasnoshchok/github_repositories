import React from 'react';
import { Route, Redirect } from 'react-router';

import Menu from '../Menu';
import RepositoriesList from '../RepositoriesList';
import FavoriteRepositories from '../FavoriteRepositories';

import { LANGUAGES, FAVORITE_ROUTE } from '../config';


function MainContainer() {
    return ([
        <h1>Most popular repositories</h1>,
        <Menu/>,
        <Redirect from = "/" to = {`/${LANGUAGES[0]}`} />,
        LANGUAGES.map((language) => 
            <Route path = {`/${language}`} render = {() => <RepositoriesList language = {language}/>}/>
        ),
        <Route path = {`/${FAVORITE_ROUTE}`} render = {() => <FavoriteRepositories/>}/>
    ]);
};

export default MainContainer;