import * as actions from './config';

const initialState = {
    repositories : {
        result: [],
        page: 1,
        hasMore: true
    },
    favoriteList: []
};

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case actions.FAVORITE_TOGGLE:
            const { favoriteList } = state;
            const { repository } = action;

            const isInFavorite = favoriteList.find(item => item.id === repository.id);
            const updatedFavoriteList = (isInFavorite) ? favoriteList.filter(favoriteItem => favoriteItem.id !== repository.id) : 
                                                [...favoriteList, repository];
            
            return {
                ...state,
                favoriteList: updatedFavoriteList
            };
        
        case actions.SET_REPOSITORIES_DATA:
            return {
                ...state,
                repositories: {
                    ...state.repositories,
                    result: [...state.repositories.result, ...action.repositories],
                    page: action.page + 1
                }
            }
        case actions.CLEAR_REPOSITORIES:
            return {
                ...state,
                repositories: {
                    result: [],
                    page: 1,
                    hasMore: true
                }
            }
        case actions.SET_HAS_MORE:
                return {
                    ...state,
                    repositories: {
                        ...state.repositories,
                        hasMore: !state.repositories.hasMore
                    }
                }

        default: 
            return state;     
    } 
};
  
export default rootReducer;