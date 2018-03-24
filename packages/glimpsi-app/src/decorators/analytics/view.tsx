import * as React from 'react';
import { withAnalyticsContext } from '@atlaskit/analytics-next';
import AnalyticsView from '../../components/Analytics/View';

const withView = <TProps extends {}>(
  Component: React.ComponentType<TProps>
): React.StatelessComponent<TProps> => props => (
  <AnalyticsView>
    <Component {...props} />
  </AnalyticsView>
);

const withContext = (key: string) => <TProps extends {}>(name: string) => (
  Component: React.ComponentType<TProps>
) => withAnalyticsContext<TProps>({ view: `${key}(${name})` })(withView(Component));

export const withScreen = withContext('Screen');
export const withModal = withContext('Modal');
