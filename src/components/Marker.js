import React, { Component } from 'react';
import PropTypes from 'prop-types'



class Marker extends Component {

  state = {
      activeMarker: {},
      selectPlace: {},
      showingInfoWindow: false
    };

  componentDidMount() {
     this.renderMarker();
   }


  componentDidUpdate(prevProps) {
  if ((this.props.map !== prevProps.map) ||
    (this.props.position !== prevProps.position)) {
      this.renderMarker();
  }
}

onMarkerClick = (props, marker) =>
    this.setState({
      activeMarker: marker,
      selectedPlace: props,
      showingInfoWindow: true
    });

  onInfoWindowClose = () =>
    this.setState({
      activeMarker: null,
      showingInfoWindow: false
    });

  onMapClicked = () => {
    if (this.state.showingInfoWindow)
      this.setState({
        activeMarker: null,
        showingInfoWindow: false
      });
  };

renderMarker() {
  let {
     map, google, position, mapCenter
   } = this.props;

   let pos = position || mapCenter;
   position = new google.maps.LatLng(pos.lat, pos.lng)

   const pref = {
        map: map,
        position: position
      };
      this.marker = new google.maps.Marker(pref);
      const marker=this.marker;
}
  render() {
    return null;
  }
}

Marker.propTypes = {
//  position: React.PropTypes.object,
//  map: React.PropTypes.object,
  //google: React.PropTypes.object
}

export default Marker;
