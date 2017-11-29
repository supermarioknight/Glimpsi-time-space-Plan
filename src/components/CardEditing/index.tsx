import React, { Component } from 'react';
import { Formik, FormikProps } from 'formik';
import { noop } from 'lodash-es';
import moment, { Moment } from 'moment';
import Textbox from '../Textbox';
import LocationSelect from '../LocationSelect';
import { Card } from '../../features/types';
import DatePicker from '../DatePicker';
import TimePicker from '../Timepicker';

import { Root, Title, Location, DateTime } from '../Card';

// tslint:disable-next-line no-any
export type OnSave = (values: Card) => any;

export interface Props {
  id?: string;
  title?: string;
  location?: {
    formattedAddress: string;
    position: {
      lat: number;
      lng: number;
    };
  };
  time?: Moment;
  start?: Moment;
  duration?: number;
  onSave: OnSave;
  // tslint:disable-next-line no-any
  onCancel: () => any;
  renderLeft?: (values: Card) => React.ReactNode;
  datePickerFrom?: Moment;
}

interface DefaultProps extends Props {
  renderLeft: (values: Card) => React.ReactNode;
}

export default class CardEditing extends Component<Props> {
  static defaultProps: DefaultProps = {
    title: '',
    location: undefined,
    start: undefined,
    time: undefined,
    duration: 0,
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
    const {
      title,
      location,
      start,
      duration,
      renderLeft,
      time,
      datePickerFrom,
    } = this.props as DefaultProps;

    return (
      <Formik
        onSubmit={this.finish}
        initialValues={{ title, location, start, duration, time }}
      >
        {({
          values,
          handleChange,
          handleBlur,
          handleSubmit,
          setFieldValue,
        }: FormikProps<Card>) => [
          renderLeft(values),

          <Root key="root">
            <form onSubmit={handleSubmit}>
              <button type="submit">Save</button>
              <button type="cancel" onClick={this.cancel}>
                Cancel
              </button>

              <DateTime>
                <DatePicker
                  id="date"
                  value={values.start ? moment(values.start) : null}
                  onChange={value => setFieldValue('start', value)}
                  datePickerFrom={datePickerFrom}
                />

                <TimePicker
                  value={values.time}
                  onChange={value => setFieldValue('time', value)}
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
          </Root>,
        ]}
      </Formik>
    );
  }
}
