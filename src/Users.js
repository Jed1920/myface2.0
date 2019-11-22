import React, {useState, useEffect} from 'react';
import {User, IndivUser} from './User';
import { useParams , Link } from "react-router-dom";



export function Users(){
    const [users, setUsers] = useState([]);
    var path = "";

    useEffect(() => {
        fetchAPI(path)
            .then((json) => setUsers(json.items));
        } , []);

    const allUsers = users.map(user => <User data={user}/>)
    return (
        <div>
        <ol className ="userList">
            {allUsers} 
        </ol>
        <Link to = "/users/create">Add User</Link>
        </div>
    );
}

export function SingleUser(){
    let {id} = useParams();
    const [user, setUser] = useState([]);
    var path = "/" + id;

    useEffect(() => {
        fetchAPI(path)
            .then((json) => setUser(json));
    } ,[]);

    if (user.length === 0){
        return ('Blah');
    }

    return (
        <div>
            <IndivUser data = {user}/>
        </div>
    );
}

async function fetchAPI(path){
    const response = await fetch("http://localhost:8080/api/users" + path) 
    return await response.json();
}

