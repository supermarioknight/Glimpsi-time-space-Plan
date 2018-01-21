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
import Button from '../Button';
import ButtonGroup from '../Button/Group';
import FormFieldContainer from '../FormFieldContainer';

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
  notes?: string;
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
  notes: yup.string(),
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
    const {
      title,
      location,
      start,
      duration,
      renderLeft,
      time,
      datePickerFrom,
      labels,
      notes,
    } = this.props as DefaultProps;

    return (
      <Formik
        onSubmit={this.finish}
        validationSchema={schema}
        initialValues={{ title, location, start, duration, time, labels, notes }}
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

          <form onSubmit={handleSubmit} key="div">
            <FormFieldContainer name="start" {...fieldProps}>
              <DatePicker
                id="date"
                value={values.start ? moment(values.start) : null}
                onChange={value => setFieldValue('start', value)}
                datePickerFrom={datePickerFrom}
              />
            </FormFieldContainer>

            <FormFieldContainer name="time" {...fieldProps}>
              <TimePicker value={values.time} onChange={value => setFieldValue('time', value)} />
            </FormFieldContainer>

            <FormFieldContainer name="labels" {...fieldProps}>
              <LabelSelect
                name="labels"
                value={values.labels}
                placeholder="Labels"
                onBlur={handleBlur}
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

            <FormFieldContainer name="notes" {...fieldProps}>
              <Textbox
                value={values.notes}
                label="Notes"
                name="notes"
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </FormFieldContainer>

            <FormFieldContainer name="title" {...fieldProps}>
              <Textbox
                value={values.title}
                label="Title"
                name="title"
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </FormFieldContainer>

            <FormFieldContainer name="location" {...fieldProps}>
              <LocationSelect
                onChange={value => setFieldValue('location', value)}
                value={values.location}
                onBlur={handleBlur}
              />
            </FormFieldContainer>

            <ButtonGroup>
              <Button type="cancel" onClick={this.cancel}>
                Cancel
              </Button>

              <Button appearance="positive" type="submit">
                Save
              </Button>
            </ButtonGroup>
          </form>,
        ]}
      </Formik>
    );
  }
}
