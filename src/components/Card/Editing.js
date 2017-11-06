// @flow

import React, { Component } from 'react';
import Textbox from '../Textbox';

import {
  Root,
  Title,
  Location,
  DateTime,
  HeroImage,
  type Props,
} from './';

const Form = Root.withComponent('form');
const HeroImageContainer = HeroImage.withComponent('div');

export default class EditableCard extends Component<Props, *> {
  render () {
    const { title, location, start, end, image, onCancel } = this.props;

    return (
      <Form>
        <button onClick={(e) => e.preventDefault() || onCancel()}>Cancel</button>

        <DateTime>
          <Textbox value={start} label="Start" />
          <Textbox value={end} label="End" />
        </DateTime>

        <HeroImageContainer>
          <Textbox value={image} label="Image" />
        </HeroImageContainer>

        <Title><Textbox value={title} label="Title" /></Title>
        <Location><Textbox value={location} label="Location" /></Location>
      </Form>
    );
  }
}
