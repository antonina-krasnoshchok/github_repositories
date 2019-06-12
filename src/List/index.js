import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import Favorite from '@material-ui/icons/FavoriteOutlined';

import Styles from './List.module.css';

function List(props) {
    const { repositories, toggleFavorite } = props;
   
    return (
        <div className = {Styles.listContainer}>
        {
            repositories.map((repository, i) => {
                const { name, logo, stars, isFavorite, html_url } = repository;
                const favoriteIconStyle = isFavorite ? Styles.favoriteIconSelected : Styles.favoriteIcon;
                return <div className = {Styles.repository}>
                            <div className = {Styles.favorite}>
                            <IconButton aria-label = 'Favorite' onClick = {() => toggleFavorite(repository) }>
                                <Favorite className = {favoriteIconStyle} />
                            </IconButton>
                            </div>
                            <div>#{++i}</div>
                            <div>
                                <a href={html_url} rel='noopener noreferrer' target='_blank'><img alt = {logo} src = {logo}/></a>
                            </div>
                            <div>
                                <h4><a href={html_url} rel='noopener noreferrer' target='_blank'>{name}</a></h4>
                            </div>
                            <div>&#9733;{stars}</div>
                        </div>
            })
        }
        </div>
    );
};

export default List;