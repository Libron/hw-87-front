import React, {Component, Fragment} from 'react';
import connect from "react-redux/es/connect/connect";
import {fetchPosts} from "../../store/actions/postsActions";
import {Badge, ListGroup, ListGroupItem} from "reactstrap";
import ImageThumbnail from "../../components/UI/ImageThumbnail/ImageThumbnail";
import Moment from "react-moment";
import {NavLink as RouterNavLink} from 'react-router-dom';

import './PostsPage.css';
import Spinner from "../../components/UI/Spinner/Spinner";

class PostsPage extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        if (this.props.loading || !this.props.posts) {
            return  <Spinner />
        }

        return (
            <Fragment>
                <h1>Posts <Badge color="info">{this.props.posts.length}</Badge></h1>
                <ListGroup className="Posts">
                    {this.props.posts.map(post => (
                        <ListGroupItem  className="Item" tag={RouterNavLink} to={'/posts/' + post._id} key={post._id}>
                            <ImageThumbnail image={post.image} />
                            <p className="CommentsCount"><i>comments: </i><b>{post.count}</b></p>
                            <p><i><Moment format="DD-MM-YYYY hh:mm a">{post.datetime}</Moment></i><b> by </b><Badge className="Author" color="dark">{post.user.username}</Badge></p>
                            <p>{post.title}</p>
                        </ListGroupItem>
                    ))}
                </ListGroup>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    posts: state.posts.posts,
    loading: state.posts.loading
});

const mapDispatchToProps = dispatch => ({
    fetchPosts: () => dispatch(fetchPosts())
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsPage);