import * as React from 'react';
import { Root, PageHeading, HeadingLink } from './styles';

interface Props {
  className?: string;
  appearance: 'transparent' | 'default';
  children?: React.ReactNode;
}

const Header: React.StatelessComponent<Props> = ({ className, appearance, children }) => (
  <Root appearance={appearance} className={className}>
    <HeadingLink to="/">
      <PageHeading>glimpsi</PageHeading>
    </HeadingLink>

    {children}
  </Root>
);

export default Header;
