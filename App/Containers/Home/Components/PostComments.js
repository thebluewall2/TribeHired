import React, { PureComponent } from 'react';
import { FlatList, Text } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Actions from '../../../Redux/Actions';
import Selectors from '../../../Redux/Selectors';

class PostComments extends PureComponent {
    componentDidMount() {
        const { postId, getComments } = this.props;

        getComments(postId);
    }

    render() {
        return (
            false
        );
    }
}

const mapStateToProps = (state) => {
    return {

    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getComments: (postId) =>
            dispatch(Actions.postsGetCommentsAttempt(postId)),
    };
};

PostComments.propTypes = {
    postId: PropTypes.number.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(PostComments);
