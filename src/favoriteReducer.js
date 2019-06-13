import * as actions from './config';

const favoriteInitialState = [];

const favoriteReducer = (state = favoriteInitialState, action) => {
    switch(action.type) {
        case actions.FAVORITE_TOGGLE:
            const { repository } = action;

            const isInFavorite = state.find(item => item.id === repository.id);
            const updatedFavoriteList = (isInFavorite) ? state.filter(favoriteItem => favoriteItem.id !== repository.id) : 
                                                [...state, repository];
            
            return updatedFavoriteList;
        
        default: 
            return state;     
    } 
};
  
export default favoriteReducer;