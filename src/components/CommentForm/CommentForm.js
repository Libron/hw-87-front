import React, {Component} from 'react';
import {Button, Form, FormGroup, Input, Label} from "reactstrap";

import './CommentForm.css';

class CommentForm extends Component {
    state = {
        text: ''
    };

    submitFormHandler = event => {
        event.preventDefault();
        this.props.submit({...this.state, post: this.props.postId});
    };

    inputChangeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };
    render() {
        return (
            <Form onSubmit={this.submitFormHandler} className="CommentForm">
                <FormGroup>
                    <Label for="text"><h4>Write your comment</h4></Label>
                        <Input
                            type="textarea"
                            name="text" id="text"
                            placeholder="Enter text"
                            value={this.state.text}
                            onChange={this.inputChangeHandler}
                        />
                </FormGroup>
                <FormGroup>
                    <Button type="submit" color="success" disabled={!!(!this.state.text)}>Comment</Button>
                </FormGroup>
            </Form>
        );
    }
}

export default CommentForm;