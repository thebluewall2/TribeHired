import apisauce from 'apisauce';

const create = (baseURL = 'https://jsonplaceholder.typicode.com') => {
    const api = apisauce.create({
        baseURL,
        timeout: 10000,
    });

    const getPosts = () =>
        api.get('/posts');

    const getPostDetails = (postId) =>
        api.get(`/posts/${postId}`);

    const getPostComments = (postId) =>
        api.get(`/comments?postId=${postId}`);

    return {
        getPosts,
        getPostDetails,
        getPostComments,
    };
};

export default {
    create
};
