import React, {useState, useEffect} from 'react';
import {User} from './User'
  
export function Users(){
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchAPI()
            .then((json) => setUsers(json.items));
        } , []);

    const allUsers = users.map(user => <User data={user}/>)
    return (
        <ol className ="userList">
            {allUsers} 
        </ol>
    );
}

async function fetchAPI(){
    const response = await fetch('http://localhost:8080/api/users?page=1') 
    return await response.json();
}