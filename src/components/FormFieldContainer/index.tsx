import React from 'react';
import { Field, Error } from './styles';

interface Props {
  name: string;
  errors: { [key: string]: string };
  touched: { [key: string]: boolean };
  children: React.ReactNode;
}

const FormError: React.StatelessComponent<Props> = ({ name, errors, touched, children }) => {
  if (touched[name] && errors[name]) {
    return (
      <Field>
        {children} <Error>{errors[name]}</Error>
      </Field>
    );
  }

  return (
    <Field>
      {children}
      <Error />
    </Field>
  );
};

export default FormError;
