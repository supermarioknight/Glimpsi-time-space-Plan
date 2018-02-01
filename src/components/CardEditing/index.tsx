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
import Button from '../Button/Busy';
import Map from '../Map';
import { setTime } from '../../lib/date';
import { timezone } from '../../lib/maps';
import ButtonGroup from '../Button/Group';
import { MapContainer, Form, Root } from './styles';
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
  notes?: string;
  labels?: string[];
  onSave: OnSave;
  // tslint:disable-next-line no-any
  onCancel: () => any;
  datePickerFrom?: Moment;
}

interface State {
  loadingTimeZoneId: boolean;
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

export default class CardEditing extends Component<Props, State> {
  static defaultProps: Props = {
    title: '',
    location: undefined,
    start: undefined,
    duration: undefined,
    labels: [],
    onSave: noop,
    onCancel: noop,
  };

  state = {
    loadingTimeZoneId: false,
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
    const { title, location, start, duration, datePickerFrom, labels, notes } = this.props;

    return (
      <Root>
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
          }: FormikProps<FormValues>) => (
            <React.Fragment>
              <MapContainer>
                <Map markers={[values.location].filter(Boolean)} />
              </MapContainer>

              <Form onSubmit={handleSubmit}>
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
                        this.setState({
                          loadingTimeZoneId: true,
                        });

                        timezone(
                          values.location.position.lat,
                          values.location.position.lng,
                          value.unix()
                        ).then(tz => {
                          setFieldValue('timeZoneId', tz.timeZoneId);
                          this.setState({
                            loadingTimeZoneId: false,
                          });
                        });
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
                        this.setState({
                          loadingTimeZoneId: true,
                        });

                        timezone(value.position.lat, value.position.lng, values.start.unix()).then(
                          tz => {
                            setFieldValue('timeZoneId', tz.timeZoneId);
                            this.setState({
                              loadingTimeZoneId: false,
                            });
                          }
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
                  <Button busy={this.state.loadingTimeZoneId} appearance="positive" type="submit">
                    Save
                  </Button>
                </ButtonGroup>
              </Form>
            </React.Fragment>
          )}
        </Formik>
      </Root>
    );
  }
}
