import Types from './types';

const postsGetAttempt = () => {
    return {
        type: Types.POSTS_GET_ATTEMPT,
    };
};

const postsGetSuccess = (posts) => {
    return {
        type: Types.POSTS_GET_SUCCESS,
        posts,
    };
};

const postsGetDetailsAttempt = (postId) => {
    return {
        type: Types.POSTS_GET_DETAILS_ATTEMPT,
        postId,
    };
};

const postsGetDetailsSuccess = (postDetails) => {
    return {
        type: Types.POSTS_GET_DETAILS_SUCCESS,
        postDetails,
    };
};

const postsGetCommentsAttempt = (postId) => {
    return {
        type: Types.POSTS_GET_COMMENTS_ATTEMPT,
        postId,
    };
};

const postsGetCommentsSuccess = (comments) => {
    return {
        type: Types.POSTS_GET_COMMENTS_SUCCESS,
        comments
    };
};

export default {
    postsGetAttempt,
    postsGetSuccess,

    postsGetDetailsAttempt,
    postsGetDetailsSuccess,

    postsGetCommentsAttempt,
    postsGetCommentsSuccess,
};
