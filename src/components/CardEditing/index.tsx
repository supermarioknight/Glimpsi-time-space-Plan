import React, { Component } from 'react';
import { Formik, FormikProps } from 'formik';
import { noop } from 'lodash-es';
import yup from 'yup';
import moment, { Moment } from 'moment-timezone';
import Textbox from '../Textbox';
import LocationSelect from '../LocationSelect';
import { Card } from '../../features/types';
import DatePicker from '../DatePicker';
import TimePicker from '../Timepicker';
import LabelSelect from '../LabelSelect';
import Button from '../Button';
import { setTime } from '../../lib/date';
import { timezone } from '../../lib/maps';
import ButtonGroup from '../Button/Group';
import FormFieldContainer from '../FormFieldContainer';

// tslint:disable-next-line no-any
export type OnSave = (values: Card) => any;

interface FormValues extends Card {
  time: Moment;
  timeZoneId: string;
}

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
  start?: Moment;
  duration?: number;
  onSave: OnSave;
  notes?: string;
  labels?: string[];
  // tslint:disable-next-line no-any
  onCancel: () => any;
  renderLeft?: (values: FormValues) => React.ReactNode;
  datePickerFrom?: Moment;
}

interface DefaultProps extends Props {
  renderLeft: (values: FormValues) => React.ReactNode;
}

const schema = yup.object().shape({
  duration: yup.number(),
  title: yup.string().required(),
  start: yup.object().required(),
  time: yup.object().required(),
  location: yup.object().required(),
  labels: yup.array(),
  notes: yup.string(),
  timeZoneId: yup.string().required(),
});

export default class CardEditing extends Component<Props> {
  static defaultProps: DefaultProps = {
    title: '',
    location: undefined,
    start: undefined,
    labels: [],
    duration: 0,
    renderLeft: () => null,
    onSave: noop,
    onCancel: noop,
  };

  finish = (values: FormValues) => {
    const { start, time, timeZoneId, ...props } = values;

    const startWithTz = moment.tz(setTime(start, time), timeZoneId);

    this.props.onSave({
      ...props,
      start: startWithTz,
      id: this.props.id,
    });
  };

  cancel = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    this.props.onCancel();
  };

  render() {
    const { title, location, start, duration, renderLeft, datePickerFrom, labels, notes } = this
      .props as DefaultProps;

    return (
      <Formik
        onSubmit={this.finish}
        validationSchema={schema}
        initialValues={{
          title,
          location,
          start,
          duration,
          labels,
          notes,
          time: start,
          timeZoneId: start && start.tz(),
        }}
      >
        {({
          values,
          handleChange,
          handleBlur,
          handleSubmit,
          setFieldValue,
          ...fieldProps
        }: FormikProps<FormValues>) => [
          renderLeft(values),

          <form onSubmit={handleSubmit} key="div">
            <FormFieldContainer name="title" {...fieldProps}>
              <Textbox
                value={values.title}
                label="Title"
                name="title"
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </FormFieldContainer>

            <FormFieldContainer name="start" {...fieldProps}>
              <DatePicker
                id="date"
                value={values.start ? moment(values.start) : null}
                onChange={value => {
                  setFieldValue('start', value);
                  setFieldValue('timeZoneId', undefined);

                  if (value && values.location) {
                    timezone(
                      values.location.position.lat,
                      values.location.position.lng,
                      value.unix()
                    ).then(tz => setFieldValue('timeZoneId', tz.timeZoneId));
                  }
                }}
                datePickerFrom={datePickerFrom}
              />
            </FormFieldContainer>

            <FormFieldContainer name="time" {...fieldProps}>
              <TimePicker
                onBlur={handleBlur}
                value={values.time}
                onChange={value => setFieldValue('time', value)}
              />
            </FormFieldContainer>

            <FormFieldContainer name="location" {...fieldProps}>
              <LocationSelect
                onChange={value => {
                  setFieldValue('location', value || undefined);
                  setFieldValue('timeZoneId', undefined);

                  if (value && values.start) {
                    timezone(value.position.lat, value.position.lng, values.start.unix()).then(tz =>
                      setFieldValue('timeZoneId', tz.timeZoneId)
                    );
                  }
                }}
                value={values.location}
                onBlur={handleBlur}
              />
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

            <ButtonGroup>
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
