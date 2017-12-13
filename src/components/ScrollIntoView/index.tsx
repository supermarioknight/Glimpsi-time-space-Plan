import * as React from 'react';

interface Props {
  children: React.ReactElement<{}>;
  disabled?: boolean;
}

const ref = (el: HTMLElement | null) => el && el.scrollIntoView();

const ScrollIntoView: React.StatelessComponent<Props> = ({ children, disabled }) => {
  return React.cloneElement(children, {
    innerRef: disabled || ref,
  });
};

export default ScrollIntoView;
