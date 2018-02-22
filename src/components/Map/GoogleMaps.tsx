import React from 'react';
import {
  GoogleMap,
  OverlayView,
  withScriptjs,
  withGoogleMap,
  GoogleMapProps,
} from 'react-google-maps';
import { withAnalyticsEvents } from '@atlaskit/analytics-next';
import { flow, noop } from 'lodash-es';
import renderNextFrame from '../../decorators/renderNextFrame';
import { Marker } from './styles';

export interface MarkerObj {
  position: {
    lat: number;
    lng: number;
  };
}

type MarkerEvent = (index: number) => void;

export interface Props extends GoogleMapProps {
  autofit?: boolean;
  className?: string;
  markers?: MarkerObj[];
  zoom?: number;
  onMarkerOver?: MarkerEvent;
  onMarkerOut?: () => void;
  onMarkerClick?: MarkerEvent;
}

interface DefaultProps extends Props {
  markers: MarkerObj[];
  zoom: number;
  onMarkerOver: MarkerEvent;
  onMarkerOut: () => void;
  onMarkerClick: MarkerEvent;
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

const getPixelPositionOffset = (width: number, height: number) => ({
  x: -(width / 2),
  y: -(height / 2),
});

class Map extends React.Component<Props> {
  static defaultProps = {
    markers: [],
    zoom: 14,
    onMarkerOver: noop,
    onMarkerOut: noop,
    onMarkerClick: noop,
  };

  _map: GoogleMap | null;

  onMapMounted = (ref: GoogleMap | null) => {
    this._map = ref;

    if (this._map) {
      this.fitBoundsToMarkers();
    }
  };

  componentDidUpdate() {
    this.fitBoundsToMarkers();
  }

  fitBoundsToMarkers = () => {
    if (!this._map) {
      return;
    }

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

  onMarker(e: React.MouseEvent<HTMLElement>, type: 'click' | 'over' | 'out', index: number) {
    e.stopPropagation();
    const { onMarkerOver, onMarkerOut, onMarkerClick } = this.props as DefaultProps;
    const indexFromOne = index + 1;

    switch (type) {
      case 'click':
        return onMarkerClick(indexFromOne);

      case 'over':
        return onMarkerOver(indexFromOne);

      case 'out':
        return onMarkerOut();

      default:
        return;
    }
  }

  render() {
    const { markers } = this.props as DefaultProps;

    return (
      <GoogleMap zoom={this.props.zoom} center={calcCenter(markers)} ref={this.onMapMounted}>
        {markers.map((marker, index) => (
          <OverlayView
            position={marker.position}
            getPixelPositionOffset={getPixelPositionOffset}
            // tslint:disable-next-line no-any
            mapPaneName={(OverlayView as any).OVERLAY_MOUSE_TARGET}
            key={index}
          >
            <Marker
              interactive
              onClick={e => this.onMarker(e, 'click', index)}
              onMouseOver={e => this.onMarker(e, 'over', index)}
              onMouseOut={e => this.onMarker(e, 'out', index)}
            >
              {index + 1}
            </Marker>
          </OverlayView>
        ))}
      </GoogleMap>
    );
  }
}

export default flow([
  withGoogleMap,
  withScriptjs,
  renderNextFrame,
  withAnalyticsEvents({
    onMarkerClick: createAnaylticsEvent =>
      createAnaylticsEvent({ action: 'Click Map Marker', category: 'Timeline' }).fire(),
    onMarkerOver: createAnaylticsEvent =>
      createAnaylticsEvent({ action: 'Hover Map Marker', category: 'Timeline' }).fire(),
  }),
])(Map);
