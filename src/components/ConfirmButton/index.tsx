import * as React from 'react';

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
      <button {...props} onClick={this.onClick}>
        {confirming ? confirmText : children}
      </button>
    );
  }
}
