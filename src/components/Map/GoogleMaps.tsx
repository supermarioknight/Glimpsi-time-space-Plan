import React from 'react';
import {
  GoogleMap,
  Marker,
  withScriptjs,
  withGoogleMap,
} from 'react-google-maps';
import { flow } from 'lodash-es';

export interface MarkerObj {
  position: {
    lat: number;
    lng: number;
  };
}

export interface Props {
  autofit?: boolean;
  className?: string;
  markers?: MarkerObj[];
  zoom?: number;
}

interface DefaultProps extends Props {
  markers: MarkerObj[];
  zoom: number;
}

const calcCenter = (markers: MarkerObj[]) => {
  if (markers.length) {
    const total = markers.reduce(
      (obj, marker) => {
        obj.lat += marker.position.lat;
        obj.lng += marker.position.lng;
        return obj;
      },
      { lat: 0, lng: 0 }
    );

    total.lat = total.lat / markers.length;
    total.lng = total.lng / markers.length;

    return total;
  }

  return {
    lat: 0,
    lng: 0,
  };
};

class Map extends React.Component<Props> {
  static defaultProps: DefaultProps = {
    markers: [],
    zoom: 14,
  };

  _map: google.maps.Map;

  onMapMounted = (ref: google.maps.Map) => {
    this._map = ref;
    if (this._map) {
      this.fitBoundsToMarkers();
    }
  };

  componentDidUpdate() {
    this.fitBoundsToMarkers();
  }

  fitBoundsToMarkers = () => {
    const { autofit, markers } = this.props as DefaultProps;
    if (!autofit || !markers.length) {
      return;
    }

    const bounds = markers.reduce((innerBounds, marker) => {
      innerBounds.extend(marker.position);
      return innerBounds;
    }, new google.maps.LatLngBounds());

    this._map.fitBounds(bounds);
  };

  render() {
    const { markers } = this.props as DefaultProps;

    return (
      <GoogleMap
        zoom={this.props.zoom}
        center={calcCenter(markers)}
        ref={this.onMapMounted}
      >
        {markers.map((marker, index) => (
          <Marker position={marker.position} key={index} />
        ))}
      </GoogleMap>
    );
  }
}

export default flow([withGoogleMap, withScriptjs])(Map);
