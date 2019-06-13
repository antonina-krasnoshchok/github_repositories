import { connect } from 'react-redux';

import { toggleFavorite, getRepositoriesData, clearRepositories } from '../actions';
import RepositoriesList from './RepositoriesList';
import { getRepositoriesList, getPage, getHasMore } from '../selectors';

const mapStateToProps = (state, ownProps) => {
  return {
    repositories: getRepositoriesList(state),
    page: getPage(state),
    hasMore: getHasMore(state),
    language: ownProps.language
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleFavorite: (repository) => dispatch(toggleFavorite(repository)),
    getRepositoriesData: (language, page) => dispatch(getRepositoriesData(language, page)),
    clearRepositories: () => dispatch(clearRepositories())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RepositoriesList);
