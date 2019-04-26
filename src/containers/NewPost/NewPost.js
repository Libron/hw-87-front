import React, {Component} from 'react';
import PostForm from "../../components/PostForm/PostForm";
import connect from "react-redux/es/connect/connect";
import {createPost} from "../../store/actions/postsActions";

class NewPost extends Component {
    componentDidMount(){
        if (!this.props.user) {
            this.props.history.push('/login');
        }
    }

    render() {
        return (
            <div className="NewPost">
                <h2>Create New Post</h2>
                <PostForm submit={this.props.createPost} />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    user: state.users.user
});

const mapDispatchToProps = dispatch => ({
    createPost: (postData) => dispatch(createPost(postData))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewPost);