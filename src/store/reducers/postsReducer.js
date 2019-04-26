import {
    FETCH_POST_FAILURE, FETCH_POST_REQUEST,
    FETCH_POST_SUCCESS,
    FETCH_POSTS_FAILURE, FETCH_POSTS_REQUEST,
    FETCH_POSTS_SUCCESS
} from "../actions/postsActions";

const initialState = {
    posts: [],
    post: null,
    error: null,
    loading: false
};

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POSTS_REQUEST:
        case FETCH_POST_REQUEST:
            return {...state, loading: true};
        case FETCH_POSTS_SUCCESS:
            return {...state, posts: action.posts, loading: false};
        case FETCH_POST_SUCCESS:
            return {...state, post: action.post, loading: false};
        case FETCH_POSTS_FAILURE:
        case FETCH_POST_FAILURE:
            return {...state, error: action.error, loading: false};

        default:
            return state;
    }
};

export default postsReducer;
