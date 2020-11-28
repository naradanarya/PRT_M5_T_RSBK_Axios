import React, { Component } from 'react';
import axios from 'axios';
import ImageList from './imageList';

class App extends Component {
  state = { images: [] };

  getPhotos = async () => {
    const response = await axios.get("https://api.unsplash.com/photos", {
      headers: {
        Authorization: "Client-ID ENY3nA-GcEo3stBCPR5LGqSxwadLFLJCq74v1KMLOkQ"
      }
    });

    this.setState({ images: response.data});
  }

  render() {
    return(
      <div>
        <input 
          type="button" 
          value='get photos'
          onClick={this.getPhotos}
        />
        <ImageList  images={this.state.images} />
      </div>
    );
  }
}

export default App;