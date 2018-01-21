import * as React from 'react';
import { storiesOf } from '@storybook/react';
import FormFieldContainer from './';
import Textbox from '../Textbox';
import _ from 'lodash-es';

storiesOf('Form/Error', module)
  .add('error', () => (
    <div>
      <FormFieldContainer errors={{ thing: 'error!' }} touched={{ thing: true }} name="thing">
        <Textbox name="ok" label="Text" value="" onBlur={_.noop} onChange={_.noop} />
      </FormFieldContainer>

      <FormFieldContainer errors={{ thing: 'error!' }} touched={{ thing: true }} name="thing">
        <Textbox name="ok" label="Text" value="" onBlur={_.noop} onChange={_.noop} />
      </FormFieldContainer>
    </div>
  ))
  .add('none', () => (
    <div>
      <FormFieldContainer errors={{ thing: 'error!' }} touched={{ thing: true }} name="other-thing">
        <Textbox name="ok" label="Text" value="" onBlur={_.noop} onChange={_.noop} />
      </FormFieldContainer>

      <FormFieldContainer errors={{ thing: 'error!' }} touched={{ thing: true }} name="other-thing">
        <Textbox name="ok" label="Text" value="" onBlur={_.noop} onChange={_.noop} />
      </FormFieldContainer>
    </div>
  ));
