import { createSelector } from 'reselect';

export const getRepositories = (state) => state.repositories.result;

export const getFavorite = (state) => state.favoriteList;

export const getPage = (state) => state.repositories.page;

export const getHasMore = (state) => state.repositories.hasMore;

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
