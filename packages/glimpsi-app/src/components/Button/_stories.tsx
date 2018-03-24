import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { routerStoriesOf } from '../../lib/storybook';
import Button from './';
import LinkButton from './Link';
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

routerStoriesOf('Button/Link', module)
  .add('default', () => (
    <LinkButton to="/" appearance="default">
      hello, world
    </LinkButton>
  ))
  .add('positive', () => (
    <LinkButton to="/" appearance="positive">
      hello, world
    </LinkButton>
  ))
  .add('negative', () => (
    <LinkButton to="/" appearance="negative">
      hello, world
    </LinkButton>
  ))
  .add('transparent', () => (
    <LinkButton to="/" appearance="transparent">
      hello, world
    </LinkButton>
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
