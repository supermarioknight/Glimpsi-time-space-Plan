import * as React from 'react';
import { withNetwork, NetworkProps } from 'react-fns';
import Notification from '../Notification';

interface State {
  wasOffline: boolean;
}

class NetworkNotifier extends React.Component<NetworkProps, State> {
  state = {
    wasOffline: false,
  };

  componentWillUpdate(nextProps: NetworkProps) {
    if (!this.props.online && nextProps.online && !this.state.wasOffline) {
      this.setState({
        wasOffline: true,
      });
    }

    if (this.state.wasOffline) {
      this.setState({
        wasOffline: false,
      });
    }
  }

  render() {
    return (
      <div>
        {!this.props.online &&
          this.props.offlineAt && <Notification appearance="warning">oh no</Notification>}

        {this.props.online &&
          this.state.wasOffline && <Notification appearance="info">we back</Notification>}
      </div>
    );
  }
}

export default withNetwork<{}>(NetworkNotifier);
