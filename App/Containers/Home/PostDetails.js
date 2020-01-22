import React, { PureComponent } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
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

    render() {
        const { postDetailsLoading, postDetails } = this.props;

        if (_.isEmpty(postDetails)) return this._renderLoadingScreen();

        const { title, body } = postDetails;

        return (
            <View style={styles.mainContainer}>
                <View style={styles.postTitleAndBodyContainer}>
                    <Text style={styles.postDetailsTitle}>
                        {title}
                    </Text>

                    <Text style={styles.postDetailsBody}>
                        {body}
                    </Text>
                </View>

                <PostComments postId={postDetails.id} />
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        postDetailsLoading: Selectors.getPostDetailsIsLoading(state),
        postDetails: Selectors.getPostDetails(state),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostDetails);
