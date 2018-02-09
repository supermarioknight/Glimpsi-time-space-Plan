import * as React from 'react';
import PropTypes from 'prop-types';
import NotificationComponent from '../Notification';
// import TransitionGroup from 'react-transition-group/TransitionGroup';
import uuid from 'uuid/v1';

export interface NotifyOptions {
  type: 'info' | 'warning' | 'default';
  autoCloseMs?: number;
}

export type Notify = (message: React.ReactNode, options: NotifyOptions) => void;

interface Props {
  children: React.ReactNode;
}

interface Notification {
  id: string;
  message: React.ReactNode;
  options: NotifyOptions;
}

interface State {
  notifications: Notification[];
}

export default class NotificationProvider extends React.Component<Props, State> {
  static childContextTypes = {
    notify: PropTypes.func,
  };

  state: State = {
    notifications: [],
  };

  getChildContext() {
    return {
      notify: this.notify,
    };
  }

  notify: Notify = (message, options) => {
    const id = uuid();

    this.setState(prevState => ({
      notifications: prevState.notifications.concat([{ id, message, options }]),
    }));

    if (options.autoCloseMs) {
      window.setTimeout(() => this.close(id), options.autoCloseMs);
    }
  };

  close = (id: string) => {
    this.setState(prevState => ({
      notifications: prevState.notifications.filter(notification => notification.id !== id),
    }));
  };

  render() {
    return (
      <React.Fragment>
        {this.props.children}

        {this.state.notifications.map(notification => (
          <NotificationComponent
            key={notification.id}
            requestClose={() => this.close(notification.id)}
            appearance={notification.options.type}
          >
            {notification.message}
          </NotificationComponent>
        ))}
      </React.Fragment>
    );
  }
}
