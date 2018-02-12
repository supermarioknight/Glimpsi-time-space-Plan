import * as React from 'react';
import { NetworkProps } from 'react-fns';
import withNotifier, { InjectedProps } from '../../decorators/withNotifier';

interface State {
  wasOffline: boolean;
}

export default withNotifier(
  class NetworkNotifier extends React.Component<NetworkProps & InjectedProps, State> {
    clearOfflineNotification?: () => void;

    componentDidMount() {
      if (this.props.offlineAt) {
        this.clearOfflineNotification = this.props.notify(
          `You have no internet! Don't worry, any changes you make will be saved.`,
          {
            type: 'warning',
          }
        );
      }
    }

    componentDidUpdate(prevProps: NetworkProps) {
      if (this.props.online && !prevProps.online) {
        if (this.clearOfflineNotification) {
          this.clearOfflineNotification();
        }

        this.props.notify(`...And we're back online!`, {
          type: 'info',
          autoCloseMs: 5000,
        });

        return;
      }

      if (this.props.offlineAt && !prevProps.offlineAt) {
        this.clearOfflineNotification = this.props.notify(
          `You've lost your internet! Don't worry, any changes you make will be saved.`,
          {
            type: 'warning',
          }
        );
      }
    }

    render() {
      return null;
    }
  }
);
