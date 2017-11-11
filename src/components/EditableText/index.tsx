import * as React from 'react';
import { Formik } from 'formik'
import styled from 'styled-components';
import Textbox from '../Textbox';
import editable, { InjectedProps } from '../../decorators/editable';

interface Props extends InjectedProps {
  component: Node,
  defaultValue: string,
  name: string,
  label: string,
  valueDecorator: (value: string) => string,
  onSave: (value: string) => void,
};

type State = {
  editing: boolean,
};

const Clickable = styled.span`
  cursor: pointer;
`;

function selectText (ref: HTMLFormElement | null) {
  if (ref) {
    ref.select();
    ref.focus();
  }
}

export default editable(
class ControlledTextbox extends React.Component<Props, State> {
  static defaultProps = {
    component: 'div',
    name: 'text',
    valueDecorator: (value: string) => value,
  };

  finish = (values: { [value: string]: string }) => {
    const value = values[this.props.name];
    if (value !== this.props.defaultValue) {
      this.props.onSave(value);
    }

    this.props.setEditing(false);
  };

  render () {
    const { component: Component, defaultValue, valueDecorator, ...props } = this.props;

    if (this.props.editing) {
      return (
        <Formik
          onSubmit={this.finish}
          initialValues={{
            [props.name]: defaultValue,
          }}
        >
          {({ values, handleChange, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <Textbox
                {...props}
                innerRef={selectText}
                value={values[props.name]}
                onChange={handleChange}
                onBlur={handleSubmit}
              />
            </form>
          )}
        </Formik>
      );
    }

    return (
      <Clickable>
        <Component onClick={() => this.props.setEditing(true)}>
          {valueDecorator(defaultValue)}
        </Component>
      </Clickable>
    );
  }
}
);
