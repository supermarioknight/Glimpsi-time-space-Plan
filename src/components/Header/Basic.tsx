import * as React from 'react';
import { Root, PageHeading, HeadingLink } from './styles';

interface Props {
  className?: string;
}

const BasicHeader: React.StatelessComponent<Props> = ({ className }) => (
  <Root appearance="transparent" className={className}>
    <HeadingLink to="/">
      <PageHeading>glimpsi</PageHeading>
    </HeadingLink>
  </Root>
);

export default BasicHeader;
