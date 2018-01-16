import * as React from 'react';

interface Props {
  children: React.ReactElement<{}>;
  enabled?: boolean;
}

const ref = (el: HTMLElement | null) => el && el.scrollIntoView({ block: 'center' });

const ScrollIntoView: React.StatelessComponent<Props> = ({ children, enabled }) => {
  return React.cloneElement(children, {
    innerRef: enabled ? ref : undefined,
  });
};

export default ScrollIntoView;
