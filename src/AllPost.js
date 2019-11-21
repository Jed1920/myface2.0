import React, {useState,useEffect} from 'react';
import './Post.scss';
import send from './send.svg';

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
    
    const post = props.data;

    const [isOpen, setIsOpen] = useState(1);

    if (isOpen% 2 === 0) {
        return (
            <li className="postListItem" onClick={() => setIsOpen(isOpen + 1)} key = {post.id}>

                <MessageId msgId = {post.id}/>
                <div className="profiles">
                    <div className = "msgUserOpen">
                        <SenderProfileImage from = {post.sender}/>
                        <SenderName from = {post.sender}/>
                    </div>
                    <img src={send} alt="logo" className="sendSvg"/>
                    <div className = "msgUserOpen">
                        <ReceiverProfileImage to = {post.receiver}/>
                        <ReceiverName to = {post.receiver}/>
                    </div>
                </div>
                <Message msg = {post.message} className="messageOpen"/>
                <MessageImage msgImg = {post.image}/>
            </li>
        );
    }

    return (
            <li className="postListItem" onClick={() => setIsOpen(isOpen + 1)}  key = {post.id}>

                <div className = "msgUser">
                    <SenderProfileImage from = {post.sender}/>
                    <SenderName from = {post.sender}/>
                </div>

                <Message msg = {post.message} className="message"/>
            </li>
        );
}

function MessageId(props){
    return <p>{props.msgId.toString()}</p>
}

function SenderProfileImage(props){
    return <img src = {props.from.profileImage} alt="Profile Image" className= "postProfileImage"/>
}

function SenderName(props){
    return <p className = "name">{props.from.firstName.toString()} {props.from.lastName.toString()}</p>
}

function ReceiverProfileImage(props){
    return <img src = {props.to.profileImage} alt="Profile Image" className = "postProfileImage"/>
}

function ReceiverName(props){
    return <p>{props.to.firstName.toString()} {props.to.lastName.toString()}</p>
}

function Message(props){
    return <p className={props.className}>{props.msg.toString()} </p>
}

function MessageImage(props){
    return <img src ={props.msgImg} className="messageImageOpen" />
}