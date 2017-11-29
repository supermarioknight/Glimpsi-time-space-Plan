import React from 'react';
import styled from 'styled-components';

interface Props {
  name: string;
  errors: { [key: string]: string };
  touched: { [key: string]: boolean };
  children: React.ReactNode;
}

const Error = styled.div`
  font-weight: bold;
`;

const FormError: React.StatelessComponent<Props> = ({
  name,
  errors,
  touched,
  children,
}) => {
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
