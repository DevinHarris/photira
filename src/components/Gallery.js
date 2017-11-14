import React from 'React';

class Gallery extends React.Component {

    constructor(props) {
        super(props);
    }

    handleThumbEvent = (e) => {
        const photoSrc = e.target.src;
        this.props.updateDisplaySrc(photoSrc);
    }



    render() {
        return ( 
            <div className="gallery">
                {this.props.photos.length === 0 && <h2>Your photo thumbnails will appear here.</h2>}
                {this.props.photos.map(photo => {
                return (
                    <div className="photoThumb ">
                        <img onClick={this.handleThumbEvent} key={this.props.photos.indexOf(photo)} src={photo} />
                    </div>
                )
                })}
            </div>
        )
    }
}

export default Gallery;