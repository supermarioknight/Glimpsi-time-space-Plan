import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { selectTrip } from '../../state/timeline/actions';

// tslint:disable-next-line no-any
interface InjectedProps extends RouteComponentProps<any> {
  // tslint:disable-next-line no-any
  selectTrip: (key?: string) => any;
}

function timelineSelector<TProps>(key: string) {
  return (WrappedComponent: React.ComponentType<TProps>) =>
    connect<TProps>(null, { selectTrip })(
      withRouter<InjectedProps>(
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
            return <WrappedComponent {...this.props} />;
          }
        }
      )
      // tslint:disable-next-line no-any how do u type dis
    ) as any;
}

export default timelineSelector;
