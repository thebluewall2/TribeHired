const getPostsIsLoading = (state) => state.loading;
const getPosts = (state) => state.posts;

const getPostDetailsIsLoading = (state) => state.loadingPostDetails;
const getPostDetails = (state) => state.postDetails;

const getPostCommentsIsLoading = (state) => state.loadingComments;
const getPostComments = (state) => state.comments;

export default {
    getPostsIsLoading,
    getPosts,

    getPostDetailsIsLoading,
    getPostDetails,

    getPostCommentsIsLoading,
    getPostComments,
};
