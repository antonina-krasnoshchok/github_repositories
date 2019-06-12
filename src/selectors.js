import { createSelector } from 'reselect';

export const getLoading = (state) => state.isLoading;

export const getRepositories = (state) => state.repositories;

export const getFavorite = (state) => state.favoriteList;

export const getRepositoriesList = createSelector(
    [getRepositories, getFavorite], (repositories, favoriteList) => {
        const repositoriesList = repositories.map(repository => {
            const isFavorite = favoriteList.find(favoriteItem => favoriteItem.id === repository.id);
            return {
                ...repository,
                isFavorite
            };
        });
        return repositoriesList;
    }
);

export const getFavoriteList = createSelector(
    [getFavorite], (favoriteList) => {
        return favoriteList.map(favoriteItem => {
            return  {
                ...favoriteItem,
                isFavorite: true
            };
        });
    }
);
