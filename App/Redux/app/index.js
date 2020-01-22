import { createReducer } from 'reduxsauce';

import Reducers from './reducers';
import Types from './types';

export default {
    reducer: createReducer(Reducers.INITIAL_STATE, {
        [Types.POSTS_GET_ATTEMPT]: Reducers.getAttempt,
        [Types.POSTS_GET_SUCCESS]: Reducers.getSuccess,

        [Types.POSTS_GET_DETAILS_ATTEMPT]: Reducers.getDetailsAttempt,
        [Types.POSTS_GET_DETAILS_SUCCESS]: Reducers.getDetailsSuccess,
    })
};
