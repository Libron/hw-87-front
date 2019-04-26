import axios from '../../axios-api';
import {push} from 'connected-react-router';

export const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';

export const CREATE_POST_REQUEST = 'CREATE_POST_REQUEST';
export const CREATE_POST_SUCCESS = 'CREATE_POST_SUCCESS';
export const CREATE_POST_FAILURE = 'CREATE_POST_FAILURE';

const fetchPostsRequest = () => ({type: FETCH_POSTS_REQUEST});
const fetchPostsSuccess = (posts) => ({type: FETCH_POSTS_SUCCESS, posts});
const fetchPostsFailure = (error) => ({type: FETCH_POSTS_SUCCESS, error});


const createPostRequest = () => ({type: CREATE_POST_REQUEST});
const createPostSuccess = (post) => ({type: CREATE_POST_SUCCESS, post});
const createPostFailure = (error) => ({type: CREATE_POST_FAILURE, error});


export const fetchPosts = () => {
    return (dispatch) => {
        dispatch(fetchPostsRequest());

        return axios.get('/posts').then(
            response => {
                dispatch(fetchPostsSuccess(response.data));
                dispatch(push('/'));
            },
            error => {
                if (error.response) {
                    dispatch(fetchPostsFailure(error.response.data))
                } else {
                    dispatch(fetchPostsFailure({global: 'No connection'}))
                }
            }
        )
    }
};

export const createPost = postData => {
    return (dispatch, getState) => {
        const token = getState().users.user.token;
        const config = {headers: {'Authorization': token}};
        dispatch(createPostRequest());

        return axios.post('/posts', postData, config).then(
            response =>{
                dispatch(createPostSuccess(response.data));
                dispatch(push('/'));
            },
            error => {
                if (error.response) {
                    dispatch(createPostFailure(error.response.data))
                } else {
                    dispatch(createPostFailure({global: 'No connection'}))
                }
            }
        );
    }
};