import * as actions from './config';

const initialState = {
    repositories : [],
    favoriteList: [],
    isLoading: false
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
                repositories: action.repositories
            }

        case actions.TOGGLE_LOADING:
            return {
                ...state,
                isLoading: !state.isLoading
            }
        default: 
            return state      
    } 
};
  
export default rootReducer;