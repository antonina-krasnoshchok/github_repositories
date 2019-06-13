import favoriteReducer from '../favoriteReducer';
import repositoriesReducer from '../repositoriesReducer';
import * as constants  from '../config';

const repositoryObj = {
    html_url: 'https://github.com/freeCodeCamp/freeCodeCamp',
    id: 28457823,
    language: 'JavaScript',
    logo: 'https://avatars0.githubusercontent.com/u/9892522?v=4',
    name: 'freeCodeCamp',
    stars: 303376
};

describe('favoriteReducer', () => {
    it ('should handle FAVORITE_TOGGLE', () => {
        const action = { 
            repository: repositoryObj,  
            type: constants.FAVORITE_TOGGLE
        };
        const favoriteList = [];
        const expectedAction = [repositoryObj];
        expect(favoriteReducer(favoriteList, action)).toEqual(expectedAction);
    });

    it ('should return default state', () => {
        const favoriteList = [repositoryObj];
        const action = {};
        expect(favoriteReducer(favoriteList, action)).toEqual(favoriteList);
    });
});

describe('repositoriesReducer', () => {
    it ('should handle SET_REPOSITORIES_DATA', () => {
        const page = 1;
        const hasMore = true;
        const action = { 
            repositories: [repositoryObj],  
            type: constants.SET_REPOSITORIES_DATA,
            page
        };
        const repositories = {
            result: [],
            page,
            hasMore
        };
        const expectedAction = {
            result: [repositoryObj],
            page: page + 1,
            hasMore
        };
        expect(repositoriesReducer(repositories, action)).toEqual(expectedAction);
    });

    it ('should handle CLEAR_REPOSITORIES', () => {
        const page = 1;
        const hasMore = true;
        const expectedAction = {
            result: [],
            page,
            hasMore
        };
        const repositories = {
            result: [repositoryObj],
            page,
            hasMore  
        };
        const action = {  
            type: constants.CLEAR_REPOSITORIES, 
        };
        expect(repositoriesReducer(repositories, action)).toEqual(expectedAction);
    });

    it ('should handle SET_HAS_MORE', () => {
        const page = 1;
        const hasMore = true;
        const expectedAction = {
            result: [repositoryObj],
            page,
            hasMore: !hasMore
        };
        const repositories = {
            result: [repositoryObj],
            page,
            hasMore  
        };
        const action = {  
            type: constants.SET_HAS_MORE, 
        };
        expect(repositoriesReducer(repositories, action)).toEqual(expectedAction);
    });

    it ('should return default state', () => {
        const repositories = {
            result: [repositoryObj],
            page: 1,
            hasMore: true  
        };
        const action = {};
        expect(repositoriesReducer(repositories, action)).toEqual(repositories);
    });
});