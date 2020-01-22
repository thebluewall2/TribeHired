import { take, put, call } from 'redux-saga/effects';

import Toast from 'react-native-simple-toast';

import Actions from '../../Redux/Actions';
import Types from '../../Redux/Types';

export function* watchGetPosts(api) {
  while (true) {
    yield take(Types.POSTS_GET_ATTEMPT);
    yield call(handleGetPosts, api);
  }
}

export function* handleGetPosts(api) {
  try {
    const response = yield call(api.getPosts);

    if (response.ok && response.data) {
      yield put(Actions.postsGetSuccess(response.data));
    } else {
      Toast.show(response.problem);
    }
  } catch (error) {
    console.log(error);
  }
}