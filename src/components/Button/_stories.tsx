import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from './';
import BusyButton from './Busy';
import ConfirmButton from './Confirm';
import Toggler from '../Toggler';

storiesOf('Button', module)
  .add('default', () => <Button appearance="default">hello, world</Button>)
  .add('positive', () => <Button appearance="positive">hello, world</Button>)
  .add('negative', () => <Button appearance="negative">hello, world</Button>)
  .add('transparent', () => <Button appearance="transparent">hello, world</Button>)
  .add('disabled', () => (
    <Button appearance="default" disabled>
      hello, world
    </Button>
  ));

storiesOf('Button/Busy', module).add('default', () => (
  <Toggler>
    {({ toggle, shown }) => (
      <div>
        <button onClick={toggle}>click me</button>

        <BusyButton appearance="default" busy={shown}>
          hello, world
        </BusyButton>
      </div>
    )}
  </Toggler>
));

storiesOf('Button/Confirm', module)
  .add('default', () => <ConfirmButton onClick={action('onClick()')}>Do the thing!!</ConfirmButton>)
  .add('custom text', () => (
    <ConfirmButton onClick={action('onClick()')} confirmText="UHHH">
      Do the thing!!
    </ConfirmButton>
  ));
