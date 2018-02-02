import React from 'react';
import { WithGoogleMapProps, WithScriptjsProps } from 'react-google-maps';
import { Props as MapProps } from './GoogleMaps';
import { ErrorOverlay } from './styles';
import { asyncComponent } from 'react-async-component';

const API_KEY = 'AIzaSyCHgmYZpgPN8qzGt1WJqHIilYDB7icfiQ4';

interface Props extends MapProps {
  className?: string;
}

interface State {
  error: boolean;
}

interface InternalProps extends Props, WithGoogleMapProps, WithScriptjsProps {}

const AsyncGoogleMaps = asyncComponent<InternalProps>({
  resolve: () => import('./GoogleMaps').then(x => x.default),
});

export default class Map extends React.Component<Props, State> {
  state = {
    error: false,
  };

  componentDidCatch() {
    this.setState({
      error: true,
    });
  }

  render() {
    if (this.state.error) {
      return <ErrorOverlay>Google maps couldn't be loaded.</ErrorOverlay>;
    }

    return (
      <AsyncGoogleMaps
        {...this.props}
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${API_KEY}&v=3.exp&libraries=geometry,drawing,places`}
        loadingElement={<div style={{ height: '100%', width: '100%' }} />}
        containerElement={<div style={{ height: '100%', width: '100%' }} />}
        mapElement={<div style={{ height: '100%' }} />}
      />
    );
  }
}
