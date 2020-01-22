import React, { PureComponent } from 'react';
import { FlatList, View, Text, ActivityIndicator, TextInput } from 'react-native';
import { connect } from 'react-redux';
import _ from 'underscore';

import Actions from '../../Redux/Actions';
import Selectors from '../../Redux/Selectors';

import PostComments from './Components/PostComments';

import styles from './styles';

class PostDetails extends PureComponent {
    componentWillUnmount() {
        const { clearPostDetails, clearSearchText } = this.props;

        clearPostDetails();
        clearSearchText();
    }

    _onSearch = (text) => {
        const { setSearchText } = this.props;

        setSearchText(text);
    }

    _renderLoadingScreen = () => {
        return (
            <View style={styles.loadingScreen}>
                <ActivityIndicator />
            </View>
        );
    }

    _renderSeparator = () => {
        return <View style={{ height: 1, backgroundColor: 'gray' }} />;
    }

    _renderPostDetails = () => {
        const { title, body } = this.props.postDetails;

        return (
            <View style={styles.postTitleAndBodyContainer}>
                <Text style={styles.postDetailsTitle}>
                    {title}
                </Text>

                <Text style={styles.postDetailsBody}>
                    {body}
                </Text>

                <TextInput
                    style={styles.searchBar}
                    placeholder='Search comments'
                    onChangeText={this._onSearch}
                    autoCorrect={false}
                />
            </View>
        )
    }

    _renderComment = ({ item }) => {
        return <PostComments comment={item} />;
    };

    render() {
        const { postDetailsLoading, postDetails, postComments, postCommentsLoading, getPostComments } = this.props;

        if (postDetailsLoading) return this._renderLoadingScreen();

        return (
            <FlatList
                refreshing={postCommentsLoading}
                onRefresh={() => getPostComments(postDetails.id)}
                data={postComments}
                renderItem={this._renderComment}
                ListHeaderComponent={this._renderPostDetails}
                ItemSeparatorComponent={this._renderSeparator}
                contentContainerStyle={{ marginHorizontal: 20 }}
                keyExtractor={item => item.id.toString()}
            />
        );
    }
}

const mapStateToProps = (state) => {
    let postComments = Selectors.getPostComments(state);
    const filter = Selectors.getUiCommentsSearchText(state).toUpperCase();

    if (filter.length) {
        postComments = postComments.filter(comment => {
            const { name, email, body } = comment;

            const commentData = `${name.toUpperCase()} ${email.toUpperCase()} ${body.toUpperCase()}`;

            return commentData.indexOf(filter) > -1;
        });
    }

    return {
        postDetailsLoading: Selectors.getPostDetailsIsLoading(state),
        postDetails: Selectors.getPostDetails(state),
        postCommentsLoading: Selectors.getPostCommentsIsLoading(state),
        postComments,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getPostComments: (postId) =>
            dispatch(Actions.postsGetCommentsAttempt(postId)),
        setSearchText: (text) =>
            dispatch(Actions.uiSetCommentsSearchText(text)),
        clearPostDetails: () =>
            dispatch(Actions.postsClearPostDetails()),
        clearSearchText: () =>
            dispatch(Actions.uiClearCommentsSearchText()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostDetails);
