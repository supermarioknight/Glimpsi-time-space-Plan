import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Select, { OnChange } from './';

class SelectState extends React.Component {
  state = {
    value: undefined,
  };

  onChange: OnChange = geocode => {
    action('onChange')(geocode);

    this.setState({
      value: geocode,
    });
  };

  render() {
    return <Select value={this.state.value} onChange={this.onChange} />;
  }
}

storiesOf('LocationSelect', module).add('default', () => <SelectState />);
