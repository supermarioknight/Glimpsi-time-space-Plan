import React from 'react';
import GoogleMaps, { Props as MapProps } from './GoogleMaps';

const API_KEY = 'AIzaSyCHgmYZpgPN8qzGt1WJqHIilYDB7icfiQ4';

interface Props extends MapProps {
  className?: string;
}

const Map = (props: Props) => (
  <GoogleMaps
    {...props}
    googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${API_KEY}&v=3.exp&libraries=geometry,drawing,places`}
    loadingElement={<div style={{ height: '100%', width: '100%' }} />}
    containerElement={<div style={{ height: '100%', width: '100%' }} />}
    mapElement={<div style={{ height: '100%' }} />}
  />
);

export default Map;
