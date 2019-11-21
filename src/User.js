import React, {useState, useEffect} from 'react';
import'./User.scss'
import { Link } from "react-router-dom";

export function User(props){

    const user = props.data;

    return (
        <Link to = {`/users/${user.id}`} className="userLink">
            <li className="userListItem"  key = {user.id}>
                    <ProfileImage profImg = {user.profileImage}/>
                    <Name firstName = {user.firstName} lastName = {user.lastName}/>
            </li>
        </Link>
        );
}

export function IndivUser(props){
    const user = props.data;

    return(
        <div>
            <BannerImage bannerImg = {user.bannerImage} />
            <ProfileImage profImg = {user.profileImage}/>
            <Name firstName = {user.firstName} lastName = {user.lastName}/>
            <UserId id = {user.id}/>
            <Username username = {user.username}/>
            <Email email = {user.email}/>
        </div>
    )
}


function BannerImage(props){
    return <img src ={props.bannerImg} className="userBannerImage"/>
}

function ProfileImage(props){
    return <img src = {props.profImg} className="userProfileImage"/>
}

function Name(props){
    return <p >{props.firstName.toString()} {props.lastName.toString()}</p>
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