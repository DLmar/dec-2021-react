import React, {useEffect, useState} from 'react';
import {postService} from "../../services";
import Post from "../Post/Post";

const Posts = ({userId}) => {
    const [posts, setPosts] = useState(null);
    useEffect(() => {
        postService.getPostsById(userId).then(value => setPosts(value));
    }, [userId])
    return (
        <div>
            {posts && posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export default Posts;
