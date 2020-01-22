import { fork } from 'redux-saga/effects';

import { watchGetPosts } from './getPosts';
import { watchGetPostDetails } from './getPostDetails';

export default (api) => {
    function* rootSaga() {
        yield fork(watchGetPosts, api);
        yield fork(watchGetPostDetails, api);
    }

    return {
        rootSaga
    };
};
