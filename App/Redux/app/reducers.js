import Immutable from 'seamless-immutable';

const INITIAL_STATE = Immutable({
    loading: false,
    posts: [],
    loadingPostDetails: false,
    postDetails: {},
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

export default {
    INITIAL_STATE,

    getAttempt,
    getSuccess,

    getDetailsAttempt,
    getDetailsSuccess,
};
