import React from 'react';
import styled from 'styled-components';
import * as fonts from '../../assets/styles/fonts';

interface Props {
  name: string;
  errors: { [key: string]: string };
  touched: { [key: string]: boolean };
  children: React.ReactNode;
}

const Error = styled.div`
  ${fonts.weight.thick};
`;

const FormError: React.StatelessComponent<Props> = ({ name, errors, touched, children }) => {
  if (touched[name] && errors[name]) {
    return (
      <div>
        {children} <Error>{errors[name]}</Error>
      </div>
    );
  }

  return <span>{children}</span>;
};

export default FormError;
