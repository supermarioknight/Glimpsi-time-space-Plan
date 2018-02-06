import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { selectTrip } from '../../state/timeline/actions';

// tslint:disable-next-line no-any
interface Props extends RouteComponentProps<any> {
  // tslint:disable-next-line no-any
  selectTrip: (key?: string) => any;
}

const timelineSelector = (key: string) => (WrappedComponent: React.ComponentType) =>
  connect(null, { selectTrip })(
    withRouter(
      // tslint:disable-next-line no-any
      class extends React.Component<Props> {
        componentWillMount() {
          this.props.selectTrip(this.props.match.params[key]);
        }

        componentWillUpdate(nextProps: Props) {
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
  );

export default timelineSelector;
