import { take, call, put } from 'redux-saga/effects';

import Actions from '../../Redux/Actions';
import Types from '../../Redux/Types';

export function* watchGetComments(api) {
    while (true) {
        const { postId } = yield take(Types.POSTS_GET_COMMENTS_ATTEMPT);
        yield call(handleGetComments, api, postId);
    }
}

export function* handleGetComments(api, postId) {
    try {
        const response = yield call(api.getPostComments, postId);

        console.log(response);
    } catch (error) {
        console.log(error)
    }
}