// @flow

import React, { Component, type Node } from 'react';
import { Formik } from 'formik'
import styled from 'styled-components';
import Textbox from '../Textbox';
import editable from '../../decorators/editable';

type Props = {
  component: Node,
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
  };

  finish = (values) => {
    this.props.onSave(values[this.props.name]);
    this.props.setEditing(false);
  };

  render () {
    const { component: Component, defaultValue, ...props } = this.props;

    if (this.props.editing) {
      return (
        <Formik
          onSubmit={this.finish}
          initialValues={{
            [props.name]: defaultValue,
          }}
        >
          {({ values, handleChange, handleBlur, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <Textbox
                {...props}
                innerRef={selectText}
                value={values[props.name]}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </form>
          )}
        </Formik>
      );
    }

    return (
      <Clickable>
        <Component onClick={() => this.props.setEditing(true)}>{defaultValue}</Component>
      </Clickable>
    );
  }
}
);
