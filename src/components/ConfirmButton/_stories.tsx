import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ConfirmButton from './';

storiesOf('ConfirmButton', module)
  .add('default', () => (
    <ConfirmButton onClick={action('onClick()')}>Do the thing!!</ConfirmButton>
  ))
  .add('custom text', () => (
    <ConfirmButton onClick={action('onClick()')} confirmText="UHHH">
      Do the thing!!
    </ConfirmButton>
  ));
