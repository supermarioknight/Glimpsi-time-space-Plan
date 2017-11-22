import React, { Component } from 'react';
import { Formik, FormikProps } from 'formik';
import Textbox from '../Textbox';
import { Card } from '../../features/types';
import LocationSelect from '../LocationSelect';

import { Root, Title, Location, DateTime } from '../Card';

export interface Props {
  id?: number;
  title?: string;
  location?: string;
  start?: string;
  duration?: number;
  onSave: (values: Card) => void;
  onCancel: () => void;
}

interface Values {
  title: string;
  location: {
    formattedAddress: string;
    position: any;
  };
  start: string;
  duration: string;
}

export default class CardEditing extends Component<Props> {
  static defaultProps = {
    title: '',
    location: '',
    start: '',
    duration: 0,
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
    const { title, location, start, duration } = this.props;

    return (
      <Formik onSubmit={this.finish} initialValues={{ title, location, start, duration }}>
        {({
          values,
          handleChange,
          handleBlur,
          handleSubmit,
          setFieldValue,
        }: FormikProps<Values>) => (
          <Root>
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
                  onChange={handleChange}
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
          </Root>
        )}
      </Formik>
    );
  }
}
