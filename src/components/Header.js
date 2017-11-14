import React from 'react';

const Header = (props) => {

    return (
        <header>
            <h1>{props.appName} <span className="tagline">{props.tagLine}</span></h1>
        </header>
    )

}

export default Header;