import React from 'react';
import {Badge, ListGroup, ListGroupItem} from "reactstrap";

import './Comments.css';

const Comments = ({comments}) => {
    return (
        <div className="Comments">
            <h4 className="Title">Comments <Badge color="light">{comments.length}</Badge>:</h4>
            <ListGroup >
                {comments.map(item => (
                    <ListGroupItem  className="Item" key={item._id}>
                        <p><Badge className="Author" color="warning">{item.user.username}</Badge> said:</p>
                        <p className="Text">{item.text}</p>
                    </ListGroupItem>
                ))}
            </ListGroup>
        </div>
    );
};

export default Comments;