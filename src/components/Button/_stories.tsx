import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './';

storiesOf('Button', module)
  .add('primary', () => <Button appearance="primary">hello, world</Button>)
  .add('secondary', () => <Button appearance="secondary">hello, world</Button>)
  .add('transparent', () => <Button appearance="transparent">hello, world</Button>);
