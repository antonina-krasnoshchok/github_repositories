import * as constants  from './config';

export const toggleFavorite = (repository) => {
  return {
    type: constants.FAVORITE_TOGGLE,
    repository
  };
};

export const setRepositoriesData = (repositories, page) => {
  return {
    type: constants.SET_REPOSITORIES_DATA,
    repositories,
    page
  };
};

export const clearRepositories = () => {
  return {
    type: constants.CLEAR_REPOSITORIES
  };
}

export const getRepositoriesData = (language, page) => {
  return (dispatch) => {
    const url =  'https://api.github.com/search/repositories';
    const queryStr = 'stars:>1';
    const sort = 'starts';
    const per_page = 25;
    
    return fetch(`${url}?q=${queryStr}+language:${language}&sort=${sort}&per_page=${per_page}&page=${page}`)
      .then((res) => res.json())
      .then(({items}) => {
        const repositories = items.map(({id, language, name, owner, stargazers_count, html_url}) => {
          return {
                  id,
                  language,
                  name,
                  logo: owner.avatar_url,
                  stars: stargazers_count,
                  html_url
              }
        }); 
        dispatch(setRepositoriesData(repositories, page));
      })
      .catch(() => {
        dispatch(setHasMore());
      });        
  };
};

export const setHasMore = () => {
  return {
    type: constants.SET_HAS_MORE
  };
}