import React from 'react';
import'./User.scss'

export function User(props){

    const user = props.data;

    return (
            <li className="userListItem">
            <ProfileImage profImg = {user.profileImage}/>
            <Name firstName = {user.firstName} lastName = {user.lastName}/>
            </li>
        );
    }
function BannerImage(props){
    return <img src ={props.bannerImg} className="userBannerImage"/>
}

function ProfileImage(props){
    return <img src = {props.profImg} className="userProfileImage"/>
}

function Name(props){
    return <p>{props.firstName.toString()} {props.lastName.toString()}</p>
}

function UserId(props){
    return <p>{props.id.toString()}</p>
}

function Username(props){
    return <p>{props.username.toString()}</p>
}

function Email(props){
    return <p>{props.email.toString()}</p>
}