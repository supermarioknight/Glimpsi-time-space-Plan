import * as React from 'react';
import { Label, LabelText, Input } from './styles';

interface Props {
  label: string;
  name: string;
  autoFocus?: boolean;
  onChange: (e: React.ChangeEvent<HTMLElement>) => void;
  // tslint:disable-next-line no-any
  onBlur: (e: any) => void;
  innerRef?: (ref: null | HTMLElement) => void;
  value: string | number;
  placeholder?: string;
  type?: string;
}

const Textbox: React.StatelessComponent<Props> = ({ label, placeholder, innerRef, ...props }) => (
  <Label>
    <LabelText>{label}</LabelText>

    <Input placeholder={placeholder || label} innerRef={innerRef} {...props} />
  </Label>
);

Textbox.defaultProps = {
  placeholder: '',
  type: 'text',
};

export default Textbox;
