import * as React from 'react';
import { withAnalyticsEvents } from '@atlaskit/analytics-next';

interface Props {
  onMount?: () => void;
  children?: React.ReactNode;
}

class OnMount extends React.Component<Props> {
  componentDidMount() {
    if (this.props.onMount) {
      this.props.onMount();
    }
  }

  render() {
    return this.props.children;
  }
}

const AnalyticsView = withAnalyticsEvents<Props>({
  onMount: createAnalyticsEvent => createAnalyticsEvent({ action: 'view' }).fire(),
})(OnMount);

export default AnalyticsView;
