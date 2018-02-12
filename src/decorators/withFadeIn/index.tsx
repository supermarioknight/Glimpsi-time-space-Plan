import * as React from 'react';
import FadeIn from '../../components/FadeIn';

const withFadeIn = <TProps extends {}>(
  WrappedComponent: React.ComponentType<TProps>
): React.StatelessComponent<TProps> => (props: TProps) => (
  <FadeIn>
    <WrappedComponent {...props} />
  </FadeIn>
);

export default withFadeIn;
