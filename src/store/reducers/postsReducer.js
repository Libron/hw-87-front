import {FETCH_POSTS_FAILURE, FETCH_POSTS_SUCCESS} from "../actions/postsActions";

const initialState = {
    posts: [],
    error: null
};

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POSTS_SUCCESS:
            return {...state, posts: action.posts};
        case FETCH_POSTS_FAILURE:
            return {...state, error: action.error};
        default:
            return state;
    }
};

export default postsReducer;
