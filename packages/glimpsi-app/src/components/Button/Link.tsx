import * as React from 'react';
import { LinkProps } from 'react-router-dom';
import { LinkButton as Link, Theme } from './styles';

export interface Props extends LinkProps {
  appearance?: Theme;
}

const LinkButton: React.StatelessComponent<Props> = ({ children, ...props }) => (
  <Link {...props}>{children}</Link>
);

LinkButton.defaultProps = {
  appearance: 'default',
};

export default LinkButton;
