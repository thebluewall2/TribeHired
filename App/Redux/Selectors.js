import app from './app/selectors';

const getPosts = (state) => app.getPosts(state.app);

export default {
    getPosts,
};
