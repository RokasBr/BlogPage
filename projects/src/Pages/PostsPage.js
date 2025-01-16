import React, {useEffect, useState} from 'react';
import SinglePost from "../components/SinglePost";

const PostsPage = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setPosts(data);
            })
    }, []);

    return (
        <div>
            {posts.map(x => <SinglePost key = {x.id} post={x} />)}
        </div>
    );
};

export default PostsPage;