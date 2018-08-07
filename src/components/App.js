import React, { Component } from 'react';
import './App.css';
// import the Google Maps API Wrapper from google-maps-react
import { GoogleApiWrapper } from 'google-maps-react'
// import child component
import MapContainer from './MapContainer'

class App extends Component {
  render() {
    return (
      //set the key elements of the screen
      <div>
        <h1> Search Component</h1>

        <MapContainer google={this.props.google} />
      </div>
    );
  }
}

//from google-maps-react
export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmtVWzHG114vmGdU3KbPOUnpnP6l2ju-s',
})(App)
