function Post(posts){
    for(post of posts){
    }

    return (
        <ol>
            <li>
            <p>{post.sender.firstName.toString()} {post.sender.lastName.toString()}</p>
            <img src = {post.sender.profileImage}/>

            <p>{post.receiver.firstName.toString()} {post.sender.lastName.toString()}</p>
            <img src = {post.receiver.profileImage}/>
            
            <p>{post.id.toString()}</p>
            <p>{post.message.toString()}</p>
            </li>
        </ol>
        );
}