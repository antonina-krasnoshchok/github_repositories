import React, { Component } from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';
import InfiniteScroll from 'react-infinite-scroll-component';

import List from '../List';

import styles from './RepositoriesList.module.css';

class RepositoriesList extends Component {

    componentDidMount() {
        const { language, getRepositoriesData, clearRepositories } = this.props;
        clearRepositories(); 
        getRepositoriesData(language, 1);
    }; 

    render() {
        const { language, page, getRepositoriesData, repositories, hasMore } = this.props; 
        const msg = hasMore ? 
                "Loaded 200 repositories" : 
                'Can\'t load repositories. API rate limit exceeded.';
        return (
            <InfiniteScroll
                className = {styles.scroll}
                dataLength = {repositories.length} 
                next={() => getRepositoriesData(language, page)}
                hasMore = {hasMore && repositories.length<200}
                loader = {<CircularProgress />}
                endMessage = {<p><b>{msg}</b></p>}
            >
                <List {...this.props} />
            </InfiniteScroll>
        )
    };
};

export default RepositoriesList;
