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

    return {
        getPosts,
        getPostDetails,
    };
};

export default {
    create
};
