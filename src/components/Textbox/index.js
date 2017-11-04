// @flow

import React from 'react';
import styled from 'styled-components';

type Props = {
  label: string,
  placeholder: string,
};

const Input = styled.input`
  font-size: 16px;
`;

const Label = styled.label`
  font-size: 16px;
`;

const LabelText = styled.span`
  display: block;
  opacity: 0;
  position: absolute;
  pointer-events: none;
`;

const Textbox = ({ label, placeholder, ...props }: Props) => (
  <Label>
    <LabelText>{label}</LabelText>

    <Input
      placeholder={placeholder || label}
      {...props}
    />
  </Label>
);

Textbox.defaultProps = {
  placeholder: '',
};

export default Textbox;
