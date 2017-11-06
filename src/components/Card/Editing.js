// @flow

import React, { Component } from 'react';
import { Formik } from 'formik'
import Textbox from '../Textbox';

import {
  Root,
  Title,
  Location,
  DateTime,
  HeroImage,
  type Props,
} from './';

const HeroImageContainer = HeroImage.withComponent('div');

export default class EditableCard extends Component<Props, *> {
  finish = (values) => {
    this.props.onSave(values);
  };

  cancel = (e) => {
    e.preventDefault();
    this.props.onCancel();
  };

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
