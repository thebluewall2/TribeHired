import { fork } from 'redux-saga/effects';

import { watchGetPosts } from './getPosts';
import { watchGetPostDetails } from './getPostDetails';
import { watchGetComments } from './getComments';

export default (api) => {
    function* rootSaga() {
        yield fork(watchGetPosts, api);
        yield fork(watchGetPostDetails, api);
        yield fork(watchGetComments, api);
    }

    return {
        rootSaga
    };
};
