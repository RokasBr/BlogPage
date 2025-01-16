import React from 'react';
import {Link, useNavigate, useLocation} from "react-router-dom"

const SinglePost = ({post, username, secret, remove}) => {

    const nav = useNavigate()
    const location = useLocation()

    function deletePost() {
        const item = {
            secretKey: secret,
            id: post.id
        }

        const options = {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(item)
        }
        
        fetch("http://167.99.138.67:1111/deletepost", options)
            .then(res => res.json())
            .then(response => {
                console.log(response)
                if (response.success) {
                    if(location.pathname === "/") {
                        remove(item.id)
                    } else {
                        nav("/")
                    }
                }
            })
    }
    function updatePost() {
        const title = prompt("Enter new title:", post.title);
        if (!title) return;

        const image = prompt("Enter new image URL:", post.image);
        if (!image) return;

        const description = prompt("Enter new description:", post.description);
        if (!description) return;

        const item = {
            secretKey: secret,
            id: post.id,
            title: title,
            image: image,
            description: description
        };

        const options = {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(item)
        };

        fetch("http://167.99.138.67:1111/updatepost", options)
            .then(res => res.json())
            .then(response => {
                console.log('response: ' + response)
                if (response.success) {
                    alert("Post updated successfully!");
                    // Optionally reload or update locally if needed
                }
            });
    }
//a
    return (
        <div className="border p20 post">
            <img src={post.image} alt=""/>

            <Link to={`/singlePost/${post.username}/${post.id}`}>
                <h4>{post.title}</h4>
            </Link>

            <Link to={`/userPosts/${post.username}`}>
                <b>{post.username}</b>
            </Link>

            {post.username === username &&

                <div className="mt3">
                    <button onClick={deletePost}>Delete</button>
                    <button onClick={updatePost}>Update</button>
                </div>
            }
        </div>
    );
};

export default SinglePost;