// @flow

import React, { Component, type Node } from 'react';
import { Formik } from 'formik'
import styled from 'styled-components';
import Textbox from '../Textbox';

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

export default class ControlledTextbox extends Component<Props, State> {
  state = {
    editing: false,
  };

  static defaultProps = {
    component: 'div',
  };

  editing = () => {
    this.setState({
      editing: true,
    });
  };

  finish = (values) => {
    this.props.onSave(values[this.props.name]);
  };

  render () {
    const { component: Component, defaultValue, ...props } = this.props;

    if (this.state.editing) {
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

    return <Clickable><Component onClick={this.editing}>{defaultValue}</Component></Clickable>;
  }
}
