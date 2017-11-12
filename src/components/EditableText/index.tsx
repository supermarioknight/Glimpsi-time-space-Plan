import * as React from 'react';
import { Formik } from 'formik';
import styled from 'styled-components';
import Textbox from '../Textbox';
import editable, { InjectedProps } from '../../decorators/editable';

export interface RenderTextProps {
  children: string;
  onClick: () => void;
}

interface Props extends InjectedProps {
  renderText?: (props: RenderTextProps) => JSX.Element;
  name?: string;
  defaultValue: string;
  label: string;
  onSave: (value: string) => void;
}

interface DefaultProps {
  renderText: (props: RenderTextProps) => JSX.Element;
  name: string;
}

type PropsWithDefaults = Props & DefaultProps;

interface State {
  editing: boolean;
}

const Clickable = styled.span`
  cursor: pointer;
`;

function selectText (ref: HTMLFormElement | null) {
  if (ref) {
    ref.select();
    ref.focus();
  }
}

export default editable<Props>(
class EditableText extends React.Component<Props, State> {
  // Default props currently don't work as nicely as you'd expect.
  // See: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/11640
  static defaultProps: DefaultProps = {
    name: 'text',
    renderText: (props) => <div {...props} />,
  };

  finish = (values: { [value: string]: string }) => {
    const { name, onSave, setEditing, defaultValue } = this.props as PropsWithDefaults;

    const value = values[name];
    if (value !== defaultValue) {
      onSave(value);
    }

    setEditing(false);
  }

  render () {
    const { defaultValue, renderText, ...props } = this.props as PropsWithDefaults;

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
        {renderText({
          children: defaultValue,
          onClick: () => this.props.setEditing(true),
        })}
      </Clickable>
    );
  }
}
);
