import * as React from 'react';
import { withAnalyticsEvents } from '@atlaskit/analytics-next';
import { LinkProps } from 'react-router-dom';
import { Root, PageHeading, HeadingLink } from './styles';

interface Props {
  className?: string;
  appearance: 'transparent' | 'default';
  children?: React.ReactNode;
}

const TrackedLink = withAnalyticsEvents<LinkProps>({
  onClick: createAnalyticEvent =>
    createAnalyticEvent({ action: 'Click Home Link', category: 'Header' }).fire(),
})(HeadingLink);

const Header: React.StatelessComponent<Props> = ({ className, appearance, children }) => (
  <Root appearance={appearance} className={className}>
    <TrackedLink to="/">
      <PageHeading>glimpsi</PageHeading>
    </TrackedLink>

    {children}
  </Root>
);

export default Header;
