import React, {Component} from 'react';
import './App.css';
import {connect} from "react-redux";
import {Route, Switch, withRouter} from "react-router";
import Toolbar from "./components/UI/Toolbar/Toolbar";
import {Container} from "reactstrap";
import Register from "./containers/Register/Register";
import Login from "./containers/Login/Login";
import {logoutUser} from "./store/actions/usersActions";
import PostsPage from "./containers/PostsPage/PostsPage";
import NewPost from "./containers/NewPost/NewPost";
import FullPost from "./containers/FullPost/FullPost";

class App extends Component {
    render() {
        return (
            <div className="App">
                <header>
                    <Toolbar user={this.props.user} logout={this.props.logoutUser}/>
                </header>
                <Container style={{marginTop: '20px'}}>
                    <Switch>
                        <Route path="/" exact component={PostsPage}/>
                        <Route path="/posts" exact component={PostsPage}/>
                        <Route path="/posts/new" exact component={NewPost}/>
                        <Route path="/posts/:id" exact component={FullPost}/>
                        <Route path="/register" exact component={Register}/>
                        <Route path="/login" exact component={Login}/>
                    </Switch>
                </Container>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    user: state.users.user
});

const mapDispatchToProps = dispatch => ({
    logoutUser: () => dispatch(logoutUser())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));