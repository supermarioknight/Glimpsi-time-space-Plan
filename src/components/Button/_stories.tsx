import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './';
import BusyButton from './Busy';

storiesOf('Button', module)
  .add('default', () => <Button appearance="default">hello, world</Button>)
  .add('positive', () => <Button appearance="positive">hello, world</Button>)
  .add('negative', () => <Button appearance="negative">hello, world</Button>)
  .add('transparent', () => <Button appearance="transparent">hello, world</Button>);

storiesOf('Button/Busy', module)
  .add('busy', () => (
    <BusyButton appearance="default" busy>
      hello, world
    </BusyButton>
  ))
  .add('not busy', () => (
    <BusyButton appearance="default" busy={false}>
      hello, world
    </BusyButton>
  ));
