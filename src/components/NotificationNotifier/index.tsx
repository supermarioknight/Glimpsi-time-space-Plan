import * as React from 'react';
import PropTypes from 'prop-types';
import { Notify } from '../../components/NotificationProvider';

interface ChildrenProps {
  notify: Notify;
}

export interface Props {
  children: (props: ChildrenProps) => React.ReactNode;
}

export default class WithNotifier extends React.Component<Props> {
  static contextTypes = {
    notify: PropTypes.func.isRequired,
  };

  render() {
    return this.props.children({ notify: this.context.notify as Notify });
  }
}
