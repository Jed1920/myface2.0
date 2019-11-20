import React from 'react';
import logo from './logo.svg';
import './App.scss';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";

export default async function Trial(){

    const response = await fetch('http://localhost:8080/api/posts');
    const json = await response.json();
    const str = await JSON.stringify(json);
    console.log("Worked");
    console.log(str);


return <div></div>
}



export function IndivPostMain(){
  let {id} = useParams();
  const[post,setPost] = useState([]);

  useEffect(() => {
      fetch('http://localhost:8080/api/posts/' + id)
          .then(resp => resp.json())
          .then(resp => setPost(resp));
  } , []);
  console.log(post);
  if (post.length !== 0){
      return <IndivPost data = {post}/>
  } else { return ('blah')}
}

export function IndivPost(props){
  const post = props.data;
  return (
          <li className="postList">
          <MessageId msgId = {post.id}/>
          <SenderProfileImage from = {post.sender}/>
          <SenderName from = {post.sender}/>
          <ReceiverProfileImage to = {post.receiver}/>
          <ReceiverName to = {post.receiver}/>
          <Message msg = {post.message}/>
          <MessageImage msgImg = {post.image}/>
          </li>
      );
}