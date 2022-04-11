const Post = ({post}) => {
    const {userId, id, title, body} = post;
    return (
        <div>
            <h4>userId:{userId}</h4>
            <h4>id:{id}</h4>
            <b>title:{title}</b>
            <p>body:{body}</p>
        </div>
    );
};

export default Post;
