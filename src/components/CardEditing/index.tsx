import React, { Component } from 'react';
import { Formik, FormikProps } from 'formik';
import { noop } from 'lodash-es';
import Textbox from '../Textbox';
import LocationSelect from '../LocationSelect';
import { Card } from '../../features/types';

import { Root, Title, Location, DateTime } from '../Card';

// tslint:disable-next-line no-any
export type OnSave = (values: Card) => any;

export interface Props {
  id?: number;
  title?: string;
  location?: {
    formattedAddress: string;
    position: {
      lat: number;
      lng: number;
    };
  };
  start?: string;
  duration?: number;
  onSave: OnSave;
  // tslint:disable-next-line no-any
  onCancel: () => any;
  renderLeft?: (values: Card) => React.ReactNode;
}

interface DefaultProps extends Props {
  renderLeft: (values: Card) => React.ReactNode;
}

export default class CardEditing extends Component<Props> {
  static defaultProps: DefaultProps = {
    title: undefined,
    location: undefined,
    start: undefined,
    duration: undefined,
    renderLeft: () => null,
    onSave: noop,
    onCancel: noop,
  };

  finish = (values: Card) => {
    this.props.onSave({
      ...values,
      id: this.props.id,
    });
  };

  cancel = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    this.props.onCancel();
  };

  render() {
    const { title, location, start, duration, renderLeft } = this.props as DefaultProps;

    return (
      <Formik onSubmit={this.finish} initialValues={{ title, location, start, duration }}>
        {({ values, handleChange, handleBlur, handleSubmit, setFieldValue }: FormikProps<Card>) => [
          renderLeft(values),

          <Root key="root">
            <form onSubmit={handleSubmit}>
              <button type="submit">Save</button>
              <button type="cancel" onClick={this.cancel}>
                Cancel
              </button>

              <DateTime>
                <Textbox
                  autoFocus
                  value={values.start}
                  label="Start"
                  name="start"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />

                <Textbox
                  value={values.duration}
                  label="Duration"
                  name="duration"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setFieldValue('duration', +e.target.value)}
                  onBlur={handleBlur}
                />
              </DateTime>

              <Title>
                <Textbox
                  value={values.title}
                  label="Title"
                  name="title"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Title>

              <Location>
                <LocationSelect
                  onChange={value => setFieldValue('location', value)}
                  value={values.location}
                />
              </Location>
            </form>
          </Root>,
        ]}
      </Formik>
    );
  }
}
