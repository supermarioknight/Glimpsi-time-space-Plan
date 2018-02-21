import * as React from 'react';
import { Formik, FormikProps } from 'formik';
import yup from 'yup';
import Helmet from 'react-helmet';
import { withAnalyticsEvents } from '@atlaskit/analytics-next';
import Textbox from '../Textbox';
import { withScreen } from '../../decorators/analytics/view';
import Button from '../Button';
import history from '../../routerHistory';
import ButtonGroup from '../Button/Group';
import LocationSelect from '../LocationSelect';
import FormFieldContainer from '../FormFieldContainer';
import { Trip } from '../../state/trips/reducer';
import { CenteredGutter } from '../Gutter';
import { Form } from './styles';

// tslint:disable-next-line no-any
type OnStart = (trip: Trip) => any;
type TripWithoutId = Trip & { id: never };

interface Props {
  onStart: OnStart;
  className?: string;
}

const normalizeKey = (key: string) => {
  return key.toLowerCase().replace(/\s/g, '-');
};

// tslint:disable-next-line no-any
const bind = (cb: (trip: Trip) => any) => (values: TripWithoutId) => {
  const id = normalizeKey(values.name);
  cb({
    ...values,
    id,
  });

  history.push(`/${id}`);
};

const schema = yup.object().shape({
  name: yup.string().required(),
  destination: yup.object().required(),
});

const TripStart: React.StatelessComponent<Props> = ({ onStart, className }) => (
  <CenteredGutter className={className}>
    <Helmet>
      <title>Start a Trip</title>
    </Helmet>

    <Formik
      onSubmit={bind(onStart)}
      validationSchema={schema}
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
      }: FormikProps<TripWithoutId>) => (
        <Form onSubmit={handleSubmit}>
          <FormFieldContainer name="destination" {...fieldProps}>
            <LocationSelect
              onChange={value => setFieldValue('destination', value || undefined)}
              value={values.destination}
              onBlur={handleBlur}
              placeholder="Where are you going?"
            />
          </FormFieldContainer>

          <FormFieldContainer name="name" {...fieldProps}>
            <Textbox
              value={values.name}
              label="What's this trips name?"
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </FormFieldContainer>

          <ButtonGroup>
            <Button appearance="positive" type="submit">
              Let's Go!
            </Button>
          </ButtonGroup>
        </Form>
      )}
    </Formik>
  </CenteredGutter>
);

export default withScreen<Props>('StartTrip')(
  withAnalyticsEvents<Props>({
    onStart: createAnalyticEvent => createAnalyticEvent({ action: 'create new trip' }).fire(),
  })(TripStart)
);
