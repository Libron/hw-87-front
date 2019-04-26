import {
    FETCH_POST_FAILURE,
    FETCH_POST_SUCCESS,
    FETCH_POSTS_FAILURE,
    FETCH_POSTS_SUCCESS
} from "../actions/postsActions";

const initialState = {
    posts: [],
    post: null,
    error: null
};

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POSTS_SUCCESS:
            return {...state, posts: action.posts};
        case FETCH_POST_SUCCESS:
            return {...state, post: action.post};
        case FETCH_POSTS_FAILURE:
        case FETCH_POST_FAILURE:
            return {...state, error: action.error};

        default:
            return state;
    }
};

export default postsReducer;
