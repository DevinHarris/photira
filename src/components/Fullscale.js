import React from 'react';

const Fullscale = (props) => {
    const styles = {
        background: `url(${props.displayUrlSrc}) no-repeat center center / contain`,
        WebKitTransition: 'background 0.5s ease'
    }
    return (
        <div>
            {
                <div className="fullscale" style={ styles }>
                     {!props.displayUrlSrc && <h1>Click on a thumbnail to see full image</h1>}
                </div> 
            }
        </div>
    )
}

export default Fullscale;