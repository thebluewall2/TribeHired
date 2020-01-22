import React, { PureComponent } from 'react';
import { FlatList, View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import Actions from '../../Redux/Actions';
import Selectors from '../../Redux/Selectors';

class Posts extends PureComponent {
    componentDidMount() {
        const { getPosts } = this.props;

        getPosts();
    }

    _onPostClicked = (id) => {
        
    }
    
    _renderSeparator = () => {
        return (
            <View style={{ height: 1, backgroundColor: 'gray' }} />
        );
    }

    _renderPost = ({ item }) => {
        return (
            <TouchableOpacity
                onPress={() => this._onPostClicked(item.id)}
            >
                <Text>{item.title}</Text>
            </TouchableOpacity>
        );
    }

    render() {
        const { posts } = this.props;
        console.log(posts);
        return (
            <FlatList
                data={posts}
                renderItem={this._renderPost}
                ItemSeparatorComponent={this._renderSeparator}
            />
        );  
    }
}

const mapStateToProps = (state) => {
    return {
        posts: Selectors.getPosts(state),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getPosts: () =>
            dispatch(Actions.postsGetAttempt()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
