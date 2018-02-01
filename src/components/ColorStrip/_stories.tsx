import * as React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import ColorStrip from './';

interface ChildProps {
  display: string;
}

const Child = styled.div`
  display: ${(props: ChildProps) => props.display};
  width: 250px;
  height: 200px;
  background-color: black;
`;

storiesOf('ColorStrip', module)
  .add('horizontal', () => (
    <div>
      <ColorStrip appearance="horizontal">
        <Child display="inline-block" />
        <Child display="inline-block" />
      </ColorStrip>
    </div>
  ))
  .add('vertical', () => (
    <div>
      <ColorStrip appearance="vertical">
        <Child display="block" />
        <Child display="block" />
      </ColorStrip>
    </div>
  ));
