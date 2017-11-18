import React from 'react';
import { GoogleMap, Marker, withScriptjs, withGoogleMap } from 'react-google-maps';
import { flow } from 'lodash-es';

interface MarkerObj {
  position: {
    lat: number;
    long: number;
  };
}

interface Props {
  className?: string;
  markers: MarkerObj[];
}

const Map: React.StatelessComponent<Props> = ({ markers }) => (
  <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
    {markers.map((marker, index) => <Marker position={marker.position} key={index} />)}
  </GoogleMap>
);

Map.defaultProps = {
  markers: [],
};

export default flow([withGoogleMap, withScriptjs])(Map);
