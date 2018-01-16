import React, { Component } from 'react';
import { Formik, FormikProps } from 'formik';
import { noop } from 'lodash-es';
import yup from 'yup';
import moment, { Moment } from 'moment';
import Textbox from '../Textbox';
import LocationSelect from '../LocationSelect';
import { Card } from '../../features/types';
import DatePicker from '../DatePicker';
import TimePicker from '../Timepicker';
import LabelSelect from '../LabelSelect';
import FormFieldContainer from '../FormFieldContainer';

import { Root, Title, Location, DateTime as DateTimeContainer } from '../Card/styles';

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
  labels?: string[];
  // tslint:disable-next-line no-any
  onCancel: () => any;
  renderLeft?: (values: Card) => React.ReactNode;
  datePickerFrom?: Moment;
}

interface DefaultProps extends Props {
  renderLeft: (values: Card) => React.ReactNode;
}

const schema = yup.object().shape({
  duration: yup.number(),
  title: yup.string().required(),
  start: yup.object().required(),
  time: yup.object().required(),
  location: yup.object().required(),
  labels: yup.array(),
});

export default class CardEditing extends Component<Props> {
  static defaultProps: DefaultProps = {
    title: '',
    location: undefined,
    start: undefined,
    time: undefined,
    labels: [],
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
    const { title, location, start, duration, renderLeft, time, datePickerFrom, labels } = this
      .props as DefaultProps;

    return (
      <Formik
        onSubmit={this.finish}
        validationSchema={schema}
        initialValues={{ title, location, start, duration, time, labels }}
      >
        {({
          values,
          handleChange,
          handleBlur,
          handleSubmit,
          setFieldValue,
          ...fieldProps
        }: FormikProps<Card>) => [
          renderLeft(values),

          <Root key="root">
            <form onSubmit={handleSubmit}>
              <button type="submit">Save</button>
              <button type="cancel" onClick={this.cancel}>
                Cancel
              </button>

              <DateTimeContainer>
                <FormFieldContainer name="start" {...fieldProps}>
                  <DatePicker
                    id="date"
                    value={values.start ? moment(values.start) : null}
                    onChange={value => setFieldValue('start', value)}
                    datePickerFrom={datePickerFrom}
                  />
                </FormFieldContainer>

                <FormFieldContainer name="time" {...fieldProps}>
                  <TimePicker
                    value={values.time}
                    onChange={value => setFieldValue('time', value)}
                  />
                </FormFieldContainer>

                <FormFieldContainer name="labels" {...fieldProps}>
                  <LabelSelect
                    name="labels"
                    value={values.labels}
                    onChange={labelOptions => setFieldValue('labels', labelOptions)}
                  />
                </FormFieldContainer>

                <FormFieldContainer name="duration" {...fieldProps}>
                  <Textbox
                    value={values.duration}
                    label="Duration"
                    name="duration"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </FormFieldContainer>
              </DateTimeContainer>

              <Title>
                <FormFieldContainer name="title" {...fieldProps}>
                  <Textbox
                    value={values.title}
                    label="Title"
                    name="title"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </FormFieldContainer>
              </Title>

              <Location>
                <FormFieldContainer name="location" {...fieldProps}>
                  <LocationSelect
                    onChange={value => setFieldValue('location', value)}
                    value={values.location}
                  />
                </FormFieldContainer>
              </Location>
            </form>
          </Root>,
        ]}
      </Formik>
    );
  }
}
