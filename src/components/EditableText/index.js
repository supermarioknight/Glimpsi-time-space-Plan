// @flow

import React, { Component, type Node } from 'react';
import { Formik } from 'formik'
import styled from 'styled-components';
import Textbox from '../Textbox';
import editable from '../../decorators/editable';

type Props = {
  component: Node,
  defaultValue: string,
  valueDecorator: (string) => string,
  name: string,
};

type State = {
  editing: boolean,
};

const Clickable = styled.span`
  cursor: pointer;
`;

function selectText (ref) {
  if (ref) {
    ref.select();
    ref.focus();
  }
}

export default editable(
class ControlledTextbox extends Component<Props, State> {
  static defaultProps = {
    component: 'div',
    name: 'text',
    valueDecorator: (str) => str,
  };

  finish = (values) => {
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
