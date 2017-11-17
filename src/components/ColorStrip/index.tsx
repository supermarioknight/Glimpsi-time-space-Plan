import * as React from 'react';
import styled from 'styled-components';

const Root = styled.div`position: relative;`;

interface StripProps {
  color: string;
  appearance: 'horizontal' | 'vertical';
}

const Strip = styled.div`
  position: absolute;
  border-radius: 6px;
  background: ${(props: StripProps) => props.color};
  height: ${(props: StripProps) => (props.appearance === 'horizontal' ? '6px' : '100%')};
  width: ${(props: StripProps) => (props.appearance === 'horizontal' ? '100%' : '6px')};
  top: ${(props: StripProps) => (props.appearance === 'horizontal' ? '-8px' : 'inherit')};
  left: ${(props: StripProps) => (props.appearance === 'vertical' ? '-8px' : 'inherit')};
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
  color: 'red',
};

export default ColorStrip;
