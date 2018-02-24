import * as React from 'react';
import styled from 'styled-components';
import Rheostat from 'rheostat';
import moment, { Moment } from 'moment-timezone';
import { slider, Root, HandleTooltip, Handle, DateLabel } from './styles';

const Slider = styled(Rheostat)`
  ${slider};
`;

interface HandleProps {
  className: string;
}

interface Props {
  className?: string;
  onChange: (value: Moment[]) => void;
  // It's important to use a moment without hours and minutes for start/end and values.
  // Perhaps we should normalize it here so it's not hard to use.
  start: Moment;
  end: Moment;
  values: Moment[];
  type: 'days' | 'hours';
}

export default class DateSlider extends React.Component<Props> {
  changing: boolean;

  onChange = ({ values }: { values: number[] }) => {
    if (!this.changing) {
      return;
    }

    const { type, start, onChange, end } = this.props;
    const max = end.diff(start, type);

    onChange([moment(start).add(values[0], type), moment(end).add(values[1] - max, type)]);
    this.changing = false;
  };

  setChanging = () => {
    this.changing = true;
  };

  render() {
    const { className, start, end, values, type } = this.props;
    const min = 0;
    const max = end.diff(start, type);
    const valuesAsNumbers = values.map(value => value.diff(start, type));

    return (
      <Root className={className}>
        <DateLabel>{start.format('Do MMM')}</DateLabel>

        <Slider
          handle={({ className: _, ...handleProps }: HandleProps) => (
            <Handle {...handleProps}>
              <HandleTooltip>
                <DateLabel>
                  {moment(start)
                    .add(handleProps['aria-valuenow'], type)
                    .format('Do MMM')}
                </DateLabel>
              </HandleTooltip>
            </Handle>
          )}
          onChange={this.onChange}
          onValuesUpdated={this.setChanging}
          orientation="horizontal"
          min={min}
          max={max}
          values={valuesAsNumbers}
          snap
        />

        <DateLabel>{end.format('Do MMM')}</DateLabel>
      </Root>
    );
  }
}
