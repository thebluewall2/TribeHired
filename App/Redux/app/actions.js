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

export default {
    postsGetAttempt,
    postsGetSuccess,

    postsGetDetailsAttempt,
    postsGetDetailsSuccess,
};
