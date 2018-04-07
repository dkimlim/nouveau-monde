import React, {Component} from 'react';

const UserBar = (props) => (


     <nav className="UserBar">
     <a href="/" className="userbar-brand">Test your Knowledge</a>
     <span className="userbar-pointscount"> You have {props.pointscount} stellar points
     </span>
     </nav>
    )

export default UserBar;

