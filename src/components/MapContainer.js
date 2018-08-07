import React, { Component } from 'react';
// import Map from './Map'
import Marker from './Marker'
import {Map, InfoWindow, } from 'google-maps-react';
import { mapCenter, places} from './ListPlaces'

export default class MapContainer extends Component {



  render() {

    return (
      <main className="main-container">
        <Map google={this.props.google}
          initialCenter={mapCenter}
          zoom={13}
        >
          {places.map( (location, index) => (

                    <Marker key={index}
                    onClick={this.onMarkerClick}
                    title={'The marker`s title will appear as a tooltip.'}
                    position={location.location} />


          ))}
        </Map>
      </main>
    )
  }
}
