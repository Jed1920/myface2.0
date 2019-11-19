import React, {useState, useEffect} from 'react';
import {Post} from './Post'

async function fetchAPI(){
    const response = await fetch('http://localhost:8080/api/posts?page=1') 
    return await response.json();
}

   
export function Posts(){
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchAPI()
            .then((json) => setPosts(json.items));
        fetchAPI()
            .then((json) => console.log(json.items));
        } , []);

    if (posts.length === 0){
        return ("Hold on")
        
    } else {  
        for(post of posts)  
        <Post props = {post}/>
   
        return (
            <ol>
                <li>
                <p>{post.sender.firstName.toString()} {post.sender.lastName.toString()}</p>
                <p>{post.receiver.firstName.toString()} {post.sender.lastName.toString()}</p>
                <p>{post.id.toString()}</p>
                <p>{post.message.toString()}</p>
                </li>
            </ol>
        );
    }
}


