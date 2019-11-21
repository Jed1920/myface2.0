import React, {useState} from 'react';

export function CreateUser(){

    const [firstValue,setFirstValue]=useState("");
    const [lastValue,setLastValue]=useState("");
    const [profileURL,setProfileURL]=useState("");
    const [bannerURL,setBannerURL]=useState("");
    const [emailValue,setEmailValue]=useState("");
    const [usernameValue,setUsernameValue]=useState("");

    async function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData();

        formData.append("firstName", firstValue);
        formData.append("lastName", lastValue);
        formData.append("profileImage", profileURL);
        formData.append("bannerImage", bannerURL);
        formData.append("email", emailValue);
        formData.append("username", usernameValue);
        try{
            const response = await fetch("http://localhost:8080/api/users/create" ,{
                method: 'POST',
                body: formData
            });
            console.log(response)
        } catch (error){
            console.error('Error',error);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>First Name
                <input type = "text" value={firstValue} onChange={event => setFirstValue(event.target.value)}/>
            </label>
            <label>Last Name
                <input type = "text" value={lastValue} onChange={event => setLastValue(event.target.value)}/>
            </label>
            <label>Profile URL
                <input type = "text" value={profileURL} onChange={event => setProfileURL(event.target.value)}/>
            </label>
            <label>Banner URL
                <input type = "text" value={bannerURL} onChange={event => setBannerURL(event.target.value)}/>
            </label>
            <label>Email
                <input type = "text" value={emailValue} onChange={event => setEmailValue(event.target.value)}/>
            </label>
            <label>Username
                <input type = "text" value={usernameValue} onChange={event => setUsernameValue(event.target.value)}/>
            </label>
            <label>Create User
                <input type = "submit" value="Create User"/>
            </label>
        </form>
    );
}