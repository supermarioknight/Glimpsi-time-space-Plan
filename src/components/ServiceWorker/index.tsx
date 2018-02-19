import * as React from 'react';
import Button from '../Button';
import { register, unregister } from './registerServiceWorker';
import withNotifier, { InjectedProps } from '../../decorators/notifier';

export default withNotifier(
  class ServiceWorker extends React.Component<InjectedProps> {
    componentDidMount() {
      if (process.env.NODE_ENV !== 'production') {
        // Clear the serviceworker in anything other than production mode
        // So we can see the ready for offline usage.
        unregister();
      }

      register({
        onContentCached: () =>
          this.props.notify('glimpsi is ready for offline usage.', {
            type: 'info',
            autoCloseMs: 2000,
          }),

        onNewContentAvailable: () =>
          this.props.notify(
            <React.Fragment>
              There is a new version of glimpsi ready for you!
              <Button onClick={() => window.location.reload()}>refresh</Button>
            </React.Fragment>,
            { type: 'info' }
          ),

        // tslint:disable-next-line no-empty
        onRegistrationError: () => {},
      });
    }

    render() {
      return null;
    }
  }
);
