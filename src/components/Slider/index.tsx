import * as React from 'react';
import styled from 'styled-components';
import Rheostat from 'rheostat';
import moment, { Moment } from 'moment';

const Slider = styled(Rheostat)`
  overflow: visible;
  margin: 10px;
  flex-basis: 100%;

  .rheostat-background {
    background-color: #fcfcfc;
    border: 1px solid #d8d8d8;
    position: relative;
    height: 15px;
    top: 0px;
    width: 100%;
  }

  .rheostat-progress {
    background-color: #abc4e8;
    position: absolute;
    height: 13px;
    top: 1px;
  }

  .rheostat-handle {
    background-color: #fff;
    border: 1px solid #d8d8d8;
    border-radius: 20%;
    height: 24px;
    outline: none;
    z-index: 2;
    width: 24px;
    margin-left: -12px;
    top: -5px;
  }

  .rheostat-handle:before,
  .rheostat-handle:after {
    content: '';
    display: block;
    position: absolute;
    background-color: #dadfe8;
    top: 7px;
    height: 10px;
    width: 1px;
  }

  .rheostat-handle:before {
    left: 10px;
  }

  .rheostat-handle:after {
    left: 13px;
  }
`;

const Root = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 10px;
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

    onChange([
      moment(start).add(values[0], type),
      moment(end).add(values[1] - max, type),
    ]);
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
