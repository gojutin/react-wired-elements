import React from 'react';
import { WiredListBox, WiredItem } from '../src';
import { color, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { Container } from './Container';

export default {
  title: 'WiredListBox',
};

export const Default = () => (
  <Container>
    <WiredListBox
      selected="item1"
      horizontal={boolean('horizontal', false)}
      onSelect={action('onSelect Fired')}
      bgColor={color('bgColor', 'black')}
      color={color('color', 'white')}
    >
      <WiredItem value="item1">Item 1</WiredItem>
      <WiredItem value="item2">Item 2</WiredItem>
      <WiredItem value="item3">Item 3</WiredItem>
    </WiredListBox>
  </Container>
);
