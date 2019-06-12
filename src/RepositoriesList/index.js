import { connect } from 'react-redux';

import { toggleFavorite, getRepositoriesData } from '../actions';
import RepositoriesList from './RepositoriesList';
import { getRepositoriesList, getLoading } from '../selectors';

const mapStateToProps = (state, ownProps) => {
  return {
    repositories: getRepositoriesList(state),
    isLoading: getLoading(state),
    language: ownProps.language
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleFavorite: (repository) => dispatch(toggleFavorite(repository)),
    getRepositoriesData: (language) => dispatch(getRepositoriesData(language))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RepositoriesList);
