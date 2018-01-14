import * as React from 'react';
import { Option } from 'react-select';
import CreateableSelect from '../Select/Createable';

const promptTextCreator = (label: string) => `Create new label "${label}"`;
const options = ['travel', 'fun', 'accom'].map(option => ({ value: option, label: option }));

type StringOrUndefined = string | undefined;

interface Props {
  value: string[];
  onChange: (label: StringOrUndefined[]) => void;
  name: string;
}

const LabelSelect: React.StatelessComponent<Props> = ({ value, onChange, ...props }) => (
  <CreateableSelect
    {...props}
    multi
    promptTextCreator={promptTextCreator}
    options={options}
    value={value}
    onChange={(opts: Option<string>[]) =>
      onChange(opts && opts.map(option => option && option.value).filter(Boolean))
    }
  />
);

export default LabelSelect;
