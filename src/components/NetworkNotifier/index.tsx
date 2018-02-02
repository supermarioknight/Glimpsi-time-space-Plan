import * as React from 'react';
import { NetworkProps } from 'react-fns';
import Notification from '../Notification';

interface State {
  wasOffline: boolean;
}

export default class NetworkNotifier extends React.Component<NetworkProps, State> {
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
          this.props.offlineAt && (
            <Notification appearance="warning">
              You've lost your internet! Don't worry, any changes you make will be saved.
            </Notification>
          )}

        {this.props.online &&
          this.state.wasOffline && (
            <Notification appearance="info" autoHide>
              ...And we're back online!
            </Notification>
          )}
      </div>
    );
  }
}
