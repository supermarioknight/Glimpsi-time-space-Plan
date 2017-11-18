import React from 'react';
import { GoogleMap, Marker, withScriptjs, withGoogleMap } from 'react-google-maps';
import { flow } from 'lodash-es';

interface Props {
  isMarkerShown: boolean;
}

const Map: React.StatelessComponent<Props> = props => (
  <GoogleMap {...props} defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
    {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
  </GoogleMap>
);

export default flow([withGoogleMap, withScriptjs])(Map);
