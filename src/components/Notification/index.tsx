import * as React from 'react';
import Transition from 'react-transition-group/Transition';
import { Root } from './styles';

interface Props {
  children: string;
  autoHide?: boolean;
  appearance: 'warning' | 'info' | 'default';
}

interface State {
  finished: boolean;
}

type TransitionState = 'entering' | 'entered' | 'exited' | 'exiting';

const clearTimeout = 2500;

export default class Notification extends React.Component<Props, State> {
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
      }, clearTimeout);
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
