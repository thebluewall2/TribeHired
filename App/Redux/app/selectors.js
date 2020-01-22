const getPostsIsLoading = (state) => state.loading;
const getPosts = (state) => state.posts;

const getPostDetailsIsLoading = (state) => state.loadingPostDetails;
const getPostDetails = (state) => state.postDetails;

export default {
    getPostsIsLoading,
    getPosts,

    getPostDetailsIsLoading,
    getPostDetails,
};
