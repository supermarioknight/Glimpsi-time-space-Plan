import * as React from 'react';
import Transition from 'react-transition-group/Transition';
import { Root } from './styles';

interface Props {
  children: React.ReactNode;
  autoHide?: boolean;
  appearance: 'warning' | 'info' | 'default';
  timeout?: number;
}

interface State {
  finished: boolean;
}

type TransitionState = 'entering' | 'entered' | 'exited' | 'exiting';

export default class Notification extends React.Component<Props, State> {
  static defaultProps = {
    timeout: 3000,
  };

  timeoutId: number;

  state = {
    finished: false,
  };

  componentDidMount() {
    if (this.props.autoHide) {
      this.timeoutId = window.setTimeout(() => {
        this.setState({
          finished: true,
        });
      }, this.props.timeout);
    }
  }

  componentWillUnmount() {
    if (this.props.autoHide && this.timeoutId) {
      window.clearTimeout(this.timeoutId);
    }
  }

  render() {
    return (
      <Transition in={!this.state.finished} timeout={200} appear>
        {(state: TransitionState) => (
          <Root role="alert" state={state} {...this.props}>
            {this.props.children}
          </Root>
        )}
      </Transition>
    );
  }
}
