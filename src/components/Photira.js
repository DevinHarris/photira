import React from 'react';
import Header from './Header';
import AddPhoto from './AddPhoto';
import Gallery from './Gallery';
import Fullscale from './Fullscale';

class Photira extends React.Component {
    state = { 
            message: 'Welcome to Photira',
            photos: [],
            displaySrc: ''
    }

    // Lifecycle Hooks

    componentDidMount() {
        console.log('Photira Started');
        const photoState = this.state.photos;
        const savedPhotos = localStorage.getItem('photos');
        if (savedPhotos) {
            this.setState(({photos: JSON.parse(savedPhotos)}))
        } else {
            localStorage.setItem('photos', JSON.stringify(photoState));
        }
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('Updating');
        const photoState = this.state.photos;

        if (prevState.photos.length !== photoState.length) {
            localStorage.setItem('photos', JSON.stringify(photoState));
        }
    }

    componentWillUnmount() {
        console.log('Photira has disconnected');
    }

    // Handlers

    handleAddPhoto = (photo) => {
        this.setState((prevState) => ({
            photos: prevState.photos.concat(photo)
        }));
    }

    updateDisplaySrc = (photoUrl) => {
        this.setState(({displaySrc: photoUrl}))
    }

    /*handleClearPhotos = () => {
        this.setState(({photos: []}));
    } */

    render() {
        // passing props to Gallery
        return (
            <div className="container">
                <section className="main-content">
                    <div className="section-half gallery-width">
                        <Header appName="Photira" tagLine="a reactive photo gallery app." />
                        <Gallery photos={this.state.photos} updateDisplaySrc={this.updateDisplaySrc} />
                        <AddPhoto handleAddPhoto={this.handleAddPhoto}/>
                    </div>
                    <div className="section-half fullscale-width">
                        <Fullscale displayUrlSrc={this.state.displaySrc}/>
                    </div>
                </section>
            </div>
        )
    }
}

export default Photira;