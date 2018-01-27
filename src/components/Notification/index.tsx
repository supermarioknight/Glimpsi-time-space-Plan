import * as React from 'react';
import Transition from 'react-transition-group/Transition';
import { Root } from './styles';

interface Props {
  children: string;
  appearance: 'warning' | 'info' | 'default';
}

interface State {
  finished: boolean;
}

type TransitionState = 'entering' | 'entered' | 'exited' | 'exiting';

const clearTimeout = 5000;

export default class Notification extends React.Component<Props, State> {
  timeoutId: number;

  state = {
    finished: false,
  };

  componentDidMount() {
    this.timeoutId = window.setTimeout(() => {
      this.setState({
        finished: true,
      });
    }, clearTimeout);
  }

  componentWillUnmount() {
    window.clearTimeout(this.timeoutId);
  }

  render() {
    return (
      <Transition in={!this.state.finished} timeout={200} appear>
        {(state: TransitionState) => (
          <Root state={state} {...this.props}>
            {this.props.children}
          </Root>
        )}
      </Transition>
    );
  }
}
