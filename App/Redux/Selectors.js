import app from './app/selectors';

const getPostsIsLoading = (state) => app.getPostsIsLoading(state.app);
const getPosts = (state) => app.getPosts(state.app);

const getPostDetailsIsLoading = (state) => app.getPostDetailsIsLoading(state.app);
const getPostDetails = (state) => app.getPostDetails(state.app);

export default {
    getPostsIsLoading,
    getPosts,

    getPostDetailsIsLoading,
    getPostDetails,
};
