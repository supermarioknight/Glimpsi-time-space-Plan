import styled from 'styled-components';

export const Root = styled.div`
  position: relative;
`;

interface StripProps {
  color: string;
  appearance: 'horizontal' | 'vertical';
}

export const Strip = styled.div`
  position: absolute;
  border-radius: 2px;
  background-color: ${(props: StripProps) => props.color};
  height: ${(props: StripProps) =>
    props.appearance === 'horizontal' ? '6px' : 'inherit'};
  width: ${(props: StripProps) =>
    props.appearance === 'horizontal' ? 'inherit' : '3px'};
  top: ${(props: StripProps) =>
    props.appearance === 'horizontal' ? '-8px' : '-2px'};
  left: ${(props: StripProps) =>
    props.appearance === 'vertical' ? '-6px' : '-2px'};
  bottom: ${(props: StripProps) =>
    props.appearance === 'vertical' ? '-2px' : 'inherit'};
  right: ${(props: StripProps) =>
    props.appearance === 'horizontal' ? '-2px' : 'inherit'};
`;
