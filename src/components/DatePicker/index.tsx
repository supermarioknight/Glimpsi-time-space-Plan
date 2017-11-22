import React from 'react';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import { Moment } from 'moment';
import 'react-dates/lib/css/_datepicker.css';

interface Props {
  value: Moment | null;
  onChange: (date: Moment | null) => void;
  id: string;
  autoFocus?: boolean;
}

interface State {
  focused: boolean;
}

class DatePicker extends React.Component<Props, State> {
  state = {
    focused: this.props.autoFocus || false,
  };

  onFocusChange = ({ focused }: { focused: boolean }) => {
    this.setState({ focused });
  };

  render() {
    const { focused } = this.state;
    const { id, value } = this.props;

    return (
      <SingleDatePicker
        id={id}
        date={value}
        focused={focused}
        onDateChange={this.props.onChange}
        onFocusChange={this.onFocusChange}
      />
    );
  }
}

export default DatePicker;
