import * as constants  from './config';

export const toggleFavorite = (repository) => {
  return {
    type: constants.FAVORITE_TOGGLE,
    repository
  };
};

const setRepositoriesData = (repositories) => {
  return {
    type: constants.SET_REPOSITORIES_DATA,
    repositories
  };
};

export const toggleLoading = () => {
  return {
    type: constants.TOGGLE_LOADING
  };
};

export const getRepositoriesData = (language) => {
  return (dispatch) => {
    dispatch(toggleLoading());

    const url =  'https://api.github.com/search/repositories';
    const queryStr = 'stars:>1';
    const sort = 'starts';
    const per_page = 100;

    fetch(`${url}?q=${queryStr}+language:${language}&sort=${sort}&per_page=${per_page}`)
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

        dispatch(setRepositoriesData(repositories));
        dispatch(toggleLoading());
      })
      .catch(() => {
        console.log("API rate limit exceeded");
        dispatch(toggleLoading());
        dispatch(setRepositoriesData([]));
      });        
  };
};