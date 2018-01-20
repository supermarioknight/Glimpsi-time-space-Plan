import React from 'react';
import 'react-dates/initialize';
import moment, { Moment } from 'moment';
import { SingleDatePicker } from 'react-dates';
import { Root } from './styles';

interface Props {
  value: Moment | null;
  onChange: (date: Moment | null) => void;
  id: string;
  autoFocus?: boolean;
  datePickerFrom?: Moment;
}

interface DefaultProps extends Props {
  datePickerFrom: Moment;
}

interface State {
  focused: boolean;
}

class DatePicker extends React.Component<Props, State> {
  static defaultProps = {
    datePickerFrom: moment(),
  };

  state = {
    focused: this.props.autoFocus || false,
  };

  onFocusChange = ({ focused }: { focused: boolean }) => {
    this.setState({ focused });
  };

  render() {
    const { focused } = this.state;
    const { id, value, datePickerFrom } = this.props as DefaultProps;

    return (
      <Root>
        <SingleDatePicker
          id={id}
          date={value}
          focused={focused}
          onDateChange={this.props.onChange}
          onFocusChange={this.onFocusChange}
          initialVisibleMonth={() => datePickerFrom}
        />
      </Root>
    );
  }
}

export default DatePicker;
