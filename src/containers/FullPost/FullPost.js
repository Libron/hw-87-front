import React, {Component, Fragment} from 'react';
import {fetchPost} from "../../store/actions/postsActions";
import connect from "react-redux/es/connect/connect";
import ImageThumbnail from "../../components/UI/ImageThumbnail/ImageThumbnail";

import './FullPost.css';
import {Badge} from "reactstrap";
import {createComment, fetchComments} from "../../store/actions/commentsActions";
import Comments from "../../components/Comments/Comments";
import CommentForm from "../../components/CommentForm/CommentForm";
import Spinner from "../../components/UI/Spinner/Spinner";

class FullPost extends Component {
    componentDidMount() {
        this.props.fetchPost(this.props.match.params.id);
        this.props.fetchComments(this.props.match.params.id)
    };

    render() {
        if (this.props.loading || !this.props.post) {
            return <Spinner />
        }

        console.log(this.props.loading);

        return (
            <Fragment>
                <div className="Post clearfix">
                    <ImageThumbnail image={this.props.post.image || null} />
                    <h2 className="Title">{this.props.post.title}</h2>
                    <p className="Author">Author: <Badge color="dark" >{this.props.post.user.username}</Badge></p>

                    <p className="Description">{this.props.post.description}</p>
                </div>
                {this.props.user ? <CommentForm submit={this.props.createComment} postId={this.props.match.params.id} /> : null}
                {this.props.comments.length !== 0 ? <Comments comments={this.props.comments} /> : <h3 className="NoComment">No comments for this post. Be the first !</h3>}
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    post: state.posts.post,
    comments: state.comments.comments,
    user: state.users.user,
    loading: state.posts.loading
});

const mapDispatchToProps = dispatch => ({
    fetchPost: (id) => dispatch(fetchPost(id)),
    fetchComments: (postId) => dispatch(fetchComments(postId)),
    createComment: (commentData) => dispatch(createComment(commentData))
});

export default connect(mapStateToProps, mapDispatchToProps)(FullPost);