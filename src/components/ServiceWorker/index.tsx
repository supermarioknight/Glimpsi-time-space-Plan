import * as React from 'react';
import { withAnalyticsEvents, InjectedAnalyticsProps } from '@atlaskit/analytics-next';
import Button from '../Button';
import { register, unregister } from './registerServiceWorker';
import withNotifier, { InjectedProps } from '../../decorators/notifier';

type Props = InjectedAnalyticsProps & InjectedProps;

export default withAnalyticsEvents()(
  withNotifier(
    class ServiceWorker extends React.Component<Props> {
      componentDidMount() {
        if (process.env.NODE_ENV !== 'production') {
          // Clear the serviceworker in anything other than production mode
          // So we can see the ready for offline usage.
          unregister();
        }

        register({
          onContentCached: () => {
            this.props.createAnalyticsEvent({ action: 'cached for offline use' }).fire();

            this.props.notify('glimpsi is ready for offline usage.', {
              type: 'info',
              autoCloseMs: 4000,
            });
          },

          onNewContentAvailable: () => {
            this.props.createAnalyticsEvent({ action: 'new version available' }).fire();

            this.props.notify(
              <React.Fragment>
                There is a new version of glimpsi ready for you!
                <Button onClick={() => window.location.reload()}>refresh</Button>
              </React.Fragment>,
              { type: 'default', hideCloseButton: true }
            );
          },

          // tslint:disable-next-line no-empty
          onRegistrationError: () => {},
        });
      }

      render() {
        return null;
      }
    }
  )
);
