import React, { Component } from 'react';
import { Formik } from 'formik';
import Textbox from '../Textbox';
import { Card } from '../../features/types';

import {
  Root,
  Title,
  Location,
  DateTime,
  HeroImage,
} from '../Card';

const HeroImageContainer = HeroImage.withComponent('div');

export interface Props {
  id?: number;
  title?: string;
  location?: string;
  image?: string;
  start?: string;
  end?: string;
  onSave: (values: Card) => void;
  onCancel: () => void;
}

export default class CardEditing extends Component<Props> {
  static defaultProps = {
    title: '',
    location: '',
    start: '',
    end: '',
    image: '',
  };

  finish = (values: Card) => {
    this.props.onSave({
      ...values,
      id: this.props.id,
    });
  }

  cancel = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    this.props.onCancel();
  }

  render () {
    const { title, location, start, end, image } = this.props;

    return (
      <Formik
        onSubmit={this.finish}
        initialValues={{
          title,
          location,
          start,
          end,
          image,
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit }) => (
          <Root>
            <form onSubmit={handleSubmit}>
              <button type="submit">Save</button>
              <button type="cancel" onClick={this.cancel}>Cancel</button>

              <DateTime>
                <Textbox
                  value={values.start}
                  label="Start"
                  name="start"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />

                <Textbox
                  value={values.end}
                  label="End"
                  name="end"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </DateTime>

              <HeroImageContainer>
                <Textbox
                  value={values.image}
                  label="Image"
                  name="image"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </HeroImageContainer>

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
                <Textbox
                  value={values.location}
                  label="Location"
                  name="location"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Location>
            </form>
          </Root>
        )}
      </Formik>
    );
  }
}
