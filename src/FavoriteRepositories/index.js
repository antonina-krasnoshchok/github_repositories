import { connect } from 'react-redux';

import List from '../List';
import { toggleFavorite } from '../actions';
import { getFavoriteList } from '../selectors';

const mapStateToProps = (state) => {
  return {
    repositories: getFavoriteList(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleFavorite: (repository) => dispatch(toggleFavorite(repository))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
