import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

import { setRepositoriesData, clearRepositories, setHasMore, toggleFavorite, getRepositoriesData } from '../actions';
import * as constants  from '../config';

const repositoryObj = {
    html_url: 'https://github.com/freeCodeCamp/freeCodeCamp',
    id: 28457823,
    language: 'JavaScript',
    logo: 'https://avatars0.githubusercontent.com/u/9892522?v=4',
    name: 'freeCodeCamp',
    stars: 303376
};

describe('Repositories actions', () => {
    it('should set data to repository', () => {
        const repositories = [
            repositoryObj
        ];
        const page = 1;
		const expectedAction = {
			type: constants.SET_REPOSITORIES_DATA,
            repositories,
            page
		};
		expect(setRepositoriesData(repositories, page)).toEqual(expectedAction);
    });
    
    it('should set repositories to initial state', () => {
        const expectedAction = {
            type: constants.CLEAR_REPOSITORIES
        };
        expect(clearRepositories()).toEqual(expectedAction);
    });

    it('should set repositories to initial state', () => {
        const expectedAction = {
            type: constants.SET_HAS_MORE
        };
        expect(setHasMore()).toEqual(expectedAction);
    });

    it ('should get repositories from API', () => {
        const url =  'https://api.github.com/search/repositories';
        const queryStr = 'stars:>1';
        const sort = 'starts';
        const per_page = 25;
        const language = "All";
        const page = 1;

		const mockStore = configureMockStore([thunk]);
        const store = mockStore({ 
            repositories: {
                result: [],
                page: 1,
                hasMore: true
            },
            favoriteList:[]
        });
        
		const repositoriesData = {
            total_count: 3283729,
            incomplete_results: false,
			items: [ {
                html_url: 'https://github.com/freeCodeCamp/freeCodeCamp',
                id: 28457823,
                language: 'JavaScript',
                owner: {
                    avatar_url: 'https://avatars0.githubusercontent.com/u/9892522?v=4'
                },
                name: 'freeCodeCamp',
                stargazers_count: 303376
            }]
        };
        
        fetchMock.get(`${url}?q=${queryStr}+language:${language}&sort=${sort}&per_page=${per_page}&page=${page}`, {
			body: repositoriesData
        });
        
        const repositories = [repositoryObj];

		const expectedActions = [{
            type: 'SET_REPOSITORIES_DATA', 
            repositories, 
            page
        }];

		return store.dispatch(getRepositoriesData(language, page)).then(() => {
			expect(store.getActions()).toEqual(expectedActions);
		});
    });
    
    it ('should catch error in getRepositoriesData', () => {
        const url =  'https://api.github.com/search/repositories';
        const queryStr = 'stars:>1';
        const sort = 'starts';
        const per_page = 25;
        const language = "Ruby";
        const page = 1;

		const mockStore = configureMockStore([thunk]);
        const store = mockStore({ repositories: []});
        
		const repositoriesData = {};

		const expectedActions = [ 
            {type: 'SET_HAS_MORE'} 
        ];

		fetchMock.get(`${url}?q=${queryStr}+language:${language}&sort=${sort}&per_page=${per_page}&page=${page}`, {
			body: repositoriesData
		});

		return store.dispatch(getRepositoriesData(language, page)).then(() => {
			expect(store.getActions()).toEqual(expectedActions);
		});
	});
});

describe('Favorite actions', () => {
    it('should set repositories to initial state', () => {
        const repository = repositoryObj;
        const expectedAction = {
            type: constants.FAVORITE_TOGGLE,
            repository
        };
        expect(toggleFavorite(repository)).toEqual(expectedAction);
    });
});