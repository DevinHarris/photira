import React from 'react';
import validator from 'validator';

class AddPhoto extends React.Component {

    constructor(props) {
        super(props);
    }

    handlePhotoInput = (e) => {
        const photoURLs = e.target.value.split(',');

        photoURLs.map(url => {
            if (validator.isURL(url)) {
                this.props.handleAddPhoto(url);
                e.target.value = '';
            }
        })

    }

    render() {
        return (
            <div>
                <form action="#" method="GET">
                    <div>
                        <textarea className="addPhoto" onChange={this.handlePhotoInput} name="photos" placeholder="Paste urls" cols="30" rows="10"></textarea>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddPhoto;