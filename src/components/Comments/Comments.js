import {useEffect, useState} from "react";
import Comment from "../Comment/Comment";

const Comments = () => {
    const [comments, setComments] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then(value => setComments(value))
    }, [])
    return (
        <div>
            {comments.map(comment => <Comment key={comment.id} postId={comment.postId} id={comment.id} name={comment.name} email={comment.email} body={comment.body}/> )}
        </div>
    );
};

export default Comments;
