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

const Textbox = ({ label, placeholder, innerRef, ...props }: Props) => (
  <Label>
    <LabelText>{label}</LabelText>

    <Input
      placeholder={placeholder || label}
      innerRef={innerRef}
      {...props}
    />
  </Label>
);

Textbox.defaultProps = {
  placeholder: '',
};

export default Textbox;
