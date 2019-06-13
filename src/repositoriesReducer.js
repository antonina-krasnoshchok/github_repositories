import * as actions from './config';

const repositoriesInitialState = {
    result: [],
    page: 1,
    hasMore: true
};

const repositoriesReducer = (state = repositoriesInitialState, action) => {
    switch(action.type) {
        case actions.SET_REPOSITORIES_DATA:
            return {
                ...state,
                result: [...state.result, ...action.repositories],
                page: action.page + 1
            };

        case actions.CLEAR_REPOSITORIES:
            return repositoriesInitialState;

        case actions.SET_HAS_MORE:
            return {
                ...state,
                hasMore: !state.hasMore
            };

        default: 
            return state;     
    } 
};
  
export default repositoriesReducer;