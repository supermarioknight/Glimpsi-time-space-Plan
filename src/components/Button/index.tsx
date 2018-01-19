import * as React from 'react';
import { Root } from './styles';

export type Theme = 'primary' | 'secondary' | 'transparent';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  appearance: Theme;
}

const Button: React.StatelessComponent<Props> = ({ children, ...props }) => (
  <Root {...props}>{children}</Root>
);

export default Button;
