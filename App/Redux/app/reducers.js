import Immutable from 'seamless-immutable';

const INITIAL_STATE = Immutable({
    loading: false,
    posts: [],
});

const getAttempt = (state) => state.merge({
    loading: true,
});

const getSuccess = (state, action) => state.merge({
    loading: false,
    posts: action.posts
});

export default {
    INITIAL_STATE,

    getAttempt,
    getSuccess,
};
