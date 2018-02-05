import * as React from 'react';
import { Formik, FormikProps } from 'formik';
import Textbox from '../Textbox';
import Button from '../Button';
import ButtonGroup from '../Button/Group';
import LocationSelect from '../LocationSelect';
import FormFieldContainer from '../FormFieldContainer';
import { Trip } from '../../state/trips/reducer';
import BasicHeader from '../Header/Basic';

// tslint:disable-next-line no-any
type OnStart = (trip: Trip) => any;
type TripWithoutKey = Trip & { key: never };

interface Props {
  onStart: OnStart;
}

const normalizeKey = (key: string) => {
  return key.toLowerCase();
};

// tslint:disable-next-line no-any
const bind = (cb: (trip: Trip) => any) => (values: TripWithoutKey) => {
  cb({
    ...values,
    key: normalizeKey(values.name),
  });
};

const TripStart: React.StatelessComponent<Props> = ({ onStart }) => (
  <React.Fragment>
    <BasicHeader />

    <Formik
      onSubmit={bind(onStart)}
      initialValues={{
        name: '',
        destination: undefined,
      }}
    >
      {({
        values,
        handleChange,
        handleBlur,
        handleSubmit,
        setFieldValue,
        ...fieldProps
      }: FormikProps<TripWithoutKey>) => (
        <form onSubmit={handleSubmit}>
          <FormFieldContainer name="name" {...fieldProps}>
            <Textbox
              value={values.name}
              label="Name"
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </FormFieldContainer>

          <FormFieldContainer name="destination" {...fieldProps}>
            <LocationSelect
              onChange={value => setFieldValue('destination', value || undefined)}
              value={values.destination}
              onBlur={handleBlur}
            />
          </FormFieldContainer>

          <ButtonGroup>
            <Button appearance="positive" type="submit">
              Start
            </Button>
          </ButtonGroup>
        </form>
      )}
    </Formik>
  </React.Fragment>
);

export default TripStart;
