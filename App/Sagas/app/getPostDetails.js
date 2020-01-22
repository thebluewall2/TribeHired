import { take, put, call } from 'redux-saga/effects';

import Actions from '../../Redux/Actions';
import Types from '../../Redux/Types';

export function* watchGetPostDetails(api) {
    while (true) {
        const { postId } = yield take(Types.POSTS_GET_DETAILS_ATTEMPT);
        yield call(handleGetPostDetails, api, postId);
    }
}

export function* handleGetPostDetails(api, postId) {
    try {
        const response = yield call(api.getPostDetails, postId);

        if (response.ok && response.data) {
            yield put(Actions.postsGetDetailsSuccess(response.data));
        }
    } catch (error) {
        console.log(error);
    }
}
