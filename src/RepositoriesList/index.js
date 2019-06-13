import { connect } from 'react-redux';

import { toggleFavorite, getRepositoriesData, clearRepositories } from '../actions';
import RepositoriesList from './RepositoriesList';
import { getRepositoriesList, getPage } from '../selectors';

const mapStateToProps = (state, ownProps) => {
  return {
    repositories: getRepositoriesList(state),
    language: ownProps.language,
    page: getPage(state),
    hasMore: state.repositories.hasMore
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
