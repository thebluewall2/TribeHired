import Types from './types';

const uiSetCommentsSearchText = (commentsSearchText) => {
    return {
        type: Types.UI_SET_COMMENTS_SEARCH_TEXT,
        commentsSearchText,
    };
};

const uiClearCommentsSearchText = () => {
    return {
        type: Types.UI_CLEAR_COMMENTS_SEARCH_TEXT
    };
};

export default {
    uiSetCommentsSearchText,
    uiClearCommentsSearchText,
};
