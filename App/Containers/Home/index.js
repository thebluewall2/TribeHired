import React, { PureComponent } from 'react';
import { FlatList, View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import Actions from '../../Redux/Actions';
import Selectors from '../../Redux/Selectors';

import styles from './styles';

class Posts extends PureComponent {
    componentDidMount() {
        const { getPosts } = this.props;

        getPosts();
    }

    _onPostClicked = (id) => {
        console.log(id);
        console.log(this.props);
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
                style={styles.postCard}
            >
                <Text
                    style={styles.postText}
                >
                    {item.title}
                </Text>
            </TouchableOpacity>
        );
    }

    render() {
        const { posts } = this.props;

        return (
            <FlatList
                data={posts}
                renderItem={this._renderPost}
                ItemSeparatorComponent={this._renderSeparator}
                keyExtractor={item => item.id.toString()}
                style={styles.mainContainer}
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
