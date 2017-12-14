import * as React from 'react';
import styled from 'styled-components';
import Rheostat from 'rheostat';
import moment, { Moment } from 'moment';
import { slider, Root } from './styles';

const Slider = styled(Rheostat)`
  ${slider};
`;

interface Props {
  className?: string;
  onChange: (value: Moment[]) => void;
  start: Moment;
  end: Moment;
  values: Moment[];
  type: 'days' | 'hours';
}

export default class DateSlider extends React.Component<Props> {
  onChange = ({ values }: { values: number[] }) => {
    const { type, start, onChange, end } = this.props;
    const max = end.diff(start, type);

    onChange([moment(start).add(values[0], type), moment(end).add(values[1] - max, type)]);
  };

  render() {
    const { className, start, end, values, type } = this.props;
    const min = 0;
    const max = end.diff(start, type);
    const valuesAsNumbers = values.map(value => value.diff(start, type));

    return (
      <Root>
        {start.format('MM/DD')}

        <Slider
          handle={(handleProps: any) => (
            <div {...handleProps}>
              {moment(start)
                .add(handleProps['aria-valuenow'], type)
                .format('MM/DD')}
            </div>
          )}
          className={className}
          onChange={this.onChange}
          orientation="horizontal"
          snap
          min={min}
          max={max}
          values={valuesAsNumbers}
        />

        {end.format('MM/DD')}
      </Root>
    );
  }
}
