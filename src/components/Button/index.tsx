import * as React from 'react';
import { Root, Theme } from './styles';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  appearance?: Theme;
}

const Button: React.StatelessComponent<Props> = ({ children, ...props }) => (
  <Root {...props}>{children}</Root>
);

Button.defaultProps = {
  appearance: 'default',
};

export default Button;
