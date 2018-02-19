import * as React from 'react';
import { Option } from 'react-select';
import Select from '../Select';
import { FullWidthLabel } from './styles';

const options = [
  'travel',
  'fun',
  'accom',
  'need to book',
  'booked',
  'unsure',
  'missed',
  'food',
  'sight seeing',
]
  .sort()
  .map(option => ({
    value: option,
    label: option,
  }));

type StringOrUndefined = string | undefined;

interface Props {
  value: string[];
  onChange: (label: StringOrUndefined[]) => void;
  name: string;
  placeholder?: string;
  // tslint:disable-next-line no-any
  onBlur?: (e: any) => void;
}

const LabelSelect: React.StatelessComponent<Props> = ({ value, onChange, ...props }) => (
  <Select
    {...props}
    multi
    options={options}
    optionRenderer={(option: { label: string }) => <FullWidthLabel>{option.label}</FullWidthLabel>}
    value={value}
    onChange={(opts: Option<string>[]) =>
      onChange(opts && opts.map(option => option && option.value).filter(Boolean))
    }
  />
);

export default LabelSelect;
