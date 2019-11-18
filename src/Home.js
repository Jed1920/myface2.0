import React from 'react';
import logo from './logo.svg';
import './Home.scss';

export function Home(){

    return <div className="home">
        <h1 className="homeTitle">MyFace</h1>
        <img src={logo} className="homeLogo" alt="logo" />
        
    </div>
}