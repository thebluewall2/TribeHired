import { fork } from 'redux-saga/effects';

import APIs from '../Config/APIs';
import PostsAPI from '../Services/PostsApi';

import app from './app';

const postsApi = PostsAPI.create(APIs.postsApi);

export default function* root() {
    yield fork(app(postsApi).rootSaga);
}
