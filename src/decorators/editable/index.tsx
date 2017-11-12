import * as React from 'react';

export interface InjectedProps {
  editing: boolean;
  setEditing: (editing: boolean) => void;
}

interface State {
  editing: boolean;
}

type HocProps<T extends InjectedProps> = Omit<T, keyof InjectedProps>;

export default function <TProps extends InjectedProps>(WrappedComponent: React.ComponentType<TProps>) {
  return class Editable extends React.Component<HocProps<TProps>, State> {
    state = {
      editing: false,
    };

    setEditing = (editing: boolean) => {
      this.setState({
        editing,
      });
    }

    render () {
      // Can't use object spread here.
      // See: https://github.com/Microsoft/TypeScript/issues/10727
      // tslint:disable-next-line prefer-object-spread
      const props = Object.assign({}, this.props, {
        setEditing: this.setEditing,
        editing: this.state.editing,
      });

      return <WrappedComponent {...props} />;
    }
  };
}
