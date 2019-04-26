import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import {fetchPosts} from "../../store/actions/postsActions";
import {ListGroup, ListGroupItem} from "reactstrap";
import ImageThumbnail from "../../components/UI/ImageThumbnail/ImageThumbnail";
import Moment from "react-moment";

class PostsPage extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        if (!this.props.posts) {
            return <div>Loading...</div>
        }

        console.log(this.props.posts);
        return (
            <ListGroup className="Posts">
                {this.props.posts.map(post => (
                    <ListGroupItem key={post._id}>
                        <ImageThumbnail image={post.image} />
                        <p>{post.title}</p>
                        <span><Moment format="DD-MM-YYYY HH:MM">{post.datetime}</Moment></span> by <span>{post.author.username}</span>
                        </ListGroupItem>
                ))}
            </ListGroup>
        );
    }
}

const mapStateToProps = state => ({
    posts: state.posts.posts
});

const mapDispatchToProps = dispatch => ({
    fetchPosts: () => dispatch(fetchPosts())
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsPage);