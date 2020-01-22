import { take, put, call } from 'redux-saga/effects';

import Toast from 'react-native-simple-toast';

import Actions from '../../Redux/Actions';
import Types from '../../Redux/Types';

import NavActions from '../../Navigation/NavActions';

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
        } else {
            Toast.show(response.problem);

            NavActions.navBack();
        }
    } catch (error) {
        console.log(error);
    }
}
