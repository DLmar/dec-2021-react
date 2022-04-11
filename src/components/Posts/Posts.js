import React, {useEffect, useState} from 'react';

import {postService} from "../../services";

import Post from "../Post/Post";
import posts_style from "./Posts.module.css";

const Posts = ({userId}) => {
    const [posts, setPosts] = useState(null);
    useEffect(() => {
        postService.getPostsById(userId).then(value => setPosts(value));
    }, [userId])
    return (
        <div className={posts_style.posts}>
            {posts && posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export {Posts};
