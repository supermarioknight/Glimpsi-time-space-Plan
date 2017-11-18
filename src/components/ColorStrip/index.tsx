import * as React from 'react';
import styled from 'styled-components';
import { colors } from '../../assets/styles/variables';

const Root = styled.div`position: relative;`;

interface StripProps {
  color: string;
  appearance: 'horizontal' | 'vertical';
}

const Strip = styled.div`
  position: absolute;
  border-radius: 6px;
  background-color: ${(props: StripProps) => props.color};
  height: ${(props: StripProps) => (props.appearance === 'horizontal' ? '6px' : 'inherit')};
  width: ${(props: StripProps) => (props.appearance === 'horizontal' ? 'inherit' : '6px')};
  top: ${(props: StripProps) => (props.appearance === 'horizontal' ? '-8px' : '-2px')};
  left: ${(props: StripProps) => (props.appearance === 'vertical' ? '-8px' : '-2px')};
  bottom: ${(props: StripProps) => (props.appearance === 'vertical' ? '-2px' : 'inherit')};
  right: ${(props: StripProps) => (props.appearance === 'horizontal' ? '-2px' : 'inherit')};
`;

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
