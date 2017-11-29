import * as React from 'react';
import { storiesOf } from '@storybook/react';
import FormFieldContainer from './';

storiesOf('Form/Error', module)
  .add('error', () => (
    <FormFieldContainer
      errors={{ thing: 'error!' }}
      touched={{ thing: true }}
      name="thing"
    >
      <span>hi</span>
    </FormFieldContainer>
  ))
  .add('none', () => (
    <FormFieldContainer
      errors={{ thing: 'error!' }}
      touched={{ thing: true }}
      name="other-thing"
    >
      <span>hi</span>
    </FormFieldContainer>
  ));
