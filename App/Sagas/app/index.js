import { fork } from 'redux-saga/effects';

import { watchGetPosts } from './getPosts';

export default (api) => {
    function* rootSaga() {
        yield fork(watchGetPosts, api);
    }

    return {
        rootSaga
    };
};
