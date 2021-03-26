import React from 'react'
import { useState, useEffect } from 'react';




export default function Postform() {

    const [post,setPost] = useState({title:'',body:''})

    

    return (
        <div>
            <h1>Add Post</h1>
            <form>
                <div>
                    <label>  Title: </label>
                    <br />
                    <input type="text" name="title" value={post.title} onChange={(e)=>{setPost({title:e.target.value,body:post.body})}}/>
                </div>
                <br />
                <div>
                    <label>  Body: </label>
                    <br />
                    <textarea name="body" value={post.body} onChange={(e)=>{setPost({title:post.title,body:e.target.value})}}/>
                </div>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
