import React from 'react';
import { WiredSpinner } from '../src';
import { boolean, color, number } from '@storybook/addon-knobs';
import { Container } from './Container';

export default {
  title: 'WiredSpinner',
};

export const Default = () => (
  <Container>
    <WiredSpinner
      spinning={boolean('spinning', true)}
      duration={number('duration', 1500)}
      color={color('color', 'black')}
    />
  </Container>
);
