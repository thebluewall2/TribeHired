import React, { PureComponent } from 'react';
import { FlatList, View, Text, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import _ from 'underscore';

import Actions from '../../Redux/Actions';
import Selectors from '../../Redux/Selectors';

import PostComments from './Components/PostComments';

import styles from './styles';

class PostDetails extends PureComponent {
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
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        postDetailsLoading: Selectors.getPostDetailsIsLoading(state),
        postDetails: Selectors.getPostDetails(state),
        postCommentsLoading: Selectors.getPostCommentsIsLoading(state),
        postComments: Selectors.getPostComments(state),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getPostComments: (postId) =>
            dispatch(Actions.postsGetCommentsAttempt(postId)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostDetails);
