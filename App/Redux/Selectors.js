import app from './app/selectors';
import ui from './ui/selectors';

const getPostsIsLoading = (state) => app.getPostsIsLoading(state.app);
const getPosts = (state) => app.getPosts(state.app);

const getPostDetailsIsLoading = (state) => app.getPostDetailsIsLoading(state.app);
const getPostDetails = (state) => app.getPostDetails(state.app);

const getPostCommentsIsLoading = (state) => app.getPostCommentsIsLoading(state.app);
const getPostComments = (state) => app.getPostComments(state.app);

const getUiCommentsSearchText = (state) => ui.getCommentsSearchText(state.ui);

export default {
    getPostsIsLoading,
    getPosts,

    getPostDetailsIsLoading,
    getPostDetails,

    getPostCommentsIsLoading,
    getPostComments,

    getUiCommentsSearchText,
};
