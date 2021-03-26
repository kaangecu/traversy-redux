import React from 'react'
import { useState, useEffect } from 'react';

export default function Posts() {

    const [posts,setPosts] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(data => setPosts(data))

      }, []);

    return (
        <div>
            <h1>Posts</h1>
            {posts.map((post)=>(
                <div key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                    </div>
            ))}
        </div>
    )
}
