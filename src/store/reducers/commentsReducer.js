import {
    CREATE_COMMENT_FAILURE,
    CREATE_COMMENT_SUCCESS,
    FETCH_COMMENTS_FAILURE,
    FETCH_COMMENTS_SUCCESS
} from "../actions/commentsActions";
import {loadFromLocalStorage} from "../../index";

const initialState = {
    comments: [],
    error: null
};

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_COMMENTS_SUCCESS:
            return {...state, comments: action.comments};
        case FETCH_COMMENTS_FAILURE:
        case CREATE_COMMENT_FAILURE:
            return {...state, error: action.error};
        case CREATE_COMMENT_SUCCESS:
            const comments = [...state.comments];
            const comment = action.comment;
            comment.user = {username: loadFromLocalStorage().users.user.username};
            console.log(comment);
            comments.unshift(comment);
            return {...state, comments};
        default:
            return state;
    }
};

export default postsReducer;
