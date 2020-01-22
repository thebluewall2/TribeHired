import { fork } from 'redux-saga/effects';

import { watchGetPosts } from './getPosts';

export default () => {
    function* rootSaga() {
        yield fork(watchGetPosts);
    }

    return {
        rootSaga
    };
};
