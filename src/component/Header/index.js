import React from 'react';
import './styles.css';

export default ({black}) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                   <img src="https://logos-world.net/wp-content/uploads/2020/04/Netflix-Logo.png" alt="Netflix" />
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                   <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="Usuario" />
                </a>
            </div>
        </header>
    );
}