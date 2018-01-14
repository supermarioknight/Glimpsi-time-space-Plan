import * as React from 'react';
import { Option } from 'react-select';
import Select from '../Select';

const options = ['travel', 'fun', 'accom'].map(option => ({ value: option, label: option }));

type StringOrUndefined = string | undefined;

interface Props {
  value: string[];
  onChange: (label: StringOrUndefined[]) => void;
  name: string;
}

const LabelSelect: React.StatelessComponent<Props> = ({ value, onChange, ...props }) => (
  <Select
    {...props}
    multi
    options={options}
    value={value}
    onChange={(opts: Option<string>[]) =>
      onChange(opts && opts.map(option => option && option.value).filter(Boolean))
    }
  />
);

export default LabelSelect;
