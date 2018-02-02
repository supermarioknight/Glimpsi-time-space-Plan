import * as React from 'react';

interface State {
  rendered: boolean;
}

export default function<TProps>(WrappedComponent: React.ComponentType<TProps>) {
  return class RenderNextFrame extends React.Component<TProps, State> {
    state = {
      rendered: false,
    };

    componentDidMount() {
      window.requestAnimationFrame(() => {
        this.setState({
          rendered: true,
        });
      });
    }

    render() {
      return this.state.rendered ? <WrappedComponent {...this.props} /> : null;
    }
  };
}
