import React from 'react';


export function allPosts() {
    const response = fetch('http://localhost:8080/api/posts');
    const myJson = response.json();
    const posts = JSON.stringify(myJson);
    console.log(posts);
    return <div>
        <p>posts</p>
    </div>
}

export function postLL(){
    return <div><p>posts</p></div>
}