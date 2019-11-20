import React, {useState,useEffect} from 'react';
import './Post.scss';
import {
    BrowserRouter as 
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";

export function AllPosts(){
  const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/api/posts?page=1')
            .then(resp => resp.json())
            .then(json => setPosts(json.items));
        } , []);

        const allPosts = posts.map(post => <Post data={post}/>);
    return <ol className="postList">
        {allPosts}
    </ol>
}

function Post(props){
    let match = useRouteMatch();
    const post = props.data;

    const [isOpen, setIsOpen] = useState(1);

    if (isOpen% 2 === 0 ) {
        return (
            <li className="postListItem" onClick={() => setIsOpen(isOpen + 1)}>
            <MessageId msgId = {post.id}/>
            <SenderProfileImage from = {post.sender}/>
            <SenderName from = {post.sender}/>
            <ReceiverProfileImage to = {post.receiver}/>
            <ReceiverName to = {post.receiver}/>
            <Link to ={`${match.url}/${post.id}`}>
                <Message msg = {post.message}/>
                <MessageImage msgImg = {post.image}/>
            </Link>
            </li>
        );
    }

    return (
            <li className="postListItem" onClick={() => setIsOpen(isOpen + 1)}>
                <SenderProfileImage from = {post.sender}/>
                <SenderName from = {post.sender}/>
                <Link to ={`${match.url}/${post.id}`}>
                    <Message msg = {post.message}/>
                </Link>
            </li>
        );
}

function MessageId(props){
    return <p>{props.msgId.toString()}</p>
}

function SenderProfileImage(props){
    return <img src = {props.from.profileImage} className = "postProfileImage"/>
}

function SenderName(props){
    let match = useRouteMatch();
    return <p>{props.from.firstName.toString()} {props.from.lastName.toString()}</p>
}

function ReceiverProfileImage(props){
    return <img src = {props.to.profileImage} className = "postProfileImage"/>
}

function ReceiverName(props){
    let match = useRouteMatch();
    return <p>{props.to.firstName.toString()} {props.to.lastName.toString()}</p>
}

function Message(props){
    return <p className="message">{props.msg.toString()} </p>
}

function MessageImage(props){
    return <img src ={props.msgImg} className="postMessageImage" />
}