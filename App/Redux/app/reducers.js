import Immutable from 'seamless-immutable';

const INITIAL_STATE = Immutable({
    loading: false,
    posts: [],
    loadingPostDetails: false,
    postDetails: {},
    loadingComments: false,
    comments: [],
});

const getAttempt = (state) => state.merge({
    loading: true,
});

const getSuccess = (state, action) => state.merge({
    loading: false,
    posts: action.posts
});

const getDetailsAttempt = (state) => state.merge({
    loadingPostDetails: true
});

const getDetailsSuccess = (state, action) => state.merge({
    loadingPostDetails: false,
    postDetails: action.postDetails,
});

const getCommentsAttempt = (state) => state.merge({
    loadingComments: true,
});

const getCommentsSuccess = (state, action) => state.merge({
    loadingComments: false,
    comments: action.comments,
});

const clearPostDetails = (state) => state.merge({
    postDetails: {},
    comments: [],
});

export default {
    INITIAL_STATE,

    getAttempt,
    getSuccess,

    getDetailsAttempt,
    getDetailsSuccess,

    getCommentsAttempt,
    getCommentsSuccess,

    clearPostDetails,
};
