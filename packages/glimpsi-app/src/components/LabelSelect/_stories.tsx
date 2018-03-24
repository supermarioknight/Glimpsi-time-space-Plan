import * as React from 'react';
import { storiesOf } from '@storybook/react';
import LabelSelect from './';
import { action } from '@storybook/addon-actions';

storiesOf('LabelSelect', module)
  .add('unselected', () => <LabelSelect name="labels" value={[]} onChange={action('onChange()')} />)
  .add('selected', () => (
    <LabelSelect name="labels" value={['travel', 'fun']} onChange={action('onChange()')} />
  ));
