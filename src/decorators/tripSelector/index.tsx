import * as React from 'react';
import { connect, Omit } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { selectTrip } from '../../state/timeline/actions';

// tslint:disable-next-line no-any
interface InjectedProps extends RouteComponentProps<any> {
  // tslint:disable-next-line no-any
  selectTrip: (key?: string) => any;
}

type HocProps<T extends InjectedProps> = Omit<T, keyof InjectedProps>;

function timelineSelector<TProps extends InjectedProps>(key: string) {
  return (WrappedComponent: React.ComponentType<HocProps<TProps>>) =>
    connect(null, { selectTrip })(
      withRouter(
        class extends React.Component<InjectedProps> {
          componentWillMount() {
            this.props.selectTrip(this.props.match.params[key]);
          }

          componentWillUpdate(nextProps: InjectedProps) {
            if (nextProps.match.params[key] !== this.props.match.params[key]) {
              nextProps.selectTrip(nextProps.match.params[key]);
            }
          }

          componentWillUnmount() {
            this.props.selectTrip(undefined);
          }

          render() {
            return <WrappedComponent {...this.props as any} />;
          }
        }
      )
    );
}

export default timelineSelector;
