import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import Blanket from './';

storiesOf('Blanket', module).add('default', () => <Blanket onClick={action('onClick()')} />);
