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

export default {
    postsGetAttempt,
    postsGetSuccess,
};
