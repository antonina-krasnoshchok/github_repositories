import React, { Component } from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';
import List from '../List';

class RepositoriesList extends Component {

    componentDidMount() {
        this.props.getRepositoriesData(this.props.language);
    }; 
    
    render() {
        console.log(this.props);
        return (
             this.props.isLoading ? 
                <div>
                    <CircularProgress />
                </div> : 
                <List {...this.props} />
        )
    };
};

export default RepositoriesList;
