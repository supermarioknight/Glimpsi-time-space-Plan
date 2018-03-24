import * as React from 'react';
import Button from '../Button';

interface Props {
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
  children: React.ReactNode;
  confirmText?: string;
}

interface State {
  confirming: boolean;
}

export default class ConfirmButton extends React.Component<Props, State> {
  static defaultProps = {
    confirmText: 'Are you sure?',
  };

  state: State = {
    confirming: false,
  };

  onClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();

    if (this.state.confirming) {
      this.props.onClick(event);
    } else {
      this.setState({
        confirming: true,
      });
    }
  };

  render() {
    const { confirming } = this.state;
    const { children, confirmText, ...props } = this.props;

    return (
      <Button appearance="negative" {...props} onClick={this.onClick}>
        {confirming ? confirmText : children}
      </Button>
    );
  }
}
