import * as React from 'react';
import colors from '../../assets/styles/colors';
import { Root, Strip } from './styles';

interface Props {
  appearance: 'horizontal' | 'vertical';
  children: React.ReactNode;
  color?: string;
}

interface DefaultProps extends Props {
  color: string;
}

const ColorStrip: React.StatelessComponent<Props> = props => {
  const { appearance, children, color } = props as DefaultProps;

  return (
    <Root>
      <Strip appearance={appearance} color={color} />
      {children}
    </Root>
  );
};

ColorStrip.defaultProps = {
  color: colors.negative,
};

export default ColorStrip;
