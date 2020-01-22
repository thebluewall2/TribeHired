import Immutable from 'seamless-immutable';

const INITIAL_STATE = Immutable({
    commentsSearchText: '',
});

const setCommentsSearchText = (state, action) => state.merge({
    commentsSearchText: action.commentsSearchText,
});

const clearCommentsSearchText = (state) => state.merge({
    commentsSearchText: '',
});

export default {
    INITIAL_STATE,

    setCommentsSearchText,
    clearCommentsSearchText,
}