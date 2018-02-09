import * as React from 'react';
import PropTypes from 'prop-types';
import { Omit } from 'react-redux';
import NotificationNotifier from '../../components/NotificationNotifier';
import { Notify } from '../../components/NotificationProvider';

export interface InjectedProps {
  notify: Notify;
}

type HocProps<T extends InjectedProps> = Omit<T, keyof InjectedProps>;

export default function<TProps extends InjectedProps>(
  WrappedComponent: React.ComponentType<TProps>
) {
  return class WithNotifier extends React.Component<HocProps<TProps>> {
    static contextTypes = {
      notify: PropTypes.func.isRequired,
    };

    render() {
      return (
        <NotificationNotifier>
          {({ notify }) => <WrappedComponent {...this.props} notify={notify} />}
        </NotificationNotifier>
      );
    }
  };
}
