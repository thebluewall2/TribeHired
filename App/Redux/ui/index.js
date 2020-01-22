import { createReducer } from 'reduxsauce';

import Reducers from './reducers';
import Types from './types';

export default {
    reducer: createReducer(Reducers.INITIAL_STATE, {
        [Types.UI_SET_COMMENTS_SEARCH_TEXT]: Reducers.setCommentsSearchText,
        [Types.UI_CLEAR_COMMENTS_SEARCH_TEXT]: Reducers.clearCommentsSearchText,
    })
};
