import * as React from 'react';
import { storiesOf } from '@storybook/react';
import FadeIn from '../../components/FadeIn';
import withFadeIn from './';

const MyComponent = withFadeIn(({ className }: { className?: string }) => (
  <div className={className}>hi mom!</div>
));

storiesOf('FadeIn', module)
  .add('hoc(div)', () => <MyComponent />)
  .add('component', () => <FadeIn>hi mum</FadeIn>);
