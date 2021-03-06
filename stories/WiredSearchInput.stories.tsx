import React from 'react';
import { WiredSearchInput } from '../src';
import { text, boolean, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { Container } from './Container';

export default {
  title: 'WiredSearchInput',
};

export const Default = () => (
  <Container>
    <WiredSearchInput
      placeholder={text('placeholder', 'Search')}
      disabled={boolean('disabled', false)}
      onChange={action('onChange Fired')}
      onBlur={action('onBlur Fired')}
      onFocus={action('onFocus Fired')}
    />
  </Container>
);
