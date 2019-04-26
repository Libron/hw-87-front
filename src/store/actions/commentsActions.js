import axios from '../../axios-api';

export const FETCH_COMMENTS_REQUEST = 'FETCH_COMMENTS_REQUEST';
export const FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS';
export const FETCH_COMMENTS_FAILURE = 'FETCH_COMMENTS_FAILURE';

export const CREATE_COMMENT_REQUEST = 'CREATE_COMMENT_REQUEST';
export const CREATE_COMMENT_SUCCESS = 'CREATE_COMMENT_SUCCESS';
export const CREATE_COMMENT_FAILURE = 'CREATE_COMMENT_FAILURE';

const fetchCommentsRequest = () => ({type: FETCH_COMMENTS_REQUEST});
const fetchCommentsSuccess = (comments) => ({type: FETCH_COMMENTS_SUCCESS, comments});
const fetchCommentsFailure = (error) => ({type: FETCH_COMMENTS_FAILURE, error});

const createCommentRequest = () => ({type: CREATE_COMMENT_REQUEST});
const createCommentSuccess = (comment) => ({type: CREATE_COMMENT_SUCCESS, comment});
const createCommentFailure = (error) => ({type: CREATE_COMMENT_FAILURE, error});

export const fetchComments = (postId) => {
    return (dispatch) => {
        dispatch(fetchCommentsRequest());
        const queryParams = '?postId=' + postId;
        return axios.get('/comments' + queryParams).then(
            response => {
                dispatch(fetchCommentsSuccess(response.data));
            },
            error => {
                if (error.response) {
                    dispatch(fetchCommentsFailure(error.response.data))
                } else {
                    dispatch(fetchCommentsFailure({global: 'No connection'}))
                }
            }
        )
    }
};

export const createComment = commentData => {
    return (dispatch, getState) => {
        const token = getState().users.user.token;
        const config = {headers: {'Authorization': token}};

        dispatch(createCommentRequest());
        return axios.post('/comments', commentData,config).then(
            (response) => dispatch(createCommentSuccess(response.data)),
            error => {
                if (error.response) {
                    dispatch(createCommentFailure(error.response.data))
                } else {
                    dispatch(createCommentFailure({global: 'No connection'}))
                }
            }
        )
    }
};