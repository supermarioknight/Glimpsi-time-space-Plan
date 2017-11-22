import React from 'react';
import Select from '../Select';

const generateOptions = () => {
  const generated = [];

  for (let i = 0; i < 24; i += 1) {
    const suffix = i >= 12 ? 'pm' : 'am';
    const label = i === 0 ? 12 : i > 12 ? i - 12 : i;

    generated.push({
      label: `${label}:00${suffix}`,
      value: `${i}:00:00`,
    });

    generated.push({
      label: `${label}:15${suffix}`,
      value: `${i}:15:00`,
    });

    generated.push({
      label: `${label}:30${suffix}`,
      value: `${i}:30:00`,
    });

    generated.push({
      label: `${label}:45${suffix}`,
      value: `${i}:45:00`,
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
  onChange: (value: Option | null) => void;
  value: Option | undefined;
}

const Timepicker: React.StatelessComponent<Props> = ({ onChange, value }) => (
  <Select onChange={onChange} value={value} options={options} />
);

export default Timepicker;
