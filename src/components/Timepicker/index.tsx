import React from 'react';
import Select from '../Select';

const generateOptions = () => {
  const generated = [];

  for (let i = 0; i < 24; i += 1) {
    const suffix = i >= 12 ? 'pm' : 'am';
    const label = i === 0 ? 12 : i > 12 ? i - 12 : i;
    const valueSuffix = i < 10 ? `0${i}` : i;

    generated.push({
      label: `${label}:00${suffix}`,
      value: `${valueSuffix}:00:00`,
    });

    generated.push({
      label: `${label}:15${suffix}`,
      value: `${valueSuffix}:15:00`,
    });

    generated.push({
      label: `${label}:30${suffix}`,
      value: `${valueSuffix}:30:00`,
    });

    generated.push({
      label: `${label}:45${suffix}`,
      value: `${valueSuffix}:45:00`,
    });
  }

  return generated;
};

const options = generateOptions();

interface Option {
  label: string;
  value: string;
}

interface Props {
  onChange: (value: string | null) => void;
  value: string | undefined;
}

const Timepicker: React.StatelessComponent<Props> = ({ onChange, value }) => (
  <Select
    onChange={(option: Option) => onChange(option && option.value)}
    value={value}
    options={options}
  />
);

export default Timepicker;
